import React, { useEffect, useState, useContext } from 'react'

import AppContext from '../components/AppContext'
import CompilerVersion from '../components/CompilerVersion'
import IsOptimized from '../components/IsOptimized'
import SolidityEditor from '../components/SolidityEditor'


const VerifyContract = () => {
    // eslint-disable-next-line no-unused-vars
    const { acc, setAcc } = useContext(AppContext)

    const [contractName, setContractName] = useState('')
    const [ code ,setCode] = useState()
    useEffect(() => {
      console.log(code)
    }, [code])
    
  return (
    <div className="flex flex-col justify-center items-center  w-full min-h-[95vh] ">
    <div className="w-11/12 min-h-[25rem] mt-24">
    <label className="text-2xl font-bold text-white  mx-16 ">
          Contract Address Details
        </label>
        
        <div className="font-semibold text-white text-xl mx-16 mt-5 underline">{acc}</div>
        
      <div className=" flex flex-col justify-center items-center mt-5">
        <div className="flex flex-row item-center p-5  justify-center rounded-lg w-4/6 ">
          <CompilerVersion />
          <div className="h-22 flex flex-col w-1/2 mx-5 ">
            <label className="px-2 font-medium text-white">Contract Name</label>
            <input
              className="bg-white flex items-center my-5 p-8 justify-between shadow-lg shadow-gray-400 rounded-lg text-black h-16 w-ful"
              onInput={(e) => {
                setContractName(e.target.value.toLowerCase())
                console.log(contractName)
              }}
            />
          </div>
        </div>

        <div className="flex flex-row item-center p-5  justify-center rounded-lg w-4/6 ">
          <IsOptimized />
        </div>
      </div>

      <div className="w-11/12 min-h-[25rem] rounded-3xl shadow-xl shadow-[#89cdb3c2]  m-10 p-10 bg-white" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <label className="text-lg text-start mb-10 px-3 w-full"> Source Code</label>
      <div>
      <SolidityEditor onChange={(e)=>{setCode(e)}} />
      </div>
      </div>
    
    </div>
    </div>
  )
}

export default VerifyContract
