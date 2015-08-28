'use strict'

import express from 'express'
import router from './routes'

const app = express()

app.get('/', router.start)
app.get('/latest-posts', router.getPosts)
app.get('/data/skills', router.getSkills)

app.listen(3000, function (port) {
  console.log('Tu app está en el puerto' + port)
})
