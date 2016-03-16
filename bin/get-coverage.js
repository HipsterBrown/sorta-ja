#!/usr/bin/env node

/*
   require phantom
   open testing page with script tag loading coverage-bundle
     if status === 'success'
       cov = eval(window.__coverage__)
       fs.writeFile('coverage.json', JSON.stringify(cov))
  
*/

var path = require('path')
var childProcess = require('child_process')
var http = require('http')
var url = require('url')
var fs = require('fs')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path

var server = http.createServer(function (request, response) {
  var urlParts = url.parse(request.url, true)
  var jsRegex = /js/

  if (urlParts.pathname.match(jsRegex)) {
    response.writeHead(200, {"Content-Type": "text/javascript"})
    fs.readFile(path.join(__dirname, '../test/coverage-bundle.js'), function (err, content) {
      if (err) {
        throw err
      }

      response.end(content)
    })
  } else {
    response.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile(path.join(__dirname, '../test/index.html'), function (err, content) {
      if (err) {
        throw err
      }

      response.end(content)
    })
  }
})

server.listen(9001)

console.log('Server listening at http://localhost:9001')

childProcess.exec('npm run test:istanbul', [], function(err, stdout, stderr) {
  if (err) {
    throw err
  }
  console.log(stdout.toString(), stderr.toString())
})
