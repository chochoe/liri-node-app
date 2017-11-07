// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says
var Spotify = require('node-spotify-api')
// const clients = require("./keys");
// console.log(clients);
var command = process.argv[2]
var choice = process.argv[3]
// console.log(input);

var spotify = new Spotify({
	id: '51501214c1f543b7849d4a450a99d2bc',
	secret: '2cc3465bdf8b4755859294d35615187c'
});

switch (command) {
	case "spotify-this-song":
	spotifyThisSong();
	break;

	case "my-tweets":
	myTweets();
	break;

	case "movie-this":
	movieThis();
	break;

	case "do-what-it-says":
	doWhatItSays();
	break;
}

function spotifyThisSong() {
	spotify.search({ type: 'track', query: choice }, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  };
	console.log(data.tracks.items[0]);
});

function myTweets() {
	client.get("statuses/user_timeline", {screen_name: "chochoe6"}, function(error, tweets, response) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    	};
  	});
};

// function movieThis() {

// }

function doWhatItSays() {

}
 
// clent.get(path, params, callback);
// client.post(path, params, callback);
// client.stream(path, params, callback);

// client.get('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
//   if(error) throw error;
//   console.log(tweets);  // The favorites. 
//   console.log(response);  // Raw response object. 
// });

// client.post('statuses/update', {status: 'I Love Twitter'})
//   .then(function (tweet) {
//     console.log(tweet);
//   })
//   .catch(function (error) {
//     throw error;
//   })

// // You can also get the stream in a callback if you prefer. 
// client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
//   stream.on('data', function(event) {
//     console.log(event && event.text);
//   });
 
//   stream.on('error', function(error) {
//     throw error;
};