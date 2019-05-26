import Twit from 'twit'
import {db} from 'lib'

let twit

export const getTwit = async () => {
  if (!twit) {
    const doc = await db.accounts.get('twitter')
    twit = new Twit(doc.api)
  }

  return twit
}
