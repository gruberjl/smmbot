import {getDb} from './get-db'

export const create = (dbName) => (data) => new Promise((res) => {
  const db = getDb(dbName)

  db.put(data, (error, response) => {
    if (error)
      res({error})
    else {
      data._id = response.id
      data._rev = response.rev
      res(data)
    }
  })
})
