import express from 'express'
import routes from './routes/index'
import logger from './utilities/logger'
import path from 'path'

const app = express()
const port = 3000

app.use('/api', logger, routes)

app.get('/', logger, (req: express.Request, res: express.Response): void => {
  res.sendFile(path.resolve('./') + '/landing-page/index.html')
})
app.use(express.static('landing-page'))

app.use((_req:express.Request , res:express.Response)=>{
  res.status(404).json({
      message:
      'Get back to the main page'
  })
})
app.listen(port, (): void => {
  console.log(`server started at localhost:${port}`)
})

export default app
