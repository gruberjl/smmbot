import {chrome, db} from 'lib'

export const chromeLogin = async (accountId, provider, username, delayInMs) => {
  const browser = await chrome.build()
  await browser.sleep(delayInMs)

  let account = await db.accounts.get(accountId)

  if (account.error) {
    account = {
      id: accountId,
      provider,
      username
    }
  }

  const cookies = await chrome.getCookiesFromBrowser(browser)
  account.cookies = cookies

  await db.accounts.set(account)

  await browser.quit()
}
