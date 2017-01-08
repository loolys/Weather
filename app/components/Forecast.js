const React = require('react');
const WeatherApi = require('../api/weatherApi');

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      loading: true
    }
  }

  componentDidMount() {
    WeatherApi.getData([this.props.params.city])
      .then(function (info){
        console.log(info[0].data.main.temp);
        let temp = info[0].data.main.temp
        this.setState({
           temp: temp,
           loading: false
          });
      }.bind(this));
  }

  render() {
    return (
      this.state.loading === true ? <div>Loading</div> :
      <div>
      {this.props.params.city} <br />
      Temp: {this.state.temp}
      </div>
    );
  }
}

module.exports = Forecast;
