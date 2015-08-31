'use strict'

import express from 'express'
import request from 'request'
import db from './db/skills.json'

const app = express()
let data;
let json = {}

const options = {
  url: 'http://blog.miguhruiz.xyz/ghost/api/v0.1/posts?limit=4/',
  headers: {
    'Authorization': 'tokenultrasecreto'
  }
}

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
  request(options, ajaxCallback)
  res.setHeader('Content-Type', 'application/json')
  res.send(data)
}

module.exports.getSkills = function (req, res) {
  res.send(db)
}
