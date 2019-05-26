import {getTwit} from '../get-twit'

export const get = (options = { screen_name: 'gruberjl' }) => new Promise(async (res) => {
  const twit = await getTwit()
  
  twit.get('followers/ids', options,  (error, data) => {
    if (error) return res({error})

    return res(data)
  })
})
