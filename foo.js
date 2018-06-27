const axios = require('axios')

const bar = require('./bar.js')

function foo1 () {
  return 'foo1'
}

function foo2 (msg) {
  const result = bar(msg)
  return 'foo2' + result
}

async function foo3 () {
  const resp = await axios.get('https://example.com/')
  return resp.data.slice(0, 15)
}

function _foo () {
  return '_foo'
}


module.exports = { foo1, foo2, foo3 }
