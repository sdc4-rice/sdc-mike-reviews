import React from 'react';
import style from '../Styles/ratings.css';
import StarRatingComponent from 'react-star-rating-component';

class Ratings extends React.Component {

  calculateRating() {
    let total = 0;
    for (let i = 0; i < this.props.reviews.length; i++) {
      let rating = this.props.reviews[i].rating;
      total += rating;
    }
    total = total / (this.props.reviews.length + 1);
    return total.toFixed(1);
  }

  render() {
    return (
      <div id="ratings">
        <div id="ratings_box">
          <div id="number_rating">
            <h1 id="number">{this.calculateRating()}</h1>
            <div id="stars">
              <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={5}
                value={Math.floor(this.calculateRating())}
                emptyStarColor={'#DDDDDD'}
              />
            </div>
            <div id="count">{this.props.reviews.length} product ratings</div>
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
              ()<div id="category">Would recommend</div>
            </div>
            <div id="chart2">
              ()<div id="category">Good quality</div>
            </div>
            <div id="chart3">
              ()<div id="category">Great value</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ratings;
