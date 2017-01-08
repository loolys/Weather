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
  return (
    <div style={styles.jumbo} className="jumbotron text-center">
      <div style={styles.title}>
        <h1>{props.city}</h1> <br />
        Temp: {props.temp} <br />
        <div style={styles.imageText}>
          <img src={props.image0} /> <br />
          <h4><p>Today</p></h4>
        </div> <br />
        <div style={styles.imageText}>
          <img src={props.image0} /> <br />
          <h4><p>{days[today.getDay() + 1]}</p></h4>
        </div>
        <div style={styles.imageText}>
          <img src={props.image0} /> <br />
          <h4><p>{days[today.getDay() + 2]}</p></h4>
        </div>
        <div style={styles.imageText}>
          <img src={props.image0} /> <br />
          <h4><p>{days[today.getDay() + 3]}</p></h4>
        </div>
        <div style={styles.imageText}>
          <img src={props.image0} /> <br />
          <h4><p>{days[today.getDay() + 4]}</p></h4>
        </div>
      </div>
    </div>
  );
}

ImageRender.propTypes = {
  city: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  image0: PropTypes.string.isRequired,
}

module.exports = ImageRender;
