import {db, twitter, random} from 'lib'

const gruberjlUserId = 771616958

const getBot = async (id) => {
  if (id) {
    const bot = await db.bots.get(id)
    return bot
  }

  const twitterBots = await db.bots.getTwitterBots()
  return twitterBots[random(0, twitterBots.length-1)]
}

export const botEngageTwitter = async (id) => {
  const bot = await getBot(id)
  await twitter.user.engage(bot.accounts.twitter, gruberjlUserId, false, random(3,7))
}
