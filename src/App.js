import './App.css'
import React,{useEffect,useState} from'react'
import { Button } from 'react-bootstrap';
function Effect() {
    const [data,setData]=useState(10);
    const [count,setCount]=useState(10)
    useEffect(()=>{
        console.warn("display data")
    }, [data])
return(
    <div className='App'>
        <h1> Data: {data}</h1>
        <h1> Count: {count}</h1>
        <Button onClick={()=>setData(data+1)}>Update</Button>
        <button onClick={()=>setCount(count+1)}>Update</button>
        <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
    </div>
)
}
export default Effect 