import moment from 'moment'
import shortid from 'shortid'
import {chrome, medium, db} from 'lib'

export const mediumEngageBot = async () => {
  const browser = await login()

  const articles = await medium.tag.getArticles(browser)
  const authors = []

  for (let i=0; i<articles.length; i++) {
    await medium.article.read(browser, articles[i], 50)
    const {authorUrl} = await medium.article.getDetails(browser, articles[i], true)
    if (authorUrl && authorUrl != '')
      authors.push(authorUrl)
  }

  const item = {
    id: `${moment().format('YYYY-MM-DD')}-${shortid}`,
    ran: moment().format('YYYY-MM-DD'),
    authors
  }

  await db.mediumEngageBot.set(item)

  await logout(browser)
}

const login = async () => {
  const account = await db.accounts.get('gruberjl-medium')
  const browser = await chrome.build()
  await chrome.addCookiesToBrowser(browser, account.cookies)
  await browser.get('https://medium.com')

  return browser
}

const logout = async (browser) => {
  await chrome.destroy(browser)
}
