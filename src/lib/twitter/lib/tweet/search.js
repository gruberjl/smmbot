import {getTwit} from '../get-twit'

export const search = (account, query) => new Promise(async (res) => {
  const twit = await getTwit(account)

  const settings = { q: query, count: 100, include_entities: true, lang: 'en' }

  twit.get('search/tweets', settings, (error, data) => {
    if (error) return res({error})

    return res(data.statuses)
  })
})
