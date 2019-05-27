const maxTweetLength = 280
const urlLength = 28

export const createTweet = (articleDetails) => {
  const {title, authorTwitter, url, publicationTwitter} = articleDetails
  let tweet = ''
  if (publicationTwitter) tweet = `@${publicationTwitter.replace('@', '')} ${tweet}`
  if (authorTwitter) tweet = `@${authorTwitter.replace('@', '')} ${tweet}`
  tweet += `#${articleDetails.tags.map(t => t.replace(' ', '')).join(' #')} `
  tweet = `${title.substring(0, maxTweetLength - urlLength - tweet.length)} ${tweet}`
  tweet += url

  return tweet
}
