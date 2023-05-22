import React from "react";
import Perfil from "../assets/images/perfilJohn.jpg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <div className="flex items-center">
        <img src={Perfil} alt="Logo" className="w-12 mx-6 rounded-full avatar" />
        <h1 className="text-white text-lg font-bold">JohnNews</h1>
      </div>
    </nav>
  );
};

export default Navbar;
