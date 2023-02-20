/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react'

import { BiChevronDown } from 'react-icons/bi'

const IsOptimized = () => {

    const [isOptimized, setIsOptimized] = useState(null)
    const [optimizeValue, setOptimizeValue] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [selected, setSelected] = useState('')
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const isOptimized = [{ option: 'Optimized', vlaue : '1' }, { option: 'Not-Optimized', vlaue: '0' }]
        setIsOptimized(isOptimized)
      }, [])

      useEffect(() => {
        console.log(optimizeValue)
      }, [optimizeValue])
      


    

  return (
    <div className='h-22 flex flex-col w-full mx-5 '>
            <label className='px-2 font-medium text-white'>isOptimized</label>
            <div
              onClick={() => setOpen(!open)}
              className={`bg-white flex items-center my-5 p-8 justify-between shadow-lg shadow-gray-400 rounded-lg text-black h-16 w-full ${
                !selected && 'text-gray-700'
              }`}
            >
              {selected
                ? selected?.length > 25
                  ? selected?.substring(0, 25) + '...'
                  : selected
                : 'Select Compiler Version'}
              <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
              <ul
               className={`bg-white mt-2 absolute top-[44rem] left-1/4 right-1/4 shadow-lg shadow-gray-400 rounded-lg overflow-y-auto ${
                open ? "max-h-60" : "max-h-0"
              } `}
            >
              {isOptimized?.map((item) => (
                  <li
                    key={item?.option}
                    className={`p-2 text-sm hover:bg-gray-400 hover:text-black
            ${
              item?.option?.toLowerCase() === selected?.toLowerCase() &&
              'bg-gray-400 text-black'
            }
            ${
              item?.option?.toLowerCase().startsWith(inputValue)
                ? 'block'
                : 'hidden'
            }`}
                    onClick={() => {
                      if (
                        item?.option?.toLowerCase() !== selected.toLowerCase()
                      ) {
                        setSelected(item?.option)
                        setOptimizeValue(item?.vlaue)
                        setOpen(false)
                        setInputValue('')
                        
                    }}}
                  >
                    {item?.option}
                  </li>
                ))}
              </ul>
            </div>
            </div>
  )
}

export default IsOptimized