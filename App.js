
import './App.css';

import React from 'react';
//import Comppoke from './Comppoke.js'


class App extends React.Component {
  constructor(props){
  super(props)
  this.state={
   id:[],
   name:[],
   img:[],
   
  }
   
  }

 
   

  componentDidMount(){

    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
    .then(res=>res.json())
    
    .then(data=>data.results.forEach((pokedata,index)=>{
                  fetch(pokedata.url)
                  .then(res=>(res.json()))
    
                  .then(data=>{
                    console.log(data)
                   this.state. id.push(index);
                   this.state. img.push(data.sprites.front_default);
                   this.state. name.push(data.species.name);
                   this.setState(
                    this.state
                  )   
                 
                 
                  })
                  
    }))
    

  }

  

  render(){
    console.log(this.state.name);
   
  return (
    <div className="h5">
    {
      
      
        this.state.img.map((data1,ind)=>{
          return(
              <div className=" fleft" >
                <img src={data1} alt='pic' width='160px'/>
                <h2>#{this.state.id[ind]}</h2>
                
                <h2 className='h2 text-info'>{this.state.name[ind]}</h2>
              </div>

          )
        })
     
    }


    </div>
   
  );
}
}


export default App;
