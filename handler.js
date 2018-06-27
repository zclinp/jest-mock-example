const { foo1, foo2, foo3 } = require('./foo.js')

async function handler () {
  return [foo1(), foo2(), await foo3()]
}

handler().then(console.log)