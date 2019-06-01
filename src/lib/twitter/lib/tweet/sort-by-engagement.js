export const sortByEngagement = (tweets) =>
  tweets.sort((a, b) => {
    const engagementA = a.retweet_count + a.favorite_count
    const engagementB = b.retweet_count + b.favorite_count
    if (engagementA < engagementB)
      return 1

    if (engagementA == engagementB)
      return 0

    return -1
  })
