import {join} from 'path'
import admin from 'firebase-admin'

admin.initializeApp({
  credential: admin.credential.cert(join(__dirname, '..', '..', '..', '..' ,'secret.json'))
})

const db = admin.firestore()

const collections = {}

export const getCollection = (collectionName) => {
  if (!collections[collectionName])
    collections[collectionName] = db.collection(collectionName)

  return collections[collectionName]
}
