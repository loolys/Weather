const React = require('react');
const WeatherApi = require('../api/weatherApi');
const Loading = require('react-loading');
const styles = require('../styles/main')
const ImageRender = require('./ImageRender');


class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      temp: "",
      loading: true,
      icons: [],
      data: ""
    }
  }

  componentDidMount() {
    // current weather Api call
    WeatherApi.getCurrent([this.props.params.city])
      .then(function (info){
        let temp = info[0].data.main.temp
        this.setState({
           temp: temp,
           loading: false
          });
      }.bind(this));

    // 5 day forecast
    WeatherApi.getDays([this.props.params.city])
      .then(function (info) {
        this.setState({
          icons: [info[0].data.list[0].weather[0].icon,
            info[0].data.list[1].weather[0].icon,
            info[0].data.list[2].weather[0].icon,
            info[0].data.list[3].weather[0].icon,
            info[0].data.list[4].weather[0].icon],
          data: info[0].data
        })
      }.bind(this));
  }

  handleClick(num) {
    this.context.router.push({
      pathname: '/details/' + this.props.params.city,
      query: {
        weather: num
      },
      state: {
        test: this.state.data
      }
    });
  }

  componentWillReceiveProps() {
    // current weather Api call
    WeatherApi.getCurrent([this.props.params.city])
      .then(function (info){
        let temp = info[0].data.main.temp
        this.setState({
           temp: temp,
           loading: false
          });
      }.bind(this));

    // 5 day forecast
    WeatherApi.getDays([this.props.params.city])
      .then(function (info) {
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
        images={arr}
        handleClick={this.handleClick} />
    );
  }
}

Forecast.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = Forecast;
