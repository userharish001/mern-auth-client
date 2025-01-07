import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext()

export const AppContextProvider = (props)=>{
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [isLoggedin,setIsLoggedin] = useState(false)
  const [userData, setUserData] = useState(false)

  const getAuthState = async () =>{
    try {
      const {data} = await axios.get(backendUrl + '/api/auth/authenticated')
      if(data.success){
        setIsLoggedin(true)
        getUserData()
      }
    } catch (error) {
      toast.error('user is not authrized')
      
    }
  }
  const getUserData = async()=>{
    try {
      const {data} = await axios.get(backendUrl + '/api/auth/getuser')
      data.success? setUserData(data.userData):toast.error('something wrong')
    } catch (error) {
      toast.error('error in logged in ')
      
    }
  }
   useEffect(()=>{
    getAuthState();
   },[])

  const value = {
    backendUrl,
    isLoggedin,setIsLoggedin,
    userData,setUserData,getUserData

  }
  return (
    <AppContext.Provider value={value}> {props.children}</AppContext.Provider>
  )
}