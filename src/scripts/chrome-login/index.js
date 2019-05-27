import {chrome, db} from 'lib'

const accountId = 'flipboard' // Id for the database doc that will be created
const delay = 10 * 1000 * 60 // number of milliseconds before closing browser

const createDoc = async () => { // eslint-disable-line
  await db.accounts.set({
    id: accountId,
    cookies: []
  })
}

export const chromeLogin = async () => {
  const doc = await db.accounts.get(accountId)
  if (doc.error) await createDoc()

  const browser = await chrome.build()
  await browser.sleep(delay)

  await chrome.saveCookies(browser, accountId)

  await browser.quit()
}
