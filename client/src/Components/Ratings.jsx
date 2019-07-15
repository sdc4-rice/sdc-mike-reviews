import React from 'react';
import style from '../Styles/ratings.css';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="ratings">
        <span id="number_rating">
          <h1 id="number">5.0</h1>
          <div id="stars">*****</div>
          <div id="count">X product ratings</div>
        </span>
        <span id="rating_bars">
          <div id="bar_one">
            * 5 ----------- 0
          </div>
          <div id="bar_one">
            * 4 ----------- 0
          </div>
          <div id="bar_one">
            * 3 ----------- 0
          </div>
          <div id="bar_one">
            * 2 ----------- 0
          </div>
          <div id="bar_one">
            * 1 ----------- 0
          </div>
        </span>
        <span id="rating_charts">
          <div id="chart1">
            ()<div id="category">Would recommend</div>
          </div>
          <div id="chart2">
            ()<div id="category">Good quality</div>
          </div>
          <div id="chart3">
            ()<div id="category">Great value</div>
          </div>
        </span>
      </div>
    );
  }
}

export default Ratings;

// Number rating
//number
//stars
//ratings count

//Rating bars
//Rating bar 5
//Rating bar 4
//Rating bar 3
//Rating bar 2
//Rating bar 1

//Ratings charts
//percentage chart
//percentage chart
//percentage chart
