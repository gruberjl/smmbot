import {getCollection, set, get, remove, allDocs} from './lib'

const dbName = 'apps'

export const apps = {
  getCollection,
  set: set(dbName),
  get: get(dbName),
  remove: remove(dbName),
  allDocs: allDocs(dbName)
}
