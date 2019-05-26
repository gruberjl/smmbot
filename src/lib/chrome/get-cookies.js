import {db} from 'lib'

const addCookies = async (driver, cookies) => {
  for (let i = 0; i < cookies.length; i++) {
    await driver.manage().addCookie(cookies[i])
  }
}

const getCookies = async (browser, docId) => {
  const doc = await db.accounts.get(docId)

  if (doc.cookies) await addCookies(browser, doc.cookies)
}

module.exports = {getCookies}
