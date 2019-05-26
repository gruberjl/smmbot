import {db} from 'lib'

const a = async () => {
  const doc = await db.accounts.allDocs()
  console.log(doc)
}
a()
