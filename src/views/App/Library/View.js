import React, { Component, createRef } from "react"
import './View.scss'
import HTMLFlipBook from 'react-pageflip';

import Carousel from "../../../Components/Book/Carousel";

import Books from '../../../Constants/DemoValues/Books'

const Page = React.forwardRef((props, ref) => {
  return (
    <div className={props.className} ref={ref}>
      {props.title?<p className="title">{props.title}</p>:null}
      <p className="content">{props.children}</p>
      <p className="numeration">{props.number}</p>
    </div>
  );
});

class View extends Component {
  constructor(props){
    super(props)
    this.DOMcontent = createRef()
    this.sizeLine=46;
    this.state = {
      book: Books.find(book=>book.id===this.props.match.params.id),
      pages: []
    }
    this.pageRepartition = this.pageRepartition.bind(this)
    this.comparePage = this.comparePage.bind(this)
  }
  componentDidMount(){
    this.pageRepartition(this.state.book.content)
  }

  forString(content){
    if(content.length<(26*46)){
      this.setState({
        pages: [ content, ''],
      })
      return
    }
    let result = []
    let letters = 0
    let paragraph = 26
    let line = this.sizeLine

    while(letters<content.length){
      switch( this.comparePage(content.slice(0, line*paragraph)) ){
        case -1:
          paragraph++
          break;
        case 0:
          result.push(content.slice(letters, letters+line*paragraph))
          letters+=line*paragraph
          break;
        case 1:
          paragraph--
          break;
      }
    }
    if(result.length===1)result.push('')
    this.setState({
      pages: result,
    })
  }

  forHTML(title, content){
    let result = []
    let pull = content.split('/div>')
    let height;
    this.DOMcontent.current.hidden = false
    let page = ''
    while(pull.length>0){
      height = this.DOMcontent.current.clientHeight
      while(height<500&&pull.length>0){
        page=page+pull.shift()+'/div>'
        this.DOMcontent.current.innerHTML = page+pull[0]
        height = this.DOMcontent.current.clientHeight
      }
      result.push(page)
      page=''
      this.DOMcontent.current.innerHTML = ''
    }
    this.DOMcontent.current.hidden = true
    
    return result
  }

  pageRepartition(content){
    if(typeof content !== 'string'){
      let text = ''
      let result = content.content.pages.map(page=>{
        text = this.forHTML(page.title, page.content)
        return {
          title: page.title,
          content: text
        }
      })
    }else{
      this.forString(content)
    }
    
  }

  comparePage(text){
    this.DOMcontent.current.hidden = false
    this.DOMcontent.current.innerHTML = text
    const height = this.DOMcontent.current.clientHeight
    this.DOMcontent.current.hidden = true
    let result = 0;
    if(height<437)result=-1
    if(height>450)result=1
    return result
  }

  async componentDidUpdate(prevProps){
    const id = this.props.match.params.id
    if(id!==prevProps.match.params.id){
      await this.setState({
        book: Books.find(book=>book.id===id)
      })
      this.pageRepartition(this.state.book.content)
    }
  }
  render(){
    
    return (
      <div className="card card-view">
        <div className="card-body">
          <div className="view-content">
            <HTMLFlipBook width={360} height={500} className='book' >
              <Page className={'demoPortada'}>
              </Page>
              <Page className={'demoPortada'}>
                <div 
                  className="card-img-top" 
                  style={{ 
                    height: '500px',
                    backgroundImage: `url(${this.state.book.image})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#f2f2f2',
                  }} 
                  alt="Card image cap" 
                />
              </Page>
              {this.state.pages.map((page, number)=>{
                return <Page key={number} number={number} className={'demoPage'} title={page.title}>
                  {page}
                </Page>
              })}
            </HTMLFlipBook>
          </div>
          <div hidden={true} ref={this.DOMcontent} style={{ width: 360, padding: '15px', fontSize: 12, textAlign: 'justify' }}></div>
          <div className="view-content">
            <Carousel />
          </div>
        </div>
      </div>
    )
  }
}

export default View