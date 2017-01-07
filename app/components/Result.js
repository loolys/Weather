const React = require('react');

class Result extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render () {
    return (
      <div>{this.props.location.query.city}</div>
    );
  }
}

module.exports = Result;
