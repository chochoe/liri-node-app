
var Spotify = require('node-spotify-api');
var fs = require("fs");
var command = process.argv[2];
var choice = process.argv[3];

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
// isolate results to show only artist, song name, preview link, album (if possible)
// default to "the sign" if no song specified

function myTweets() {
	client.get("statuses/user_timeline", {screen_name: "chochoe6"}, function(error, tweets, response) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    	};
  	});
};
// get myTweets to respond

function movieThis() {
	omdb.search('saw', function(err, movies) {
	    if(err) {
	        return console.error(err);
	    }
	 
	    if(movies.length < 1) {
	        return console.log('No movies were found!');
	    }
	 
	    movies.forEach(function(movie) {
	        console.log('%s (%d)', movie.title, movie.year);
	    });

	});

}

// get movieThis to work

function doWhatItSays() {

}
 
};