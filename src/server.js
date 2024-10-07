import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import './config/association.js'
import { sequelizeAuthenticate } from './database/database.js'
import userRouter from './routes/user.routes.js'
import bitsRoutes from './routes/bits.routes.js'
import notesRoutes from './routes/notes.routes.js'

const port = process.env.PORT || 3000
const server = express()

server.use(express.json())
server.use(cors())
server.use(userRouter)
server.use(bitsRoutes)
server.use(notesRoutes)

server.listen(port, () => {
  console.log('running at port ' + port)
  sequelizeAuthenticate()
})
