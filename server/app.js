'use strict'

const koa = require('koa')
const morgan = require('koa-morgan')

const app = koa()

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode')
} else if (process.env.NODE_ENV === 'development') {
  console.log('Running in development mode')
}


app.use(morgan.middleware('dev'))

app.use(function *(next) {
  console.log('yung wagoneer')

  yield next
})

app.use(function *() {
  this.body = 'Hello world\n'
})

app.listen(3000)
