/*
 * Express server exposing a Falcor API
 */
'use strict'

import path from 'path'

import falcorExpress from 'falcor-express'
import Router from 'falcor-router'
import express from 'express'

import greetingsRoute from './js/routers/greetingsRouter.js'
import charactersRoute from './js/routers/charactersRouter.js'

const app = express()
const APP_PORT = 3000

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
  return new Router([
      greetingsRoute,
      charactersRoute
  ])
}))

// serve static files from current directory
app.use('/', express.static(path.resolve(__dirname, 'public')))

// Run the app
app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`)
})
