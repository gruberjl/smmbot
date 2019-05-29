import {db} from 'lib'

const getOnePostPerAccount = (posts) => {
  const results = posts
    .sort((post1, post2) =>
      post2.postAt > post1.postAt
    )
    .reduce((acc, post) => {
      acc[post.account] = post
      return acc
    }, {})

  return Object.values(results)
}

const accountsToObject = (acc, account) => {
  acc[account.id] = account
  return acc
}

export const getAccountPosts = async () => {
  const accounts = (await db.accounts.allDocs())
    .filter(db.accounts.isReadyToShare)
    .reduce(accountsToObject, {})

  const posts = getOnePostPerAccount(await db.posts.find.readyToPost())

  const accountPosts = posts.map(post => ({
    post,
    account: accounts[post.account]
  }))

  return accountPosts
}
