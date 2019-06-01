import {chromeLogin} from './index'

const accountId = 'linkedin' // Id for the database doc that will be created
const provider = 'linked'
const username = 'gruberjl'
const delay = 10 * 1000 * 60 // number of milliseconds before closing browser

chromeLogin(accountId, provider, username, delay)
