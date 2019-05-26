import {chrome, db} from 'lib'

const a = async () => {
  // console.log(await db.accounts.get('medium'))
  const browser = await chrome.build()
  chrome.getCookies(browser, 'medium')
}
a()
