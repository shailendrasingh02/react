import './App.css'
function App(){
    const student=["Anil","Prakash","akash","Jyoti"];
    return(
        <div className='App'>
            <h1> using map looping</h1>
        
        {
        student.map((data)=><h1>{data}</h1>)
        }
        </div>
        );

}
export default App