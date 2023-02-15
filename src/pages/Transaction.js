import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import AppContext from '../components/AppContext'

import Axios from 'axios'

const Transaction = () => {
  const [transactions, setTransactions] = useState([])
  const { setTxHashContext,setBlockNumberContext } = useContext(AppContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      Axios.get(`http://localhost:3001/tarnsactionsList/`).then((response) => {
        setTransactions(response.data)
      })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen py-2">
      <div className=" bg-white  my-16 min-h-[80vh] w-4/5 rounded-2xl flex flex-col shadow-2xl shadow-[#89cdb3b7]">
        <label className=" text-[#030214]  px-16 py-5 text-xl">
          Validated Transactions
        </label>
        <div className=" w-full h-[40rem] mb-10 flex justify-start items-center flex-col overflow-auto  scrollbar-thin scrollbar-track-inherit scrollbar-thumb-gray-300  overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
          {transactions.map((e, index) => {
            return (
              <div className="w-11/12 h-28 m-2 flex flex-row " key={index}>
                <div className="bg-blue-200  opacity-70 w-[15rem] flex flex-col justify-center items-center h-full border border-blue-500 border-l-4 rounded-sm ">
                  <label className="font-bold  text-xs text-blue-700">
                    Transactions
                  </label>
                  <label className="font-light text-sm text-blue-500">
                    Success
                  </label>
                </div>
                <div className="w-full h-full border border-gray-300 rounded flex flex-row justify-start items-center py-2">
                  <div className=" w-full h-full flex flex-col justify-center items-start text-gray-400 p-4 mx-2">
                    <div className=' flex flex-row items-center'><Link
                      className="text-blue-500 text-sm font-light"
                      to={`/transactionDetails`}
                      onClick={ (el)=>setTxHashContext(el.target.textContent)}
                    >
                      {e.transactions.transactionHash}{' '}
                    </Link>
                      <small className="text-black font-light bg-gray-300 rounded-sm my-1 p-1 ">
                        Transfer
                      </small></div>
                    <small className=" text-blue-500 flex flex-row justify-end text-xs">
                      {e.transactions.from}{' '}
                      <BsArrowRight className=" text-blue-500" />{' '}
                      {e.transactions.to}
                    </small>
                    <small className="text-black font-light">
                      {e.transactions.gasUsed}{' '}
                      <label className="text-gray-400 "> TX Fee</label>
                    </small>
                  </div>
                  <div className=" w-1/4 flex flex-col justify-center items-end text-gray-400 h-full p-4 mx-2">
                    <small className="text-blue-500">
                      Block #<Link to={'/blockDetails'} onClick={(e)=>setBlockNumberContext(e.target.textContext)}> {e.transactions.blockNumber} </Link>
                    </small>
                    <small>22 hours ago</small>
                  </div>
                </div>
              </div>
            )
          })}

          {/* <div className="w-11/12 h-28 m-2 flex flex-row ">
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
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Transaction
