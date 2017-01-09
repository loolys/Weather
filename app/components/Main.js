const React = require('react');
const styles = require('../styles/main');

class Main extends React.Component {
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
    event.preventDefault();
    this.context.router.push('/forecast/' + this.state.value);
  }

  render() {
    return (
      <div style={styles.container}>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Weather</a>
            <form className="navbar-form navbar-left" role="search" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search Location"
                value={this.state.value} onChange={this.handleChange} />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

Main.contextTypes = {
  router: React.PropTypes.object.isRequired
}

module.exports = Main;
