import {getCollection} from './get-collection'
import {snapshotToDocs} from './snapshot-to-docs'

export const allDocs = (dbName) => () => {
  const collection = getCollection(dbName)

  return collection.get()
    .then(snapshotToDocs)
    .catch(error => ({error}))
}
