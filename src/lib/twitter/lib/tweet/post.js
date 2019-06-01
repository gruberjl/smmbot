import {getTwit} from '../get-twit'

export const post = (account, status) => new Promise(async (res) => {
  const twit = await getTwit(account)

  twit.post('statuses/update', {status}, (error, data) => {
    if (error) return res({error})

    return res(data)
  })
})
