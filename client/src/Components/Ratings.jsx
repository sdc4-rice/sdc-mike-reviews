import React from 'react';
import style from '../Styles/ratings.css';
import StarRatingComponent from 'react-star-rating-component';
import RatingsBar from './RatingsBar.jsx';
import { calculateRating } from '../helpers.js';

class Ratings extends React.Component {

  render() {
    return (
      <div id="ratings">
        <div id="ratings_box">
          <div id="number_rating">
            <h1 id="number">{calculateRating(this.props.reviews)}</h1>
            <div id="stars">
              <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={5}
                value={Math.floor(calculateRating(this.props.reviews))}
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
