import {chrome, db} from 'lib'

const accountId = 'medium' // Id for the database doc that will be created
const delay = 1 * 1000 * 60 // number of milliseconds before closing browser

const createDoc = async () => { // eslint-disable-line
  await db.accounts.put({
    _id: accountId,
    cookies: []
  })
}

const chromeLogin = async () => {
  const doc = await db.accounts.get(accountId)
  if (doc.error) await createDoc()

  const browser = await chrome.build()
  await browser.sleep(delay)

  await chrome.saveCookies(browser, accountId)

  await browser.quit()
}

chromeLogin()
