import {db} from 'lib'

const getAccounts = async () => {
  const docs = await db.bots.allDocs()

  docs.forEach(doc => {
    if (doc.accounts.reddit) {
      const d = doc.accounts.reddit
      d.email = doc.email
      delete d.password
      console.log(d)
      console.log('')
    }
  })
}

getAccounts()
