import {db} from 'lib'

const getOnePostPerAccount = (posts) => {
  let accountsDone = []

  return posts.filter(post => {
    if (accountsDone.includes(post.account)) return false

    accountsDone.push(post.account)
    return true
  })
}

export const getAccountPosts = async () => {
  const accounts = await db.accounts.getReadyToShare()
  const posts = getOnePostPerAccount(await db.posts.find.readyToPost())

  const accountPosts = posts.map(post => {
    const account = accounts.find(account => account.id == post.account)

    return {account, post}
  })

  return accountPosts
}
