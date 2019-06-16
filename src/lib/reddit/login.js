import {chrome, db} from 'lib'
import {By} from 'selenium-webdriver'

export const redditLogin = async (username, password) => {
  const account = {
    id: `reddit-${username}`,
    provider: 'reddit',
    username,
    password
  }

  const browser = await chrome.build()
  await browser.get('https://www.reddit.com/login/')

  const usernameEl = await browser.findElement(By.css('#loginUsername'))
  await usernameEl.sendKeys(account.username)

  const passwordEl = await browser.findElement(By.css('#loginPassword'))
  await passwordEl.sendKeys(account.password)

  const btn = await browser.findElement(By.css('.AnimatedForm__submitButton'))
  await btn.click()

  await browser.sleep(10000)

  const cookies = await chrome.getCookiesFromBrowser(browser)
  account.cookies = cookies

  await db.accounts.set(account)

  await chrome.destroy(browser)
}
