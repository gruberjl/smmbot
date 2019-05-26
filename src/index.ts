import {db} from 'lib'

const a = async () => {
  db.getDb('accounts')
}
a()
