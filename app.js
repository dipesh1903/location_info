const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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
 geocode.geocodeAddress(address);


