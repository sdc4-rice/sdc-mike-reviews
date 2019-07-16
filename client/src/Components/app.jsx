import React from 'react';
import Header from './header.jsx';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3002/reviews')
      .then((data) => data.json())
      .then((results) => this.setState({reviews: results}))
      .catch((err) => console.log('There was an error'));
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Ratings reviews={this.state.reviews}/>
        <Reviews />
      </div>
    );
  }
}

export default App;
