const request = require('request');
const ftoc = require('f-c');

var getWeather = (lat, lng, callback) => {
	request({
		url: 'https://api.darksky.net/forecast/7ccd66aefdfde2cb09e8b8fdec36137a/' +lat +',' + lng,
		json : true
	},(error, response, body) => {
		if(error){
			callback("Unable to connect to the server");
		}else if(response.statusCode === 400){
			callback('Bad request');
		}else if(response.statusCode === 200){
			callback(undefined, {
				temperature : Math.round(ftoc(body.currently.temperature)*100)/100,
				apparentTemperature : Math.round(ftoc(body.currently.apparentTemperature)*100)/100

			});
		}
		
	});

}

module.exports = {getWeather};