import React from 'react';
import Header from './header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="app">
        <div id="header">
          <Header />
        </div>
        <div id="ratings">

        </div>
        <div id="reviews">

        </div>
      </div>
    );
  }
}

export default App;
