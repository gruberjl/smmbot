import {getCollection, set, get, remove, allDocs} from './lib'

const dbName = 'twitterAutoFollow'

export const twitterAutoFollow = {
  getCollection,
  set: set(dbName),
  get: get(dbName),
  remove: remove(dbName),
  allDocs: allDocs(dbName)
}
