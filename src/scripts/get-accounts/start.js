require('@babel/polyfill')
require('@babel/register')
const {getAccounts} = require('./index')

getAccounts()
