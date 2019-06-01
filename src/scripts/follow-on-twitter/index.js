import moment from 'moment'
import {twitter, db} from 'lib'

export const followOnTwitter = async (numOfFollower = 10) => {
  const allTweets = await twitter.tweet.search('medium.com productive')
  const notSensitiveTweets = allTweets.filter(tweet => !tweet.possibly_sensitive)
  const tweets = twitter.tweet.sortByEngagement(notSensitiveTweets).slice(0, numOfFollower)

  for (let i=0; i<tweets.length; i++) {
    const tweet = tweets[i]
    await twitter.tweet.like(tweet.id_str)
    await twitter.user.engage(tweet.user.id_str)
  }

  const users = tweets.map(tweet => tweet.user.id_str)

  await db.twitterAutoFollow.set({
    account: 'twitter',
    id: moment().format("YYYY-MM-DD"),
    users
  })
}
