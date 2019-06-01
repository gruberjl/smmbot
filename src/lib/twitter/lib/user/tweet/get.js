import {getTwit} from '../../get-twit'

export const get = async (account, user_id) => new Promise(async (res) => {
  const twit = await getTwit(account)

  twit.get('statuses/user_timeline', {user_id}, (error, data) => {
    if (error) return res({error})

    return res(data)
  })
})
