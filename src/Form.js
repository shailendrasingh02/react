

import './App.css';
import React from 'react';

function Hideshow()
{
const [status,setStatus]=React.useState(false)

    return(
        <div className='App'>
            {
                status?
                <h1> Hello!</h1>
                :null
            }
            
          <button onClick={()=>setStatus(false)}>Hide</button>
            <button onClick={()=>setStatus(true)}>Show</button>
            {/*<button onClick={()=>setStatus(!status)}>Toggle</button>*/}

      

        </div>
    );






  
}
export default Hideshow