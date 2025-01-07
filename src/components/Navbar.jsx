import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate()
  const {userData,backendUrl,setUserData,setIsLoggedin} = useContext(AppContext)
  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-2 sm:px-24 bg-white fixed top-0 left-0 shadow-md z-50">
      <img
      className="w-10"
        src="/src/assets/authorization.png"
        alt="nav-image"
      />{userData ? <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group">
        {userData.name[0].toUpperCase()}
        <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10"> 
        <ul className='list-none m-0 p-2 bg-gray-100 text-sm'>
          <li className="py-1 px-2 hover:bg-gray-200 cursor-pointer">Verify Email</li>
        <li className="py-1 px-2 hover:bg-gray-200 cursor-pointer">Logout</li></ul>

        </div>
      </div> : <button onClick={()=>navigate('/login')} className="flex items-center gap-2 border border-gray-500 rounded-full px-4 py-2 text-gray-800 hover:bg-gray-100">
        Login
        <img
          className="w-4"
          src="/src/assets/right-arrow.png"
          alt="right-arrow"
        />
      </button>
      }
    </div>
  );
};

export default Navbar;
