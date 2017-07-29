const yargs = require('yargs');
const request = require('request');

var argv = yargs
.options({
	a:{
		alias:'address',
		describe:'enter address for which you need weather info',
		string:true,
		demand: true
	}
})
.help()
.alias('help' , 'h')
.argv;

var address = encodeURIComponent(argv.a);

request({
	url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address,
	json : true
}, (error, response, body) => {
	console.log(`ADDRESS: ${body.results[0].formatted_address}`);
	console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
	console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
});