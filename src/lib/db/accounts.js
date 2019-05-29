import moment from 'moment'
import {getCollection, set, get, remove, allDocs} from './lib'

const dbName = 'accounts'

const isReadyToShare = (account) => {
  const nextShare = moment(account.lastShare).add(account.nextShare, 'minutes')
  return nextShare.isSameOrBefore(moment())
}

export const accounts = {
  getCollection,
  set: set(dbName),
  get: get(dbName),
  remove: remove(dbName),
  allDocs: allDocs(dbName),
  isReadyToShare
}
