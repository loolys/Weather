const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const PropTypes = React.PropTypes;
const styles = require('../styles/main');

function ImageRender (props) {
  let today = new Date();
  const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday"
  }
  return (
    <div style={styles.jumbo} className="jumbotron text-center">
      <div style={styles.title}>
        <h1>{props.city}</h1> <br />
        Right now: {Math.round(props.temp)}&#8451; <br />
        <div style={styles.imageText} onClick={props.handleClick.bind(null, "0")} style={styles.hover}>
            <img src={props.images[0]} /> <br />
            <h4><p>Today</p></h4>
        </div> <br />
        <div style={styles.imageText} onClick={props.handleClick.bind(null, "1")}>
          <img src={props.images[1]} style={styles.hover} /> <br />
          <h4 style={styles.hover}><p>{days[today.getDay() + 1]}</p></h4>
        </div>
        <div style={styles.imageText} onClick={props.handleClick.bind(null, "2")}>
          <img src={props.images[2]} style={styles.hover} /> <br />
          <h4 style={styles.hover}><p>{days[today.getDay() + 2]}</p></h4>
        </div>
        <div style={styles.imageText} onClick={props.handleClick.bind(null, "3")}>
          <img src={props.images[3]} style={styles.hover} /> <br />
          <h4 style={styles.hover}><p>{days[today.getDay() + 3]}</p></h4>
        </div>
        <div style={styles.imageText} onClick={props.handleClick.bind(null, "4")}>
          <img src={props.images[4]} style={styles.hover} /> <br />
          <h4 style={styles.hover}><p>{days[today.getDay() + 4]}</p></h4>
        </div>
      </div>
    </div>
  );
}

ImageRender.propTypes = {
  city: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
}

module.exports = ImageRender;
