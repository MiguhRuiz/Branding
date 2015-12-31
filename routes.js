'use strict'

import express from 'express'
import ghost from 'ghost-client'
import conf from './conf.json'
import db from './db/skills.json'

const app = express()
let data;
let json = {}

const Client = ghost.createClient({
  endpoint: conf.url,
  token: conf.token
})

function ajaxCallback(error, response, body) {
  if (error) {
    console.log(error)
  }
  data = body;
}

module.exports.start =  function (req, res) {
  res.render('index')
}

module.exports.getPosts = function (req, res) {
  Client.posts(function (err, posts) {
    if (err) console.log(err)
    res.setHeader('Content-Type', 'application/json')
    res.send(posts)
  })
}

module.exports.getSkills = function (req, res) {
  res.send(db)
}
