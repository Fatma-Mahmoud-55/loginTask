import React, { useState , useEffect} from 'react'
import { axiosInstance } from './../../network/axiosinstance';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin =async() =>{
       await axiosInstance.post('/user/login/',{
            "username":username,
            "password" : password
        }).then((res)=>{
            console.log(res.data)
             const token   =res.data.token
              console.log(token)
                localStorage.setItem('username' , username)
              localStorage.setItem('token', token);
            navigate("/home")
        })
        .catch((err)=>{
            console.log(err,"error")
        });
    }
//     async function check() {
//       axiosInstance.post(`/user/check/`,
//           {
//               token: token
//           }).then(res => {
//               console.log(res)
//           setIsBusy(true);
//           setAuthent({ "token": true });
//       }).catch(err => {
//           console.log(err);
//       })
//   }
//   useEffect(() => {
//     if (token) {
//         check();
//     } else {
//         navigate('/');
//     }

// });
async function check() {
  let token=localStorage.getItem("token");
  if (!token){
    navigate('/');
    }else{
      navigate('/home');
    }
  }
  useEffect(() => {
        check();
      }, []);


      
  return (
    <>
    <h1>Login Form</h1>
    <div className='container'>
        <form>
            <label htmlFor="uname">Username:</label><br />

            <input className='input' 
            type="text" 
            id="uname" 
            name="uname"
            value={username} 
            onChange={(e) => 
            setUsername(e.target.value)}
            required/>
            <br />

            <label  htmlFor="passwd">Password:</label><br />

            <input className='input' 
            type="password" 
            id="passwd" 
            name="passwd"
            value={password} 
            onChange={(e) => 
                setPassword(e.target.value)} 
            required/><br />

            <div className='submit'>
            <button className='submit-btn' type='button'
            onClick={()=>handleLogin()}>Submit</button>

                </div>
        </form>

    </div>
    </>
  )
}

export default Login