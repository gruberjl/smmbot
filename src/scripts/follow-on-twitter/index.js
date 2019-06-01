import moment from 'moment'
import {twitter, db} from 'lib'

export const followOnTwitter = async (accountId, numOfFollower = 10) => {
  const account = await db.accounts.get(accountId)

  const allTweets = await twitter.tweet.search(account, 'medium.com productive')
  const notSensitiveTweets = allTweets.filter(tweet => !tweet.possibly_sensitive)
  const tweets = twitter.tweet.sortByEngagement(notSensitiveTweets).slice(0, numOfFollower)

  for (let i=0; i<tweets.length; i++) {
    const tweet = tweets[i]
    await twitter.tweet.like(account, tweet.id_str)
    await twitter.user.engage(account, tweet.user.id_str)
  }

  const followed = tweets.map(tweet => tweet.user.id_str)

  await db.twitterAutoFollow.set({
    id: `${accountId.user}-${moment().format("YYYY-MM-DD")}`,
    provider: 'twitter',
    ranOn: moment().format("YYYY-MM-DD"),
    user: accountId.user,
    account: accountId,
    followed
  })
}
