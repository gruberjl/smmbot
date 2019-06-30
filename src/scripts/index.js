import '@babel/polyfill'

import {mediumEngageBot} from './medium-engage-bot'

const start = async () => {
  await mediumEngageBot()
}

start()
