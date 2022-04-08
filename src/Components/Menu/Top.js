import { BreadcrumbSection, Container } from 'semantic-ui-carousel-react'
import './Menu.scss'

const Top = (props) => {
  return (
    <div className='top-menu'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/app">Hidden brand</a>
        </div>
      </nav>
    </div>
  )
}

export default Top