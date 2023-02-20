import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { solidity } from './solidity.ts'

const SolidityEditor = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div
      className=" w-11/12 flex justify-center items-center"
      style={{width: '90rem'}}
    >
        <CodeMirror
          value=""
          width='90rem'
          height="20rem"
          scrollbarwidth="thin"
          className='overflow-y-auto scrollbar-thin scrollbar-track-inherit scrollbar-thumb-gray-300  overflow-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'
          extensions={solidity}
          style={{
            textAlign: 'start',
            border: 'none',
            outline: 'none !important',
            padding: '0',
            margin: '0',
            scrollbarWidth: 'thin',
           }}
          onChange={handleChange}
        />
      
    </div>
  )
}

export default SolidityEditor;