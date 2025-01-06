import React from "react";
import logo from "../assets/logo.jpeg";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Navbar = () => {
  const {cart} = useSelector(state=>state);
  const {totalProduct} = useContext(AppContext);


  return (
    <div className="p-4 border-b-2 w-full shadow-sm">
        <div className="w-4/5 mx-auto flex justify-between ">
      <div className="flex items-center gap-2 font-semibold text-2xl">
        <Link to="/">
            <img src={logo} alt="Logo" width={50} className="rounded-2xl" />
        </Link>
        <Link to="/">
            <p>Namaste Dhaba</p>
        </Link>
      </div>
      <div className="relative">
      <Link to="/Cart">
            <IoFastFoodOutline size={40} />
      </Link>
            <div className="absolute top-0 right-[-10px] bg-orange-500 rounded-full px-2 text-white animate-bounce">{totalProduct}</div>
      </div>
      </div>

    </div>

  );
};

export default Navbar;
