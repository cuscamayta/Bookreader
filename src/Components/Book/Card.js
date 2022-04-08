import { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class CardBook extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const book = this.props.book
    return (
      <Link to={`/app/library/view/${book.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="card" style={{ height: '400px', marginBottom: '30px' }}>
          <div 
            className="card-img-top" 
            style={{ 
              height: '200px',
              backgroundImage: `url(${book.image})`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#f2f2f2',
            }} 
            alt="Card image cap" 
          />
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">{book.description}</p>
            <p className="card-text">{book.address+' '+book.publication}</p>
            <a href="#" className="btn btn-primary">{book.author}</a>
          </div>
        </div>
      </Link>
    )
  }
}

export default CardBook;