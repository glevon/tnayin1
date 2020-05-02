import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      card:[
        {
          id:100,
          name:"Karen",
          image:"./img/img100.png", 
          like:0,
          dislike:0,
        },
        {
          id:101,
          name:"Ashot",
          image:"./img/img101.png", 
          like:0,
          dislike:0,
        },
        {
          id:102,
          name:"Erik",
          image:"./img/img102.png", 
          like:0,
          dislike:0,
        },
      ],

    }
  }
  like(x){
    x.like++
    this.setState({})
  }
  dislike(x){
    x.dislike++
    if(x.dislike>10){
      this.state.card.splice(this.state.card.indexOf(x),1)
    }
    this.setState({})
  }
  render(){
    return (
      <div className="wrapper" >
      {
        this.state.card.map((a)=>(
          <div key={a.id} class="card" style={{ width:"200px"}}>
            <img class="card-img-top" src={a.image} alt="Smiley face" ></img>
            <h4 class="card-name">{a.name}</h4>
            <button className="like" onClick ={this.like.bind(this,a)}>
              <i class="fa fa-thumbs-o-up" aria-hidden="true">{a.like}</i>
            </button>
                    
            <button className="dislike" onClick ={this.dislike.bind(this,a)}>
            <i class="fa fa-thumbs-o-down" aria-hidden="true">{a.dislike}</i>
              
            </button>
          </div>
        ))
      }
      </div>
    )
  }

}

export default App;
