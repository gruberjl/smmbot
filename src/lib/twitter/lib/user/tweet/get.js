import {getTwit} from '../../get-twit'

export const get = async (user_id) => new Promise(async (res) => {
  const twit = await getTwit()

  twit.get('statuses/user_timeline', {user_id}, (error, data) => {
    if (error) return res({error})

    return res(data)
  })
})
