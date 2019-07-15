import React from 'react';

class Ratings extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };
  // }

  render() {
    return (
      <div id="ratings">
        <div id="number_rating">
          <h1 id="number">5.0</h1>
          <div id="stars">*****</div>
          <div id="count">X product ratings</div>
        </div>
        <div id="rating_bars">
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
        </div>
        <div id="rating_charts">
          <div id="chart1">
            ()<div id="category">Would recomend</div>
          </div>
          <div id="chart2">
            ()<div id="category">Good quality</div>
          </div>
          <div id="chart3">
            ()<div id="category">Great value</div>
          </div>
        </div>
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