const axios = jest.genMockFromModule('axios')

const resp = { data: 'axiosMockModule'}
axios.get = jest.fn().mockResolvedValue(resp)

module.exports = axios