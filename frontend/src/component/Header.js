import React from "react";
import { useState } from "react";
import OIP from "../assets/OIP.jpg";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  console.log(process.env.REACT_APP_ADMIN_EMAIL); //jus to check whether gmail id id displayed

  const cartItemNumber = useSelector((state) => state.product.cartItem);
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="flex items-center">
            <img src={OIP} alt="Logo" className="w-25 h-10 max-w-full mr-2" />
            <h1 class="text-3xl font-bold text-gray-800 fresh-text">Shop <span class="text-green-600">Fresh</span></h1>

          </div>
        </Link>
        
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg md:flex">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"cart"}>Cart</Link>
          </nav>

          <div className="text-2xl text-slate-600 realtive">
            <Link to={"cart"}>
              <BsCartFill />
              <div className="absolute -top-0 -right text-white bg-red-500 h-4 w-4 rounded-full m-1 p-0 text-sm text-center ">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          
          <Link
            to={"newproduct"}
            className="whitespace-nowrap cursor pointer px-2"
          >
            New Product
          </Link>
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor pointer">
              <HiOutlineUserCircle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
