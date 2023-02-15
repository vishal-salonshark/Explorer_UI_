import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

const Transaction = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen py-2'>
      
      <div className=" bg-white  my-16 min-h-[80vh] w-4/5 rounded-2xl flex flex-col shadow-2xl shadow-[#89cdb3b7]">
        <label className=" text-[#030214]  px-16 py-5 text-xl">Validated Transactions</label>
        <div className=" w-full h-[40rem] mb-10 flex justify-start items-center flex-col overflow-auto  scrollbar-thin scrollbar-track-inherit scrollbar-thumb-gray-300  overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
         
          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-blue-700"
                to={`/blockDetails`}
              >
                Transactions
              </Link>
              <label className="font-light text-sm text-blue-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505 <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>


          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-green-100 opacity-70  w-[15rem] flex flex-col justify-center items-center h-full border border-green-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-green-700"
                to={`/blockDetails`}
              >
                Contract Call
              </Link>
              <label className="font-light text-sm text-green-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505 <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-purple-100 opacity-70  w-[15rem] flex flex-col justify-center items-center h-full border border-purple-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-purple-700"
                to={`/blockDetails`}
              >
                Contract Creation
              </Link>
              <label className="font-light text-sm text-purple-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505 <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>


         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-blue-700"
                to={`/blockDetails`}
              >
                Transactions
              </Link>
              <label className="font-light text-sm text-blue-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505  <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-blue-700"
                to={`/blockDetails`}
              >
                Transactions
              </Link>
              <label className="font-light text-sm text-blue-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505  <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-blue-700"
                to={`/blockDetails`}
              >
                Transactions
              </Link>
              <label className="font-light text-sm text-blue-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505  <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>


          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-green-100 opacity-70  w-[15rem] flex flex-col justify-center items-center h-full border border-green-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-green-700"
                to={`/blockDetails`}
              >
                Contract Call
              </Link>
              <label className="font-light text-sm text-green-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505 <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-purple-100 opacity-70  w-[15rem] flex flex-col justify-center items-center h-full border border-purple-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-purple-700"
                to={`/blockDetails`}
              >
                Contract Creation
              </Link>
              <label className="font-light text-sm text-purple-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505 <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>


         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-blue-700"
                to={`/blockDetails`}
              >
                Transactions
              </Link>
              <label className="font-light text-sm text-blue-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505  <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-blue-700"
                to={`/blockDetails`}
              >
                Transactions
              </Link>
              <label className="font-light text-sm text-blue-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505  <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-blue-700"
                to={`/blockDetails`}
              >
                Transactions
              </Link>
              <label className="font-light text-sm text-blue-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505  <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>


          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-green-100 opacity-70  w-[15rem] flex flex-col justify-center items-center h-full border border-green-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-green-700"
                to={`/blockDetails`}
              >
                Contract Call
              </Link>
              <label className="font-light text-sm text-green-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505 <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-purple-100 opacity-70  w-[15rem] flex flex-col justify-center items-center h-full border border-purple-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-purple-700"
                to={`/blockDetails`}
              >
                Contract Creation
              </Link>
              <label className="font-light text-sm text-purple-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505 <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-purple-100 opacity-70  w-[15rem] flex flex-col justify-center items-center h-full border border-purple-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-purple-700"
                to={`/blockDetails`}
              >
                Contract Creation
              </Link>
              <label className="font-light text-sm text-purple-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505 <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-blue-700"
                to={`/blockDetails`}
              >
                Transactions
              </Link>
              <label className="font-light text-sm text-blue-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505  <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-blue-700"
                to={`/blockDetails`}
              >
                Transactions
              </Link>
              <label className="font-light text-sm text-blue-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505  <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-blue-700"
                to={`/blockDetails`}
              >
                Transactions
              </Link>
              <label className="font-light text-sm text-blue-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505  <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-blue-700"
                to={`/blockDetails`}
              >
                Transactions
              </Link>
              <label className="font-light text-sm text-blue-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505  <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>


          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-green-100 opacity-70  w-[15rem] flex flex-col justify-center items-center h-full border border-green-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-green-700"
                to={`/blockDetails`}
              >
                Contract Call
              </Link>
              <label className="font-light text-sm text-green-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505 <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>


          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-green-100 opacity-70  w-[15rem] flex flex-col justify-center items-center h-full border border-green-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-green-700"
                to={`/blockDetails`}
              >
                Contract Call
              </Link>
              <label className="font-light text-sm text-green-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505 <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>


          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-green-100 opacity-70  w-[15rem] flex flex-col justify-center items-center h-full border border-green-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-green-700"
                to={`/blockDetails`}
              >
                Contract Call
              </Link>
              <label className="font-light text-sm text-green-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505 <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>


          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-green-100 opacity-70  w-[15rem] flex flex-col justify-center items-center h-full border border-green-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-green-700"
                to={`/blockDetails`}
              >
                Contract Call
              </Link>
              <label className="font-light text-sm text-green-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505 <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-green-100 opacity-70  w-[15rem] flex flex-col justify-center items-center h-full border border-green-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-green-700"
                to={`/blockDetails`}
              >
                Contract Call
              </Link>
              <label className="font-light text-sm text-green-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505 <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-purple-100 opacity-70  w-[15rem] flex flex-col justify-center items-center h-full border border-purple-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-purple-700"
                to={`/blockDetails`}
              >
                Contract Creation
              </Link>
              <label className="font-light text-sm text-purple-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505 <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-blue-700"
                to={`/blockDetails`}
              >
                Transactions
              </Link>
              <label className="font-light text-sm text-blue-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505  <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-blue-700"
                to={`/blockDetails`}
              >
                Transactions
              </Link>
              <label className="font-light text-sm text-blue-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505  <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-xs text-blue-700"
                to={`/blockDetails`}
              >
                Transactions
              </Link>
              <label className="font-light text-sm text-blue-500">Success</label>
            </div>
            <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
              <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                <small className='text-blue-500'>0x6963b949e1e61d60fec001a715f5748f067dc6502b3465fd5a8377b69c115505  <small className='text-black font-light bg-gray-300 rounded-sm my-1 p-1 '>Transfer</small></small>
                <small className=" text-blue-500 flex flex-row justify-end text-xs">
                  0x24BA172363436962811e6C62E30B19Cbd7D615F1 <BsArrowRight className=" text-blue-500"/> 0x82b842992a7050443E54686e8c3483798dC5E678
                </small>
                <small className='text-black font-light'>705 BIGB <small className='text-gray-400 '>0 TX Fee</small></small>
              </div>
              <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Transaction
