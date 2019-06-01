import {chrome, medium, db} from 'lib'
import {publications} from './publications'
import {saveTweet} from './save-tweet'

export const shareMediumArticles = async (accountId) => {
  const account = await db.accounts.get(accountId)
  const browser = await chrome.build()
  chrome.addCookiesToBrowser(browser, account.cookies)

  for (let i=0; i<publications.length; i++) {
    const articleUrls = await medium.publication.getArticles(browser, publications[i].id)

    for (let j=0; j<articleUrls.length; j++) {
      await medium.article.read(browser, articleUrls[j])
      const articleDetails = await medium.article.getDetails(browser, articleUrls[j])
      articleDetails.publicationTwitter = publications[i].twitter

      await saveTweet(account.user, accountId, articleDetails)
    }
  }

  await chrome.destroy(browser)
}
