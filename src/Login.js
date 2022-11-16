import React,{useState} from 'react'

function Login(){
    const[user,setUser]=useState("");
    const[password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);

    function loginHandle(e){
            if(user.length<3 || password.length<3)
            {
                alert("Type Correct Value")
            }
            else{
                alert("Login SuccessFully")
            }

        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3)
        {
            setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
        function passHandler(e){
            let item=e.target.value;
            if(item.length<3)
            {
                setPassErr(true)
            }
            else
            {
                setPassErr(false)
            }
            setPassword(item)
        }

    

 
    return(
      
          <div>
            <h1>login</h1>
           <form onSubmit={loginHandle}>
           
            <input type="text" placeholder='Enter User ID' onChange={userHandler}/>{userErr?<span> please enter valid Id</span>:""}<br /><br />

            <input type="password" placeholder='Enter Password' onChange={passHandler}/>{passErr?<span> please enter valid Id</span>:""} <br /><br />

            <button type="submit"> Login </button>
           </form>
        </div>
      
    )

}
export default Login