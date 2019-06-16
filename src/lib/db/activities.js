import {getCollection, set, get, remove, allDocs} from './lib'

const dbName = 'activities'

export const activities = {
  getCollection,
  set: set(dbName),
  get: get(dbName),
  remove: remove(dbName),
  allDocs: allDocs(dbName)
}
