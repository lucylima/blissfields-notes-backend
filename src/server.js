import express from 'express'
import cors from 'cors'
import { sequelizeAuthenticate } from './database/database.js'
import 'dotenv/config'
import userRouter from './routes/user.route.js'
import bitsRoutes from './routes/bits.routes.js'

const port = process.env.PORT || 3000
const server = express()

server.use(cors())
server.use(userRouter)
server.use(bitsRoutes)

server.listen(port, () => {
  console.log('running at port ' + port)
  sequelizeAuthenticate()
})
