const React = require('react');
const styles = require('../styles/main');

const Main = React.createClass({
  render: function() {
    return (
      <div style={styles.container}>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Weather</a>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search Location" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
