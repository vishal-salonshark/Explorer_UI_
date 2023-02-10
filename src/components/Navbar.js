import React from "react";
import  { GiCubes, GiToken } from "react-icons/gi";
import { IoGitNetworkSharp, IoWallet } from "react-icons/io5";
import  { BiTransferAlt } from "react-icons/bi";
import  { BsSearch } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";
import Logo from "./../img/Erium_logo.png"

const Navbar = () => {

    return (
        <nav className="flex items-center justify-between px-14 py-2 bg-transparent border-b-2 border-[#e2e3e4] text-slate-50 h-16">
            <div className=" flex w-28 felx-row justify-between items-end"><img className="h-10 w-22" src={Logo} alt=""/><small className="text-base mx-5"> Exchange</small></div>
                      {/* <span className="text-2xl font-bold align-middle">Erium <small>Exchange</small></span> */}
            <div className="flex justify-between items-center space-x-10 ">
                <ul className="flex justify-between items-center space-x-6 ">
                    <li className="flex justify-between items-center space-x-1"><AiFillDatabase/><label> Home </label></li>
                    <li className="flex justify-between items-center space-x-1"><GiCubes/><label> Blocks </label></li>
                    <li className="flex justify-between items-center space-x-1"><BiTransferAlt/><label> Transactions </label></li>
                    <li className="flex justify-between items-center space-x-1"><GiToken/><label> Tokens </label></li>
                    <li className="flex justify-between items-center space-x-1"><IoWallet/><label> Users </label></li>
                    <li className="flex justify-between items-center space-x-1"><IoGitNetworkSharp/><label> EriumChain </label></li>
                </ul>
                <div className="flex items-center px-6 py-1 rounded-full justify-center bg-[#89CDB3] text-slate-50 space-x-2">
                    <BsSearch/><label className=" text-center font-bold">Search</label></div>
                    
            </div>
        </nav>
    )
}

export default Navbar