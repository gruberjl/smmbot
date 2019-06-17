import {db, chrome} from 'lib'

export const getAccounts = async () => {
  // const docs = (await db.people.allDocs()).filter(d => d.medium && d.medium.username)
  const docs = (await db.people.allDocs()).filter(d => d.medium && d.medium.username && !d.medium.isLoggedIn)

  console.log(docs.length)

  const doc = docs[7]
  console.log(doc.medium)
  console.log(doc.email)

  const browser = await chrome.build()
  // await chrome.addCookiesToBrowser(browser, doc.medium.cookies)
  await browser.get(`https://medium.com/`)
  await browser.sleep(300000)

  const account = {
    id: `medium-${doc.medium.username}`,
    provider: 'medium',
    username: doc.medium.username,
    email: doc.email
  }

  const cookies = await chrome.getCookiesFromBrowser(browser)
  account.cookies = cookies

  await db.accounts.set(account)
  await browser.quit()
  // docs.forEach(doc => {
  //   console.log(doc.medium)
  //   console.log(doc.email)
  // })
}
