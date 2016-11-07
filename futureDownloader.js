var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on ('error', (err) => {console.log("Error "+err); throw(err);})
  .on ('response', (response) => {
    console.log('Response Status Code: ', response.statusCode);
    console.log('Response Content Type: ', response.headers['content-type']);
    console.log('Downloading image...')
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on ('finish', () => {console.log('Downloading complete');})