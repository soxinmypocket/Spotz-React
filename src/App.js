import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Filter from './components/Filter'
import NavBar from './components/NavBar';
import ListingContainer from './containers/ListingContainer';

class App extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <main>
          <Switch>
            <Route path="listings" exact>
              <ListingContainer />
            </Route>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;