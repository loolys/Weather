const React = require('react');
const styles = require('../styles/main');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
    this.context.router.push({
      pathname: '/result',
      query: {
        city: this.state.value,
      }
    });
  }

  render() {
    return (
      <div style={styles.alignCenter}>
      <h1>Enter a Location</h1>
      <form role="search" onSubmit={this.handleSubmit}>
        <div className="form-group" style={styles.homeForm}>
          <input type="text" className="form-control" placeholder="Search Location"
          value={this.state.value} onChange={this.handleChange} />
        </div>
        <button type="submit" value="Submit" className="btn btn-default" style={styles.space}>Submit</button>
      </form>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = Home;
