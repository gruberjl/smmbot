import {getTwit} from '../get-twit'

export const follow = async (user_id) => new Promise(async (res) => {
  const twit = await getTwit()

  twit.post('friendships/create', {user_id}, (error, data) => {
    if (error) return res({error})

    return res(data)
  })
})
