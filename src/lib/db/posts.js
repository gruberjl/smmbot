import moment from 'moment'
import {getCollection, set, get, remove, allDocs, snapshotToDocs} from './lib'

const dbName = 'posts'

const readyToPost = async () => {
  const collection = getCollection(dbName)

  return collection
    .where('posted', '==', false)
    .where('postAt', '<=', moment().toISOString())
    .orderBy('postAt')
    .get()
    .then(snapshotToDocs)
    .catch(error => ({error}))
}

export const posts = {
  getCollection,
  set: set(dbName),
  get: get(dbName),
  remove: remove(dbName),
  allDocs: allDocs(dbName),
  find: {
    readyToPost
  }
}
