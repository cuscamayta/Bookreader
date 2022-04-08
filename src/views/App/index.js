import { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Layout from "../../Components/Layout";

import Library from './Library'
import Menu from './Menu'
class App extends Component {
  render(){
    const match = this.props.match
    return (
      <Switch>
        <Layout Top={<h1>asdas</h1>}>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/menu`} />
          <Route 
            path={`${match.url}/library`}
            render={props=><Library {...props} />}
          />
          <Route 
            path={`${match.url}/menu`}
            render={props=><Menu {...props} />}
          />
        </Layout>
      </Switch>
    )
  }
}

export default App