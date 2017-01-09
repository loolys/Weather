const React = require('react');
const PropTypes = React.PropTypes;
const styles = require('../styles/main');


function Detail(props) {
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
  displayDate = "";
  if (props.num === 0) {
    displayDate = "Today";
  } else if (props.num ===  1) {
    displayDate = "Tomorrow";
  } else{
    displayDate = days[props.num];
  }
  return (
    <div style={styles.jumbo} className="jumbotron text-center">
      <div>
        <h1>{props.city}</h1> <br />
        <h3>{displayDate}</h3> <br />
        <img src={"http://openweathermap.org/img/w/" + props.data[props.num].weather[0].icon + ".png"} /> <br />
        Morning Temperature: {Math.round(props.data[props.num].temp.morn)}&#8451; <br />
        Day Temperature: {Math.round(props.data[props.num].temp.day)}&#8451; <br />
        Evening Temperature: {Math.round(props.data[props.num].temp.eve)}&#8451; <br />
        Night Temperature: {Math.round(props.data[props.num].temp.night)}&#8451; <br />

      </div>
    </div>
  );
}

Detail.propTypes = {
  city: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  num: PropTypes.number.isRequired
}

module.exports = Detail;
