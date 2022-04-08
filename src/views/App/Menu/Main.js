import { Fragment, Component } from "react"
import Books from "../../../Constants/DemoValues/Books"
import CardBook from "../../../Components/Book/Card"

class Main extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const match = this.props.match
    return (
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px'}}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Search</span>
          </div>
          <input type="text" className="form-control" placeholder="Buscar Titulo" aria-label="Buscar Titulo" aria-describedby="basic-addon1"/>
        </div>
        <div  className="row" style={{ overflowY: 'auto', height: '100%' }}>
          <div className="col-1"></div>
          <div className="col-10 row">
            {Books.map((book, key)=>{
              return <div className="col-3" key={key}>
                <CardBook book={book}/>
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Main