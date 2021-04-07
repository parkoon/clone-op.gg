import axios from 'axios'

const client = axios.create({
  baseURL: 'https://codingtest.op.gg',
})

const fetcher = (url: string) => client.get(url)

export default fetcher
