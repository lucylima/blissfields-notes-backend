import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const port = process.env.PORT || 3000
const server = express()

server.use(cors())

server.listen(port, () => {
  console.log('running at port ' + port)
})
