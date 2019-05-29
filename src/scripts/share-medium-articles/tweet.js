import {twitter} from 'lib'
import {createTweet} from './create-tweet'

export const tweet = async (articleDetails) => {
  const status = createTweet(articleDetails)
  await twitter.tweet.post(status)
}
