import React from 'react';
import './App.css';



import Class from './Class'

class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      name:"Anil",
      email:"anil@test.com"
    
    }
    
    
  }
  render(){
  
  return(
   <div className='App'>
    <h1> Props in Class !</h1>
      <Class name={this.state.name} email={this.state.email}>
        
      </Class>
    <button onClick={()=>this.setState({name:"sidhu", email:"sidhu@test.com"})} >Update Name</button>
    
   </div>
  )
  } 
}
  export default App