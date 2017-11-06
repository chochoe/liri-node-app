// console.log('this is loaded');

var Twitter = require('twitter');

// var twitterKeys = {
var client = new Twitter ({
  consumer_key: 'dxVWnrfiZiRiKK8OmYN99vrhP',
  consumer_secret: '6QwQQLFGqhPdJFVa26Pfq8k3klvZqwl0lAzUcA3fZ5DaU8ZhLT',
  access_token_key: '926194872280694784-GhXophJjQZ2vGuj9CxNxsvK1LAriiBR',
  access_token_secret: 'K8HNUB8Y5rWEW4X1OGTi3Eb2pcTFawciv7gXDJ69GdLVt',
});

var stream = client.stream('statuses/filter', {track: 'javascript'});
stream.on('data', function(event) {
  console.log(event && event.text);
});
 
stream.on('error', function(error) {
  throw error;
});

module.exports = twitterKeys;

// var spotifyKeys = {
var spotify = new Spotify({
	client_id: '51501214c1f543b7849d4a450a99d2bc',
	clent_secret: '51501214c1f543b7849d4a450a99d2bc',
});

var Spotify = require('node-spotify-api');
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });

module.exports = spotifyKeys;