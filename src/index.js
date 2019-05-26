import {twitter} from 'lib'

const a = async () => {
  const r = await twitter.followers.get()
  console.log(r)
}
a()
