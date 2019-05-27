import {db} from 'lib'

export const saveCookies = async (browser, docId) => {
  const doc = await db.accounts.get(docId)

  const cookies = await browser.manage().getCookies()
  doc.cookies = cookies

  await db.accounts.set(doc)
}
