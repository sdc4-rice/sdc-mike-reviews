import React from 'react';
import style from '../Styles/reviews.css';
import StarRatingComponent from 'react-star-rating-component';
import { formatDate } from '../helpers.js';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      mostPopular: [],
      allReviews: [],
    };
    this.vote = this.vote.bind(this);
  }

  vote(e) {
    e.persist();
    this.setState({load: true}, () => {
      const data = {
        vote: e.target.name,
        _id: e.target.className,
      };
      fetch('http://localhost:3002/reviews', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then((review) => review.json())
        // .then((review) => {
        //   this.setState({reviews: results});
        //   return results;
        // })
        .then((review) => {
          this.setState({load: false});
          return review;
        })
        .then((review) => console.log(review))
        .catch((err) => console.log('There was an error'));
    });
  }

  render() {
    return (
      <div id="reviews">
        <div className="review">
          <div id="review_header">
            <div>
              <h3 id="h3Title">Most relevant reviews</h3>
            </div>
            <div>
              <h4 id="more_reviews"><a id="more_reviews_link" href="">See all reviews</a></h4>
            </div>
          </div>
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
                  <div id="vote_buttons">
                    <button id="upvote" onClick={this.vote} className={review._id} name="upvote">👍</button>
                    <button id="downvote" onClick={this.vote} className={review._id} name="downvote">👎</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Reviews;