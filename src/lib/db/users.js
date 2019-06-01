import {getCollection, set, get, remove, allDocs} from './lib'

const dbName = 'users'

export const users = {
  getCollection,
  set: set(dbName),
  get: get(dbName),
  remove: remove(dbName),
  allDocs: allDocs(dbName)
}
