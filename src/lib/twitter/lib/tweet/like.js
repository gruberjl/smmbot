import {getTwit} from '../get-twit'

export const like = async (id_str) => new Promise(async (res) => {
  const twit = await getTwit()

  twit.post('favorites/create', {id:id_str}, (error, data) => {
    if (error) return res({error})

    return res(data)
  })
})
