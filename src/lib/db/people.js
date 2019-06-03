import {getCollection, set, get, remove, allDocs} from './lib'

const dbName = 'people'

export const people = {
  getCollection,
  set: set(dbName),
  get: get(dbName),
  remove: remove(dbName),
  allDocs: allDocs(dbName)
}
