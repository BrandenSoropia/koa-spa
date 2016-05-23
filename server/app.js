'use strict'

const koa = require('koa')
const morgan = require('koa-morgan')

const app = koa()

app.use(morgan.middleware('dev'))

app.use(function *() {
  this.body = 'Hello world\n'
})

app.listen(3000)