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
      icons: []
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
          icons: [info[0].data.list[0].weather[0].icon,
            info[0].data.list[1].weather[0].icon,
            info[0].data.list[2].weather[0].icon,
            info[0].data.list[3].weather[0].icon,
            info[0].data.list[4].weather[0].icon]
        })
      }.bind(this));
  }

  render() {
    let today = new Date();
    let arr = [];
    for(let i = 0;i < 5; i++){
      let img = this.state.icons[i];
      arr.push("http://openweathermap.org/img/w/" + img + ".png");
    }
    return (
      this.state.loading === true ? <Loading type="spin" color="#000000" /> :
      <ImageRender
        city={this.props.params.city}
        temp={this.state.temp}
        images={arr} />
    );
  }
}

module.exports = Forecast;
