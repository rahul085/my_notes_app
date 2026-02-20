import React from "react";
import logo from "../../assets/note.webp";

const Navbar = () => {
  return (
   <header className="flex items-center px-6 py-3 gap-4 bg-white shadow-sm border-b border-gray-200">
  
  <div className="w-10 h-10 bg-pink-200 rounded-full p-2 flex items-center justify-center">
    <img
      className="w-full h-full object-contain"
      src={logo}
      alt="my_logo"
    />
  </div>

  <h1 className="text-indigo-700 text-2xl font-semibold tracking-wide">
    BrainDoc
  </h1>

</header>

  );
};

export default Navbar;
