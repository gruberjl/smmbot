import {getDb} from './get-db'

export const remove = (dbName) => (doc) => new Promise((res) => {
  const db = getDb(dbName)

  db.remove(doc, (error, response) => {
    if (error)
      res({error})
    else
      res(response)
  })
})
