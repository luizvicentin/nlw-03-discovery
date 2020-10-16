// import package
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

// initiating the express 
const server = express() 
server
//using static files
.use(express.static('assets'))

// configure template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// create a route
.get('/', pages.index)
.get('/orphanage', pages.orphanage) 
.get('/orphanages', pages.orphanages) 
.get('/create-orphanage', pages.createOrphanage) 

// connect a route
server.listen(5500)