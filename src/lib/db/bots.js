import {getCollection, set, get, remove, allDocs, snapshotToDocs} from './lib'

const dbName = 'bots'

const getTwitterBots = async () => {
  const collection = getCollection(dbName)

  return collection
    .where('accounts.twitter.accessToken', '>', '')
    .get()
    .then(snapshotToDocs)
    .catch(error => ({error}))
}

export const bots = {
  getCollection,
  set: set(dbName),
  get: get(dbName),
  remove: remove(dbName),
  allDocs: allDocs(dbName),
  getTwitterBots
}
