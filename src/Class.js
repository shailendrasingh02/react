import React from 'react'

class Class extends React.Component{
    render()
    {
        return(
            <div style ={{backgroundColor:"skyblue",margin:10}}>
                <h1>Name {this.props.name} </h1>
                <h4>Email: {this.props.email}</h4>
           
            </div>
        )

    }
}
export default Class