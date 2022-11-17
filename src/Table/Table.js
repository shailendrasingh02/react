import './App.css'
import Table from 'react-bootstrap/Table';
function App(){
    const student=[
        {name:'anil',email:'anil@test.com',contact:343, address : [ { Hn:"02",city:"delhi",country:"india"},{ Hn:"04",city:"agra",country:"india"}]},
        {name:'sam',email:'sam@test.com',contact:666, address : [ { Hn:"02",city:"delhi",country:"india"},{ Hn:"04",city:"agra",country:"india"}]},
        {name:'peter',email:'peter@test.com',contact:555, address : [ { Hn:"02",city:"delhi",country:"india"},{ Hn:"04",city:"agra",country:"india"}]},
        {name:'shailendra',email:'shailendra@test.com',contact:343, address : [ { Hn:"02",city:"delhi",country:"india"},{ Hn:"04",city:"agra",country:"india"}]},
        
    ]
    return(
        <div className='App'>
            <h1> using map looping</h1>
        <Table striped  variant='dark'>
            <tbody>
                 <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>contact</th>
                    <th>address</th>
             </tr>
                
             {
            student.map((data,i)=>
               
            <tr key={i+1}>
                <td>{i}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.contact}</td>
                <td>{data.address.map((item,i)=>
                <Table striped  variant='dark'>
                    <tbody>
                        <tr key={i}>
                            <td>{item.Hn}</td>
                            <td>{item.city}</td>
                            <td>{item.country}</td>
                        </tr>
                    </tbody>
                </Table>
            )}</td>
            </tr>
            )
            }  
            </tbody>
        </Table>
        </div>
        );

}
export default App