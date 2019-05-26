import {chrome} from './chrome'

const a = async () => {
  const browser = await chrome.build()
  chrome.destroy(browser)
}
a()
