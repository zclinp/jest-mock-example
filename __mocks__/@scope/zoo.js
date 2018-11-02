const zoo = {}

zoo.get = jest.fn().mockImplementation((role) => {
  if (role === 'dog') {
    return 'wang'
  } else if (role === 'cat') {
    return 'meow'
  }
  return '...'
})

module.exports = zoo