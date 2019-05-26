import webdriver from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'
import chromedriver from 'chromedriver'

export const build = async (disableNotifications = true) => {
  const options = new chrome.Options()
  if (disableNotifications) options.addArguments('--disable-notifications')

  chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

  const browser = new webdriver.Builder().forBrowser('chrome').withCapabilities(options).build()
  await browser.get('http://gitbit.org')

  return browser
}
