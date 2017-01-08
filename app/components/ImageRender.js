const React = require('react');
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
  console.log(props);
  return (
    <div style={styles.jumbo} className="jumbotron text-center">
      <div style={styles.title}>
        <h1>{props.city}</h1> <br />
        Right now: {Math.round(props.temp)}&#8451; <br />
        <div style={styles.imageText}>
          <img src={props.images[0]} /> <br />
          <h4><p>Today</p></h4>
        </div> <br />
        <div style={styles.imageText}>
          <img src={props.images[1]} /> <br />
          <h4><p>{days[today.getDay() + 1]}</p></h4>
        </div>
        <div style={styles.imageText}>
          <img src={props.images[2]} /> <br />
          <h4><p>{days[today.getDay() + 2]}</p></h4>
        </div>
        <div style={styles.imageText}>
          <img src={props.images[3]} /> <br />
          <h4><p>{days[today.getDay() + 3]}</p></h4>
        </div>
        <div style={styles.imageText}>
          <img src={props.images[4]} /> <br />
          <h4><p>{days[today.getDay() + 4]}</p></h4>
        </div>
      </div>
    </div>
  );
}

ImageRender.propTypes = {
  city: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired
}

module.exports = ImageRender;
