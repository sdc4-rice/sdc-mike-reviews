import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { formatDate } from '../helpers.js';
import Vote from './Vote.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false
    }
  }

  componentDidMount () {
    this.setState({reviews: this.props.reviews})
  }

  render () {
    return (
    <div>
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
                <div id="users_author">by <a id="author_link" href="">{review.author}</a></div>
                <div id="users_date">{formatDate(review.date)}</div>
              </div>
              <div className="reviews">
                <div id="inner">
                  <div id="review_title">{review.review.title}</div>
                  <div id="review">{review.review.review}</div>
                  <Vote _id={review._id} vote={this.props.vote}/>
                </div>
              </div>
            </div>
          )}
          </div>
  )}
} 

export default Review
