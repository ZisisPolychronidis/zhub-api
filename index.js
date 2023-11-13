const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/', function(req, res) {

  let id = req.query.id.toLowerCase();
  let url = 'https://www.pornhub.com/embed/' + id;

  // The structure of our request call
  // The first parameter is our URL
  // The callback function takes 3 parameters: an error, response status code, and the html
  request(url, function(error, response, html) {

    // First, we'll check to make sure no errors occurred when making the request
    if (!error) {

      // Next, we'll utilize the cheerio library on the returned html, which will essentially give us jQuery functionality
      var $ = cheerio.load(html);

      // Find the script tag by its position using :nth-child(6)
      var scriptWithHLS = $('body > script:nth-child(6)').html();

      // Extract the HLS URL using a regular expression
      var hlsUrlMatch = scriptWithHLS.match(/"videoUrl":"(.*?)"/);
      var hls = hlsUrlMatch ? hlsUrlMatch[1].replace(/\\/g, '') : null;

      // And now, the JSON format we are going to expose
      var json = {
        id: id,
        url: url,
        hls: hls
      };

      // Send the JSON as a response to the client
      res.send(json);
    }

  });

});

app.listen(process.env.PORT || 5000);
module.exports = app;
