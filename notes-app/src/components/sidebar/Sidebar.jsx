import React from "react";
import {  NavLink } from "react-router-dom";

const getStyles=({isActive})=>{
    const styles="flex items-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full";
    return isActive?`text-slate-50 bg-indigo-600 hover:text-white  flex items-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full transition-colors  ${styles} `
     :` hover:bg-indigo-600 hover:text-slate-50 ${styles} `
}

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-3 border-r  border-gray-300 w-[150px] h-screen p-3 ">
      <NavLink className={getStyles} to="/">
        <span className="material-icons-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink className={getStyles} to="/archive">
        <span className="material-icons-outlined">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink className={getStyles} to="/important">
        <span className="material-icons-outlined">label_important</span>
        <span>Important</span>
      </NavLink>
      <NavLink className={getStyles} to="/bin">
        <span className="material-icons-outlined">delete</span>
        <span>delete</span>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
