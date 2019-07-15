import React from 'react';
import Header from './header.jsx';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Ratings />
        <Reviews />
      </div>
    );
  }
}

export default App;
