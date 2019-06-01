import {getTwit} from '../get-twit'

export const get = (account, options = { screen_name: 'gruberjl' }) => new Promise(async (res) => {
  const twit = await getTwit(account)

  twit.get('followers/ids', options,  (error, data) => {
    if (error) return res({error})

    return res(data)
  })
})
