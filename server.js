/*
 * Express server exposing a Falcor API
 */
'use strict'

import path from 'path'

import falcorExpress from 'falcor-express'
import express from 'express'

import GreetingsRouter from './js/routers/greetingsRouter'

const app = express()
const APP_PORT = 3000

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
  // create a Virtual JSON resource with single key ("greeting")
  return new GreetingsRouter('Guillaume')
}))

// serve static files from current directory
app.use('/', express.static(path.resolve(__dirname, 'public')))

// Run the app
app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`)
})
