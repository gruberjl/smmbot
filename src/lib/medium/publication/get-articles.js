import {By} from 'selenium-webdriver'
import moment from 'moment'

export const getArticles = async (browser, publication = 'the-mission', filter='today') => {
  await browser.get(`https://medium.com/${publication}/latest`)

  const posts = await browser.findElements(By.className('postArticle'))
  const urls = []

  for (let i=0; i<posts.length; i++) {
    const premium = await posts[i].findElement(By.className('svgIcon--star')).catch(() => undefined)
    const date = await posts[i].findElement(By.css('time')).getAttribute('datetime').catch(() => undefined)

    if (premium) continue

    if (filter === 'today')
      if (!moment(date).add(1, "days").isSame(new Date(), 'day')) continue

    const url = await posts[i].findElement(By.css('.postArticle-readMore a')).getAttribute('href').catch(() => undefined)

    if (url) urls.push(url)
  }

  return urls
}
