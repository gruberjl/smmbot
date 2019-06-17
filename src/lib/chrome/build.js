import 'chromedriver'
import webdriver from 'selenium-webdriver'

export const build = async () => {
  var chromeCapabilities = webdriver.Capabilities.chrome()
  var chromeOptions = {'args': ['--disable-notifications']}
  chromeCapabilities.set('chromeOptions', chromeOptions)

  const browser = new webdriver.Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build()
  await browser.get('http://gitbit.org')

  return browser
}
