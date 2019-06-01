import moment from 'moment'
import {db} from 'lib'
import {createTweet} from './create-tweet'

const createId = () => {
  const date = moment().format("YYYY-MM-DD")
  const platform = 'tw'
  const random = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  return `${date}-${platform}-${random}`
}

export const saveTweet = async (userId, accountId, articleDetails) => {
  const message = createTweet(articleDetails)
  await db.posts.set({
    provider: 'twitter',
    id: createId(),
    message,
    postAt: moment().toISOString(),
    posted: false,
    account: accountId,
    user: userId
  })
}
