import './Book.scss'
import { Link } from 'react-router-dom'

const MinBook = (props) => {
  return (
    <Link to={`/app/library/view/${props.book.id}`} >
      <div className='min-book' title={props.book.description}>
        <div 
          className="card-img-top" 
          style={{ 
            height: '200px',
            backgroundImage: `url(${props.book.image})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#f2f2f2',
          }} 
          alt="Card image cap" 
        />
      </div>
    </Link>
  )
}

export default MinBook