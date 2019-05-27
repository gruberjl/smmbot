import {getCollection} from './get-collection'

export const allDocs = (dbName) => () => {
  const collection = getCollection(dbName)

  return collection.get()
    .then(snapshot => {
      const docs = []
      snapshot.forEach(doc => { docs.push(doc.data()) })
      return docs
    })
    .catch(error => ({error}))
}
