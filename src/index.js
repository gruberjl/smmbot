import {db} from 'lib'

const a = async () => {
  const r = await db.accounts.allDocs()
  console.log(r)
}
a()
