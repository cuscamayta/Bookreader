import { Component } from "react";
import Books from "../../Constants/DemoValues/Books";
import './Book.scss'

class BookReader extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const currentBook = Books.find(book=>book.id===this.props.id)
    return (
      <div className="cover">
        <div className="book">
          <label for="page-1"  className="book__page book__page--1">
            <img src={currentBook.image} alt="" />
          </label>
          <label for="page-2" className="book__page book__page--4">
            <div className="page__content">
              
            </div>
          </label>
    
          <input type="radio" name="page" id="page-1"/>
          <input type="radio" name="page" id="page-2"/>
          <label className="book__page book__page--2">
            <div className="book__page-front">
              <div className="page__content">
              </div>
            </div>
            <div className="book__page-back">
              <div className="page__content">
              </div>
            </div>
          </label>
        </div>
      </div>
    )
  }
}

export default BookReader