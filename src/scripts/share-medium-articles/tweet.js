import {twitter} from 'lib'
import {createTweet} from './create-tweet'

export const tweet = async (articleDetails) => {
  const status = createTweet(articleDetails)
  console.log(await twitter.tweet.post(status))
}
