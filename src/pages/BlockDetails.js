import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight, BsFillInfoCircleFill} from 'react-icons/bs'

const BlockDetails = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen py-2'>
    <div className="bg-white min-h-[80vh] w-4/5 mt-16 rounded-2xl flex flex-col shadow-2xl shadow-[#89cdb3b7]">
        <label className=" text-[#030214]  px-16 py-5 text-xl">
          Blocks Details
        </label>
        <div className='h-[35rem] w-full mb-10 flex justify-start items-center flex-col overflow-auto  scrollbar-thin scrollbar-track-inherit scrollbar-thumb-gray-300  overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-ful'>

        <div className='  w-full h-16 px-16 flex flex-row '>
          <div className=' w-1/5 mx-2 text-gray-500  font-light text-sm h-full flex flex-row justify-start items-center'>
            <BsFillInfoCircleFill className='mx-2'/>
            <label>Block Height</label>
          </div>
          <div className='   text-black font-light text-sm flex flex-row justify-start items-center '>
          <label>752363</label>
         </div>
        </div>

        <div className='   w-full h-16 px-16 flex flex-row '>
          <div className=' w-1/5 mx-2 text-gray-500  font-light text-sm h-full flex flex-row justify-start items-center'>
            <BsFillInfoCircleFill className='mx-2'/>
            <label>Timestamp</label>
          </div>
          <div className='   text-black font-light text-sm flex flex-row justify-start items-center '>
          <label>23 hours ago | February-12-2023 06:09:18 PM +5.5 UTC</label>
         </div>
        </div>

        <div className='   w-full h-16 px-16 flex flex-row '>
          <div className=' w-1/5 mx-2 text-gray-500  font-light text-sm h-full flex flex-row justify-start items-center'>
            <BsFillInfoCircleFill className='mx-2'/>
            <label>Transactions</label>
          </div>
          <div className='   text-black font-light text-sm flex flex-row justify-start items-center '>
          <label className='p-1 bg-blue-100 text-blue-500 rounded'>100 Transaction</label>
         </div>
        </div>

        <div className='   w-full h-16 px-16 flex flex-row '>
          <div className=' w-1/5 mx-2 text-gray-500  font-light text-sm h-full flex flex-row justify-start items-center'>
            <BsFillInfoCircleFill className='mx-2'/>
            <label>Miner</label>
          </div>
          <div className='   text-black font-light text-sm flex flex-row justify-start items-center '>
          <label className='text-blue-500'>0x82b842992a7050443E54686e8c3483798dC5E678</label>
         </div>
        </div>

        <div className='   w-full h-16 px-16 flex flex-row '>
          <div className=' w-1/5 mx-2 text-gray-500  font-light text-sm h-full flex flex-row justify-start items-center'>
            <BsFillInfoCircleFill className='mx-2'/>
            <label>Size</label>
          </div>
          <div className='   text-black font-light text-sm flex flex-row justify-start items-center '>
          <label>696 bytes</label>
         </div>
        </div>

        <div className='   w-full h-16 px-16 flex flex-row '>
          <div className=' w-1/5 mx-2 text-gray-500  font-light text-sm h-full flex flex-row justify-start items-center'>
            <BsFillInfoCircleFill className='mx-2'/>
            <label>Hash</label>
          </div>
          <div className='   text-black font-light text-sm flex flex-row justify-start items-center '>
          <label>0x695f4df5e9ff4adf6232546631af7f48ea6bc56b3440c1d5578cde4b107f2b26</label>
         </div>
        </div>

        <div className='   w-full h-16 px-16 flex flex-row '>
          <div className='b w-1/5 mx-2 text-gray-500  font-light text-sm h-full flex flex-row justify-start items-center'>
            <BsFillInfoCircleFill className='mx-2'/>
            <label>Parent Hash</label>
          </div>
          <div className='   text-black font-light text-sm flex flex-row justify-start items-center '>
          <label className='text-blue-500'>0xeb6a017cd1a44ea10a7b7a075b23ccc991382d36559c96831ed24fb5f2a82219</label>
         </div>
        </div>

        <div className='   w-full h-16 px-16 flex flex-row '>
          <div className=' w-1/5 mx-2 text-gray-500  font-light text-sm h-full flex flex-row justify-start items-center'>
            <BsFillInfoCircleFill className='mx-2'/>
            <label>Difficulty</label>
          </div>
          <div className='   text-black font-light text-sm flex flex-row justify-start items-center '>
          <label>340,282,366,920,938,463,463,374,607,431,768,211,454</label>
         </div>
        </div>

        <div className='   w-full h-16 px-16 flex flex-row '>
          <div className=' w-1/5 mx-2 text-gray-500  font-light text-sm h-full flex flex-row justify-start items-center'>
            <BsFillInfoCircleFill className='mx-2'/>
            <label>Total Difficulty</label>
          </div>
          <div className='  text-black font-light text-sm flex flex-row justify-start items-center '>
          <label>256,015,862,423,738,025,186,694,909,771,187,426,316,314,051</label>
         </div>
        </div>

        <div className='  w-full h-16 px-16 flex flex-row '>
          <div className=' w-1/5 mx-2 text-gray-500  font-light text-sm h-full flex flex-row justify-start items-center'>
            <BsFillInfoCircleFill className='mx-2'/>
            <label>Gas Used</label>
          </div>
          <div className='   text-black font-light text-sm flex flex-row justify-start items-center '>
          <label>21,000 | 0.3%</label>
         </div>
        </div>

        <div className='   w-full h-16 px-16 flex flex-row '>
          <div className=' w-1/5 mx-2 text-gray-500  font-light text-sm h-full flex flex-row justify-start items-center'>
            <BsFillInfoCircleFill className='mx-2'/>
            <label>Gas Limit</label>
          </div>
          <div className='   text-black font-light text-sm flex flex-row justify-start items-center '>
          <label>8,000,000</label>
         </div>
        </div>

        <div className='   w-full h-16 px-16 flex flex-row '>
          <div className=' w-1/5 mx-2 text-gray-500  font-light text-sm h-full flex flex-row justify-start items-center'>
            <BsFillInfoCircleFill className='mx-2'/>
            <label>Nonce</label>
          </div>
          <div className='   text-black font-light text-sm flex flex-row justify-start items-center '>
          <label>0x0000000000000000</label>
         </div>
        </div>

        <div className='  w-full h-16 px-16 flex flex-row '>
          <div className=' w-1/5 mx-2 text-gray-500  font-light text-sm h-full flex flex-row justify-start items-center'>
            <BsFillInfoCircleFill className='mx-2'/>
            <label>Miner Reward</label>
          </div>
          <div className='   text-black font-light text-sm flex flex-row justify-start items-center '>
          <label>4.756468797564687975 BIGB</label>
         </div>
        </div>
        </div>

      </div>



      <div className=" bg-white  my-16 min-h-[80vh] w-4/5 rounded-2xl flex flex-col shadow-2xl shadow-[#89cdb3b7]">
        <label className=" text-[#030214]  px-16 py-5 text-xl">Transactions</label>
        <div className=" w-full h-[40rem] mb-10 flex justify-start items-center flex-col overflow-auto  scrollbar-thin scrollbar-track-inherit scrollbar-thumb-gray-300  overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
         
          <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-sm text-blue-700"
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
              <div className=" w-[30rem] flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-sm text-blue-700"
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
              <div className=" w-[30rem] flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-sm text-blue-700"
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
              <div className=" w-[30rem] flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-sm text-blue-700"
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
              <div className=" w-[30rem] flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-sm text-blue-700"
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
              <div className=" w-[30rem] flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-sm text-blue-700"
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
              <div className=" w-[30rem] flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-sm text-blue-700"
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
              <div className=" w-[30rem] flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-sm text-blue-700"
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
              <div className=" w-[30rem] flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-sm text-blue-700"
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
              <div className=" w-[30rem] flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-sm text-blue-700"
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
              <div className=" w-[30rem] flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-sm text-blue-700"
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
              <div className=" w-[30rem] flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-sm text-blue-700"
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
              <div className=" w-[30rem] flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-sm text-blue-700"
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
              <div className=" w-[30rem] flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                <small className='text-blue-500'>Block #752363</small>
                <small>22 hours ago</small>
              </div>
            </div>
          </div>

         <div className="w-11/12 h-28 m-2 flex flex-row ">
            <div className="bg-blue-200  w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
              <Link
                className="font-bold  text-sm text-blue-700"
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
              <div className=" w-[30rem] flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
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

export default BlockDetails
