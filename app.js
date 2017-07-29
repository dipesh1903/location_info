const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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
location = geocode.geocodeAddress(address, (errors, results) => {
 	if(errors){
 		console.log(errors);
 	}else{
 		console.log(results.Address);
 		weather.getWeather(results.Latitude, results.Longitude, (errors, temp) => {
 			if(errors){
 				console.log(errors)
 			}else{
 				console.log(`The temperature is ${temp.temperature} celcius. But is feels like ${temp.apparentTemperature} celcius`);

 			}
 		} );	
 	}

 });


