import {getCollection} from './get-collection'

export const set = (dbName) => (data) => {
  const collection = getCollection(dbName)

  return collection.doc(data.id).set(data)
    .then(() => data)
    .catch(error => ({error}))
}
