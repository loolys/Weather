const React = require('react');
const styles = require('../styles/main');

const Home = React.createClass({
  render: function() {
    return (
      <div style={styles.alignCenter}>
      <h1>Enter a Location</h1>
      <form role="search">
        <div className="form-group" style={styles.homeForm}>
          <input type="text" className="form-control" placeholder="Search Location" />
        </div>
        <button type="submit" className="btn btn-default" style={styles.space}>Submit</button>
      </form>
      </div>
    );
  }
});

module.exports = Home;
