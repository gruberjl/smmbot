import {By} from 'selenium-webdriver'

export const getArticles = async (browser, tag="productivity") => {
  await browser.get(`https://medium.com/tag/${tag}/latest`)
  await fetchArticles(browser)
  const urls = await getPostUrls(browser)
  return urls
}

const fetchArticles = async (browser) => {
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)')
  await browser.sleep(3000)
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)')
  await browser.sleep(3000)
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)')
  await browser.sleep(3000)
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)')
  await browser.sleep(3000)
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)')
  await browser.sleep(3000)
}

const getPostUrls = async (browser) => {
  const urls = []
  const els = await browser.findElements(By.css('.postArticle-readMore a'))

  for (let i=0; i<els.length; i++) {
    const url = await els[i].getAttribute('href').catch(error => ({error}))
    if (!url.error)
      urls.push(url)
  }

  return urls
}
