import React from 'react';
import style from '../Styles/ratingsBar.css';
import { starPercents } from '../helpers.js';

class RatingsBar extends React.Component {

  render() {
    return (
      <div id="rating_bars">
        <div className="bars">
          <div className="num_stars">★  5</div>
          <div id="bar_five" className="ratings_bar">
            <FillerFive starAmounts={starPercents(this.props.reviews)}/>
          </div>
        </div>
        <div className="bars">
          <div className="num_stars">★  4</div>
          <div id="bar_four" className="ratings_bar">
            <FillerFour starAmounts={starPercents(this.props.reviews)}/>
          </div>
        </div>
        <div className="bars">
          <div className="num_stars">★  3</div>
          <div id="bar_three" className="ratings_bar">
            <FillerThree starAmounts={starPercents(this.props.reviews)}/>
          </div>
        </div>
        <div className="bars">
          <div className="num_stars">★  2</div>
          <div id="bar_two" className="ratings_bar">
            <FillerTwo starAmounts={starPercents(this.props.reviews)}/>
          </div>
        </div>
        <div className="bars">
          <div className="num_stars">★  1</div>
          <div id="bar_one" className="ratings_bar">
            <FillerOne starAmounts={starPercents(this.props.reviews)}/>
          </div>
        </div>
      </div>
    );
  }
}

const FillerOne = (props) => {
  return (
    <div className="filler" style={{width: `${props.starAmounts[1] / props.starAmounts['total'] * 100}%`}}/>
  );
};

const FillerTwo = (props) => {
  return (
    <div className="filler" style={{width: `${props.starAmounts[2] / props.starAmounts['total'] * 100}%`}}/>
  );
};

const FillerThree = (props) => {
  return (
    <div className="filler" style={{width: `${props.starAmounts[3] / props.starAmounts['total'] * 100}%`}}/>
  );
};

const FillerFour = (props) => {
  return (
    <div className="filler" style={{width: `${props.starAmounts[4] / props.starAmounts['total'] * 100}%`}}/>
  );
};

const FillerFive = (props) => {
  return (
    <div className="filler" style={{width: `${props.starAmounts[5] / props.starAmounts['total'] * 100}%`}}/>
  );
};

export default RatingsBar;
