import {chrome} from './lib'

const a = async () => {
  const browser = await chrome.build()
  chrome.destroy(browser)
}
a()
