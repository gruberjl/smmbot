import {getDb} from './get-db'

export const allDocs = (dbName) => (options = {include_docs: true}) => new Promise((res) => { // eslint-disable-line
  const db = getDb(dbName)

  db.allDocs(options, (error, response) => {
    if (error)
      res({error})
    else
      res(response)
  })
})
