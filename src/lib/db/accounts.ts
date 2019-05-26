import {getDb, create, get, remove, allDocs} from './lib'

const dbName = 'accounts'

export const accounts = {
  getDb,
  create: create(dbName),
  get: get(dbName),
  remove: remove(dbName),
  allDocs: allDocs(dbName)
}
