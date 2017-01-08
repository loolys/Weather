const React = require('react');
const WeatherApi = require('../api/weatherApi');
const Loading = require('react-loading');
const styles = require('../styles/main')
const ImageRender = require('./ImageRender');



class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      loading: true,
      icon0: ""
    }
  }

  componentDidMount() {
    // current weather Api call
    WeatherApi.getCurrent([this.props.params.city])
      .then(function (info){
        // console.log(info[0].data);
        let temp = info[0].data.main.temp
        this.setState({
           temp: temp,
           loading: false
          });
      }.bind(this));

    // 5 day forecast
    WeatherApi.getDays([this.props.params.city])
      .then(function (info) {
        console.log(info[0].data);
        this.setState({
          icon0: info[0].data.list[0].weather[0].icon
        })
      }.bind(this));
  }

  render() {
    let today = new Date();
    let icon_day0 = this.state.icon0;
    let img0_url = "http://openweathermap.org/img/w/" + icon_day0 + ".png";
    return (
      this.state.loading === true ? <Loading type="spin" color="#000000" /> :
      <ImageRender
        city={this.props.params.city}
        temp={this.state.temp}
        image0={img0_url} />
    );
  }
}

module.exports = Forecast;
