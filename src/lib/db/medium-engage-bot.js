import {getCollection, set, get, remove, allDocs} from './lib'

const dbName = 'mediumEngageBot'

export const mediumEngageBot = {
  getCollection,
  set: set(dbName),
  get: get(dbName),
  remove: remove(dbName),
  allDocs: allDocs(dbName)
}
