import {chrome, medium} from 'lib'
import {publications} from './publications'
import {tweet} from './tweet'

export const shareMediumArticles = async () => {
  const browser = await chrome.build()
  chrome.getCookies(browser, 'medium')

  for (let i=0; i<publications.length; i++) {
    const articleUrls = await medium.publication.getArticles(browser, publications[i].id)

    for (let j=0; j<articleUrls.length; j++) {
      await medium.article.read(browser, articleUrls[j])
      const articleDetails = await medium.article.getDetails(browser, articleUrls[j])
      articleDetails.publicationTwitter = publications[i].twitter

      await tweet(articleDetails)
    }
  }

  await chrome.destroy(browser)
}
