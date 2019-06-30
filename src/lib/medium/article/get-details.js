import {By} from 'selenium-webdriver'

export const getDetails = async (browser, url, isAlreadyOnUrl = false) => {
  if (!isAlreadyOnUrl)
    await browser.get(url)

  const title = await browser.findElement(By.css('meta[name="title"]')).getAttribute('content').catch(() => undefined) || ''
  const authorTwitter = await browser.findElement(By.css('meta[name="twitter:creator"]')).getAttribute('content').catch(() => undefined) || ''
  const authorUrl = await browser.findElement(By.css('link[rel="author"]')).getAttribute('href').catch(() => undefined) || ''
  const cleanUrl = await browser.findElement(By.css('meta[property="og:url"]')).getAttribute('content').catch(() => undefined) || ''
  const image = await browser.findElement(By.css('meta[property="og:image"]')).getAttribute('content').catch(() => undefined) || ''
  const tags = []
  const tagEls = await browser.findElements(By.css('.tags li')).catch(() => undefined) || []
  for (let i=0; i<tagEls.length; i++) {
    tags.push(await tagEls[i].getText())
  }

  return {title, authorUrl, authorTwitter, url: cleanUrl, image, tags}
}
