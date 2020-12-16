import React from 'react';
import Filter from './components/Filter'
import NavBar from './components/NavBar';
import ListingContainer from './containers/ListingContainer';

class App extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <main>
          <Filter />
          <ListingContainer />
        </main>
      </>
    );
  }
}

export default App;