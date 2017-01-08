const React = require('react');
const WeatherApi = require('../api/weatherApi');

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: ""
    }
  }
  componentDidMount() {
    console.log(this.props.location.query.city);
    WeatherApi.getCurrent([this.props.location.query.city])
      .then(function (info){
        console.log(info[0].data.main.temp);
        let temp = info[0].data.main.temp
        this.setState({ temp: temp });
      }.bind(this));

  }

  render () {
    let temperature = this.state.temp;
    return (
      <div>
        {this.props.location.query.city}
        <br />
        Temperature: {temperature}
      </div>
    );
  }
}

module.exports = Result;
