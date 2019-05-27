// import {get} from './lib/db/lib/get'
import {chrome} from 'lib'

const a = async () => {
  const browser = await chrome.build()
  await browser.get('https://flipboard.com/')
  await chrome.getCookies(browser, 'flipboard')
}
a()
