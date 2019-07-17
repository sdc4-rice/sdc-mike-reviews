import React from 'react';
import style from '../Styles/ratings.css';
import StarRatingComponent from 'react-star-rating-component';
import RatingsBar from './RatingsBar.jsx';

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
            <RatingsBar reviews={this.props.reviews} />
          </div>
        </div>
      </div>
    );
  }
}

export default Ratings;
