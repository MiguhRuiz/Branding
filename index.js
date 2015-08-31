'use strict'

import express from 'express'
import router from './routes'

const app = express()

app.use('/public', express.static('./app/public'))
app.set('views', __dirname + '/app')
app.set('view engine', 'jade')

app.get('/', router.start)
app.get('/latest-posts', router.getPosts)
app.get('/data/skills', router.getSkills)

app.listen(3000, function (port) {
  console.log('Tu app está en el puerto' + port)
})