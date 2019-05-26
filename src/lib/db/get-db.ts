import PouchDB from 'pouchdb'

const dbs = {}

export const getDb = (dbName) => {
  if (dbs[dbName]) return dbs[dbName]

  dbs[dbName] = new PouchDB(`leveldb://C:\\Users\\JohnGruber\\OneDrive - John Gruber\\gitbit\\dbs\\${dbName}`)
}
