import React from 'react';

class Reviews extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };
  // }

  render() {
    return (
      <div id="reviews">
        <div className="review">
          <h3>Most relevant reviews</h3>
          {this.props.reviews.map(review =>
            <div>
              <div id="users">
                <div id="users_rating">{review.rating}</div>
                <div id="users_author">{review.author}</div>
                <div id="users_date">{review.date}</div>
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
