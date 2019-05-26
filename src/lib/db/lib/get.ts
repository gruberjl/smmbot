import {getDb} from './get-db'

export const get = (dbName) => (id) => new Promise((res) => {
  const db = getDb(dbName)

  db.get(id, (error, response) => {
    if (error)
      res({error})
    else
      res(response)
  })
})
