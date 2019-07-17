import React from 'react';
import style from '../Styles/reviews.css';
import StarRatingComponent from 'react-star-rating-component';
import { formatDate } from '../helpers.js';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostPopular: [],
      allReviews: [],
    };
  }

  render() {
    return (
      <div id="reviews">
        <div className="review">
          <h3>Most relevant reviews</h3>
          {this.props.reviews.map((review, index) =>
            <div id="each_review"key ={index}>
              <div className="users">
                <div id="users_rating">
                  <StarRatingComponent
                    name="rate2"
                    editing={false}
                    renderStarIcon={() => <span>★</span>}
                    starCount={5}
                    value={review.rating}
                    emptyStarColor={'#DDDDDD'}
                  />
                </div>
                <div id="users_author">by <a id="link" href="">{review.author}</a></div>
                <div id="users_date">{formatDate(review.date)}</div>
              </div>
              <div className="reviews">
                <div id="review_title">{review.review.title}</div>
                <div id="review">{review.review.review}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Reviews;
