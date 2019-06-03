import moment from 'moment'
import {db, twitter} from 'lib'
import {getAccountPosts} from './get-account-posts'

export const sharePosts = async () => {
  const accountPosts = await getAccountPosts()
    
  for (let i=0; i<accountPosts.length; i++) {
    const {account, post} = accountPosts[i]

    if (account.provider == 'twitter') {
      const response = await twitter.tweet.post(account, post.message)
      if (response.error)
        console.log(response.error)
      else {
        account.nextShare = moment().add(account.shareFrequency, 'minutes').toISOString()
        await db.accounts.set(account)
        post.posted = true
        await db.posts.set(post)
      }
    }
  }
}
