import React from 'react';
import Header from './Header.jsx';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

function getCategoryId() {
  const idString = window.location.href.split('?')[1] || '';
  const idArray = idString.split('=');
  if (idArray[0] === 'id') {
    return idArray[1];
  }
  return 1; // default id if no id is provided
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlId: getCategoryId(),
      reviews: [],
      load: false
    };
  }

  componentDidMount() {
    this.setState({load: true }, () => {
      fetch(`/reviews/${this.state.urlId}`)
      .then((data) => data.json())
      .then((results) => {
        this.setState({reviews: results, load: false});
        return results;
      })
      .catch((err) => console.log('There was an error'));
      });
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Ratings reviews={this.state.reviews}/>
        <Reviews reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default App;
