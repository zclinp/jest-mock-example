const rewire = require('rewire')

let { foo1, foo2, foo3 } = require('./foo.js')
const _foo = rewire('./foo.js').__get__('_foo')

jest.mock('./bar.js')
const { bar } = require('./bar.js')
bar.mockImplementation((msg) => 'barMock')

let resp
// jest.mock('jest')
const axios = require('axios')
resp = { data: '12345678901234567890'}
axios.get.mockResolvedValueOnce(resp)

const zoo = require('@scope/zoo')

describe('foo', () => {
  test('mock foo1', () => {
    foo1 = jest.fn(() => 'foo1Mock')
    expect(foo1()).toBe('foo1Mock')
  })

  test('foo2 call bar', () => {
    expect(foo2('qoo')).toBe('foo2barMock')
    expect(bar.mock.calls.length).toBe(1);
    expect(bar.mock.calls[0][0]).toBe('qoo');
    expect(bar.mock.results[0].value).toBe('barMock');
  })

  test('foo3 call axios', async () => {
    expect.assertions(1)
    const data = await foo3()
    expect(data).toBe('123456789012345')
  })

  test('call axios from __mocks__', async () => {
    const { data } = await axios.get('https://example.com')
    expect(data).toBe('axiosMockModule')
  })

  test('_foo is an internal function', () => {
    expect(_foo()).toBe('_foo')
  })

  test('call scope module from __mocks__', () => {
    expect(zoo.get('dog')).toBe('wang')
    expect(zoo.get('cat')).toBe('meow')
  })
})