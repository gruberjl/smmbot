import {getTwit} from '../get-twit'

export const post = (status) => new Promise(async (res) => {
  const twit = await getTwit()

  twit.post('statuses/update', {status}, (error, data) => {
    if (error) return res({error})

    return res(data)
  })
})
