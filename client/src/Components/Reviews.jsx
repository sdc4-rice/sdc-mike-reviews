import React from 'react';
import style from '../Styles/reviews.css';
import Review from './Review.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      mostPopular: [],
      allReviews: [],
      voted: [],
      more: false
    }
    this.vote = this.vote.bind(this);
    this.reviewLoadCount = this.reviewLoadCount.bind(this)
  }

  vote(e) {
    e.persist();
    this.setState({load: true}, () => {
      const data = {
        vote: e.target.name,
        _id: e.target.className,
      };
      fetch('/reviews', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then((review) => review.json())
        .then((review) => {
          this.setState({load: false, voted: review});
          return review;
        })
        .catch((err) => console.log('There was an error'));
    });
  }

  reviewLoadCount(e) {
    e.preventDefault();
    this.setState({more: !this.state.more})
  }

  render() {

    if (this.state.more) {

      return (
        <div id="reviews">
          <div className="review">
            <div id="review_header">
              <div>
                <h3 id="h3Title">Most relevant reviews</h3>
              </div>
              <div>
                <h4 id="more_reviews" onClick={this.reviewLoadCount}><a id="more_reviews_link" href="">See less reviews</a></h4>
              </div>
            </div>
            <Review vote={this.vote} reviews={this.props.reviews} />
          </div>
        </div>
      );
    } else if (!this.state.more) {
      return (
        <div id="reviews">
          <div className="review">
            <div id="review_header">
              <div>
                <h3 id="h3Title">Most relevant reviews</h3>
              </div>
              <div>
                <h4 id="more_reviews" onClick={this.reviewLoadCount}><a id="more_reviews_link" href="">Show all  {this.props.reviews.length} reviews</a></h4>
              </div>
            </div>
            <Review vote={this.vote} reviews={this.props.reviews.slice(0, 5)}/>
          </div>
        </div>
      );
    }
  }
}

export default Reviews;
