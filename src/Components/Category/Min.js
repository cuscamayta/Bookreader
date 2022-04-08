import './Category.scss'
import { Link } from 'react-router-dom'

const CategoryMin = (props) => {
  return (
    <div className='min-category' title={props.category.clasificacion}>
      <Link to={`/app/library/view/${props.category.id}`} >
          <div
            style={{
              width: '200px', height: '200px',
              backgroundImage: `url(${props.category.image})`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#f2f2f2',
            }}
          >
            <h3 className='title-genero centerY'>{props.category.category}</h3>
          </div>
      </Link>
    </div>
  )
}

export default CategoryMin