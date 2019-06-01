import {getTwit} from '../get-twit'

export const follow = async (account, user_id) => new Promise(async (res) => {
  const twit = await getTwit(account)

  twit.post('friendships/create', {user_id}, (error, data) => {
    if (error) return res({error})

    return res(data)
  })
})
