import {tweet} from '../tweet'
import {follow} from './follow'
import {tweet as userTweet} from './tweet'


export const engage = async (account, user_id, followUser=true, numOfLikes=3) => {
  const results = {}

  if (followUser) {
    try {
      results.follow = await follow(account, user_id)
    } catch (error) {
      results.follow = {error}
    }
  }

  const tweets = await userTweet.get(account, user_id)
  if (tweets.error) {
    results.likedTweets = {error: tweets.error}
  } else {
    results.likedTweets = []
    const sortedTweets = tweet.sortByEngagement(tweets).slice(0, numOfLikes)
    for (let i=0; i<sortedTweets.length; i++) {
      const response = tweet.like(account, sortedTweets[i].id_str)
      results.likedTweets.push({
        tweet: sortedTweets[i],
        response
      })
    }
  }

  return {results}
}
