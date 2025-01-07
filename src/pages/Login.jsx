import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailimage from '../assets/emailimage.png'
import padlock from '../assets/padlock.png'
import user from '../assets/user.png'
import { AppContext } from "../context/AppContext";
import axios from 'axios'
import { toast } from "react-toastify";


const Login = () => {
  const navigate = useNavigate()
  const {backendUrl,setIsLoggedin,getUserData} = useContext(AppContext)
  const [state,setState] = useState('Sign Up');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const onsubmithandler = async(e)=>{
    try {
      e.preventDefault();
      axios.defaults.withCredentials = true;
      if(state === 'Sign Up'){
       const {data} = await axios.post(backendUrl + '/api/auth/register',{name,email,password})
       if(data.success){
        setIsLoggedin(true)
        getUserData()
        navigate('/')
       }else{
        toast.error(data.message)
       }
      }else{  const {data} = await axios.post(backendUrl + '/api/auth/login',{email,password})
      if(data.success){
       setIsLoggedin(true)
       getUserData()
       navigate('/')
      }else{
       toast.error("something error ")
      }
      }
    } catch (error) {
      toast.error("something error in this part")
      
    }
  }

  return (
    <div className="flex justify-center h-screen items-center">
      <div
        style={{
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
      >
        <div className="p-8">
         {state === 'Sign Up' ?  <h2 className="text-center text-3xl font-extrabold text-white">
            Welcome 
          </h2>:<h2 className="text-center text-3xl font-extrabold text-white">
            Welcome Back
          </h2>}
          {state === 'Sign Up' ? 
          <p className="mt-4 text-center text-gray-400">Register yourself</p>:
          <p className="mt-4 text-center text-gray-400">Sign in to continue</p>
        }
          <form onSubmit={onsubmithandler} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm relative w-full max-w-sm">
              {state == 'Sign Up' && ( <div className="relative w-full max-w-sm">
      <img
        src={user}
        alt="User Icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
      />
      <input onChange={(e)=>{
        setName(e.target.value)
      }} value={name}
        type="text"
        placeholder="Name"
        className="w-full pl-12 px-4 py-3 mb-4 border rounded-md border-none  bg-slate-700"
        name="username"
      />
    </div>
              )}
              <div className="relative w-full max-w-sm">
      <img
        src={emailimage}
        alt="User Icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
      />
      <input onChange={(e)=>{
        setEmail(e.target.value)
      }} value={email}
        type="email"
        placeholder="Email"
        className="w-full pl-12 px-4 py-3 mb-4 border rounded-md border-none  bg-slate-700"
        name="username"
      />
              </div>
              <div className="relative w-full max-w-sm">
      <img
        src={padlock}
        alt="User Icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
      />
      <input
      onChange={(e)=>{
        setPassword(e.target.value)
      }} value={password}
        type="password"
        placeholder="Password"
        className="w-full pl-12 px-4 py-3 mb-4 border rounded-md  border-none  bg-slate-700"
        name="username"
      /></div></div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input
                  className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                />
                <label className="ml-2 block text-sm text-gray-400" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
              {state !== 'Sign Up' && ( <div className="text-sm">
                <Link to={'/resetpassword'}
                  className="font-medium text-indigo-500 hover:text-indigo-400"
                >
                  Forgot your password?
                </Link>
              </div>)}
            </div>

            <div>
              <button
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
              >
                {state}
              </button>
            </div>
          </form>
        </div>
      {state === 'Sign Up' ?   <div className="px-8 py-4 bg-gray-700 text-center">
          <span className="text-gray-400">Don't have an account?</span>
          <button onClick={()=>setState('Login')} onDoubleClick={()=>setState('Sign Up')}
            className="font-medium text-indigo-500 hover:text-indigo-400"
          >Login
          </button>
        </div>:  <div className="px-8 py-4 bg-gray-700 text-center">
          <span className="text-gray-400">Don't have an account?</span>
          <button onClick={()=>setState('Login')} onDoubleClick={()=>setState('Sign Up')}
            className="font-medium text-indigo-500 hover:text-indigo-400"
          >Sign Up
          </button>
        </div>}
      </div>
    </div>
  );
};

export default Login;
