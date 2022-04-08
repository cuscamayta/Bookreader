import { Component } from 'react'
import Top from './Menu/Top'
import Side from './Menu/Side'
import Footer from './Menu/Footer'
import { Fragment } from 'react'
class Layout extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className='layout'>
        {this.props.Top?<Top>
          {this.props.Top}
        </Top>:null}
        <div className='middle'>
        {this.props.Side?<Side>
          {this.props.Side}
        </Side>:null}
        <main >
          {this.props.children}
        </main>
        </div>
        {this.props.Footer?<Footer>
          {this.props.Footer}
        </Footer>:null}
      </div>
    )
  }
}
export default Layout