'use strict'
import $ from 'jquery'

const BLOG_URL = "http://blog.miguhruiz.xyz"

function activateTemplate(id) {
  const t = document.querySelector(id)
  return document.importNode(t.content, true)
}

function renderPost(thumbnail, name, url) {
  const post_url = BLOG_URL + url
  let clone = activateTemplate('.post')

  clone.querySelector('.post-image').src = thumbnail
  clone.querySelector('.post-title').href = post_url
  clone.querySelector('.post-title').innerHTML = name

  $('.posts').append(clone)
}

// $.getJSON('/latest-posts', function (data) {
//   const posts = data.posts
//
//   posts.map((post) => {
//     renderPost(post.image, post.title, post.url)
//   })
// })
