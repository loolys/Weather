const axios = require('axios');
// require('axios-base-url')("api.openweathermap.org/data/2.5/forecast?q=");
const config = require('../hidden/config');

function getData(city) {
  const APIKEY = config.KEY;
  return axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + APIKEY )
}

const weatherApi = {
  getData: function(city) {
    return axios.all(city.map(function (city) {
      return getData(city);
    })).then(function (info) {
      return info;
    })
  }
}

module.exports = weatherApi;
