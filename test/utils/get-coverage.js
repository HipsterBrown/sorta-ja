var page = require('webpage').create()
var fs = require('fs')

page.open('http://localhost:9001', function(status) {
  console.log("Status: " + status)

  if(status === "success") {
    setTimeout(function () {
      var coverage = page.evaluate(function() {
        return window.__coverage__
      })

      if (coverage) {
        console.log('Writing coverage to coverage/coverage.json')
        fs.write('coverage.json', JSON.stringify(coverage), 'w')
        phantom.exit()
      } else {
        console.log('No coverage data generated')
      }
    }, 5000)
  } else {
    console.log(status)
    phantom.exit()
  }
});
