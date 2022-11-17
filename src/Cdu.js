import './App.css';
import React from 'react';


class Cdu extends React.Component{
    constructor(){
        super();
        console.log("constructor")
        this.state={
            name:"Shailendra"
        }

    }
    componentDidUpdate(){
        console.warn("componentDidUpdate")
    }
render(){
    console.log("render")
    return(
        <div className='App'>
            <h1> Hello World!</h1>
            <button onClick={()=>{this.setState({name:"Singh"})}}>Update</button>
        </div>
    )
}
}
export default Cdu