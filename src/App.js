import logo from './logo.svg';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ViewMain from './views'
import ViewApp from './views/App'

import 'semantic-ui-carousel-react'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route>
            <Route 
              path={'/app'}
              render={props=>{
                return <ViewApp {...props} />
              }}
            />
            <Route 
              path={'/'}
              exact
              render={props=><ViewMain {...props} />}
            />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
