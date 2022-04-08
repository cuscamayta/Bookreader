import { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import Books from '../../../Constants/DemoValues/Books'
import Categories from '../../../Constants/DemoValues/Categories'
import MinBook from '../../../Components/Book/Min'
import MinCategory from '../../../Components/Category/Min'

import Layout from '../../../Components/Layout'
import Main from './Main'

class BookList extends Component {
  render(){
    return (
      <Fragment>
        {Books.map((book, key)=>{
          return <MinBook key={key} book={book} />
        })}
      </Fragment>
    )
  }
}

class CategoryList extends Component {
  render(){
    return (
      <Fragment>
        {Categories.map((category, key)=>{
          return <MinCategory key={key} category={category} />
        })}
      </Fragment>
    )
  }
}

class Library extends Component {
  render(){
    const match = this.props.match
    return (
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/main`} />
        <Route
          path={`${match.url}/main`}
          render={props=><Main {...props} />}
        />
      </Switch>
    )
  }
}

export default Library