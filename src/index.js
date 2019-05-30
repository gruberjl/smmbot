// import {get} from './lib/db/lib/get'
import "@babel/polyfill"
import {sharePosts} from 'scripts'
const fifteenMinutes = 900000

const start = async () => {
  sharePosts()

  setInterval(() => {
    sharePosts()
  }, fifteenMinutes)
}

start()
