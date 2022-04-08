import './Menu.scss'

const Side = (props) => {
  return (
    <div className="side-menu">
      {props.children}
    </div>
  )
}

export default Side