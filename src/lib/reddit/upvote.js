import {chrome, db} from 'lib'
import {By} from 'selenium-webdriver'

export const upvote = async () => {
  const accounts = (await db.accounts.allDocs()).filter(a => a.provider == 'reddit')
  const activity = (await db.activities.allDocs()).filter(a => !a.completed)[0]

  for (let i=0; i<accounts.length; i++) {
    const account = accounts[i]
    const browser = await chrome.build()
    chrome.addCookiesToBrowser(browser, account.cookies)
    await browser.get('https://www.reddit.com')
    await browser.sleep(5000)
    await browser.get(activity.url)
    await browser.sleep(20000)
    const btn = await browser.findElement(By.css(`#upvote-button-t3_${activity.providerId}`))
    await btn.click()
    await browser.sleep(3000)
    await chrome.destroy(browser)
    if (!activity.accountsCompleted) activity.accountsCompleted = {}
    activity.accountsCompleted[account.id] = true
  }
  activity.completed = true
  await db.activities.set(activity)
}
