const React = require('react');
const Detail = require('../components/Details');

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    // Updates state when doing a new search
    this.setState();
  }

  render() {
    return (
      <Detail
        city={this.props.location.state.test.city.name}
        data={this.props.location.state.test.list}
        num={parseInt(this.props.location.query.weather)}
        />
    );
  }
}

module.exports = Details;
