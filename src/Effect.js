import './App.css'
import React,{useEffect,useState} from'react'
function Effect() {
    const [data,setData]=useState(10);
    const [count,setCount]=useState(10)
    useEffect(()=>{
        console.warn("display useEffect")
    } )
return(
    <div className='App'>
        <h1> Data: {data}</h1>
        <h1> Count: {count}</h1>
        <button onClick={()=>setData(data+1)}>Update</button>
        <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
)
}
export default Effect 