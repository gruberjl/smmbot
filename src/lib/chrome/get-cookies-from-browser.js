export const getCookiesFromBrowser = async (browser) => {
  return await browser.manage().getCookies()
}
