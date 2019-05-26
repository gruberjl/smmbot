import {getDb, put, get, remove, allDocs} from './lib'

const dbName = 'accounts'

export const accounts = {
  getDb,
  put: put(dbName),
  get: get(dbName),
  remove: remove(dbName),
  allDocs: allDocs(dbName)
}
