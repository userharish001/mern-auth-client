import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import robot from '../assets/robot.png'
import { AppContext } from "../context/AppContext";

const Header = () => {
  const {userData} = useContext(AppContext)
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <img
        className="w-36 h-36 rounded-full mb-4"
        src={robot}
        alt="home-image"
      />
      <h1 className="text-2xl font-bold">Hey {userData ? userData.name : 'Developer'}</h1>
      <p className="text-2xl font-bold mt-3">Welcome to our app</p>
      <p className="text-lg text-gray-600">Let's start developing with me</p>
      <Link to={'/'}  className="bg-orange-700 text-white px-4 py-2 rounded-full hover:bg-orange-400 transition-all ">Started</Link>
    </div>
  );
};

export default Header;
