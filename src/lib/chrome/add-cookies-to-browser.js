const addCookiesToBrowser = async (browser, cookies) => {
  for (let i = 0; i < cookies.length; i++) {
    await browser.manage().addCookie(cookies[i])
  }
}

module.exports = {addCookiesToBrowser}
