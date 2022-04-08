import { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import Books from '../../../Constants/DemoValues/Books'
import Categories from '../../../Constants/DemoValues/Categories'
import MinBook from '../../../Components/Book/Min'
import MinCategory from '../../../Components/Category/Min'

import Layout from '../../../Components/Layout'
import View from './View'

class BookList extends Component {
  render(){
    return (
      <Fragment>
        {Books.map((book, key)=>{
          return <div className={'minHover'}>
            <MinBook key={key} book={book} />
            <div id="minDescription" className="card" style={{ height: '500px', marginBottom: '30px' }}>
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <p className="card-text">{book.address+' '+book.publication}</p>
                <a href="#" className="btn btn-primary">{book.author}</a>
              </div>
            </div>
          </div>
        })}
      </Fragment>
    )
  }
}

class CategoryList extends Component {
  render(){
    return (
      <Fragment>
      </Fragment>
    )
  }
}

class Library extends Component {
  render(){
    const match = this.props.match
    return (
      <Switch>
        <Layout Side={<BookList/>}>
          <Route
            path={`${match.url}/view/:id`}
            render={props=><View {...props} />}
          />
        </Layout>
      </Switch>
    )
  }
}

export default Library