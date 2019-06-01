import Twit from 'twit'
import {db} from 'lib'

let twit

export const getTwit = async (account) => {
  if (!twit) {
    const doc = await db.apps.get('twitter')

    twit = new Twit({
      consumer_key: doc.apiToken,
      consumer_secret: doc.apiSecret,
      access_token: account.accessToken,
      access_token_secret: account.secret
    })
  }

  return twit
}
