const axios = require('axios');
// require('axios-base-url')("api.openweathermap.org/data/2.5/forecast?q=");
const config = require('../hidden/config');

function getCurrent(city) {
  const APIKEY = config.KEY;
  return axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + APIKEY );
}

function getDays(city) {
  const APIKEY = config.KEY;
  return axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=metric&cnt=5&APPID=" + APIKEY );
}

const weatherApi = {
  getCurrent: function(city) {
    return axios.all(city.map(function (city) {
      return getCurrent(city);
    })).then(function (info) {
      return info;
    })
  },
  getDays: function(city) {
    return axios.all(city.map(function (city) {
      return getDays(city);
    })).then(function (info) {
      return info;
    })
  }
}

module.exports = weatherApi;
