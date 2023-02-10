import React, { useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

const Search = ({ setModalOn, setChoice }) => {
  const [options, setOptions] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [selected, setSelected] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const data = [{ option: 'Blocks' }, { option: 'Transaction' }]
    setOptions(data)
  }, [])

  return (
    <div className="   bg-[#030214] opacity-90 fixed inset-0 z-50   ">
      <div className="flex h-screen justify-center items-center " onClick={()=>setOpen(false)}>
        <div className="flex flex-col justify-center align-middle items-center bg-[#030214] py-4 px-8  rounded-xl h-auto w-3/4">
          
          <div className="flex flex-row item-center mb-16  justify-center  shadow-2xl shadow-[#89cdb3c2] rounded-lg h-16 w-4/6 ">
            <div
              onClick={() => setOpen(!open)}
              className={`bg-white flex items-center justify-center rounded-l-lg text-black w-1/5 ${
                !selected && 'text-gray-700'
              }`}
            >
              {selected
                ? selected?.length > 25
                  ? selected?.substring(0, 25) + '...'
                  : selected
                : 'Select item'}
              <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
              <ul
                className={`bg-white mt-2 fixed top-1/5  left-1/6 right-1/6 overflow-y-auto  ${
                  open ? 'max-h-60' : 'max-h-0'
                } `}
              >
                {options?.map((item) => (
                  <li
                    key={item?.option}
                    className={`p-2 text-sm hover:bg-[#89CDB3] hover:text-black
            ${
              item?.option?.toLowerCase() === selected?.toLowerCase() &&
              'bg-[#89CDB3] text-black'
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
                        setOpen(false)
                        setInputValue('')
                      }
                    }}
                  >
                    {item?.option}
                  </li>
                ))}
              </ul>
            </div>
            <input className="bg-white flex items-center justify-between rounded-r-lg border-none text-black w-4/5" />
          </div>

          <div className="bg-white flex flex-col mx-2 p-4 rounded-lg shadow-2xl shadow-[#89cdb3c2] text-black w-2/3 h-[30rem] ">
            <div className=" h-16 border-b-2 mb-2 border-gray-300 flex items-center ">
              <label className=" text-black text-xl ">Lastest Blocks</label>
            </div>
            
            <div className='overflow-auto scrollbar-thin scrollbar-track-inherit scrollbar-thumb-gray-300  overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
            <div className=" h-16 border-b-2 border-gray-300 flex flex-row items-center ">
              <div className="bg-gray-400 m-4 h-12 w-12 rounded-lg">
                <label className="justify-center flex items-center h-full w-full text-black text-sm">
                  TX
                </label>
              </div>

              <div className=" h-11 w-40 m-1 flex flex-col justify-center p-2">
                <label className="text-blue-500 text-sm font-medium">
                  627551
                </label>
                <label className="text-black text-sm"> 5 min ago...</label>
              </div>

              <div className=" h-11 w-56 mx-2 flex flex-col justify-center p-2">
                <label className="text-black text-sm font-medium flex flex-row ">
                  Validated by{' '}
                  <small className="text-blue-500 mx-1 w-20 truncate text-sm font-light">
                    0x82b842992a7050443E54686e8c3483798dC5E678
                  </small>
                </label>
                <label className="text-black text-sm"> 0 txns</label>
              </div>
            </div>
            
            <div className=" h-16 border-b-2 border-gray-300 flex flex-row items-center ">
              <div className="bg-gray-400 m-4 h-12 w-12 rounded-lg">
                <label className="justify-center flex items-center h-full w-full text-black text-sm">
                  TX
                </label>
              </div>

              <div className=" h-11 w-40 m-1 flex flex-col justify-center p-2">
                <label className="text-blue-500 text-sm font-medium">
                  627551
                </label>
                <label className="text-black text-sm"> 5 min ago...</label>
              </div>

              <div className=" h-11 w-56 mx-2 flex flex-col justify-center p-2">
                <label className="text-black text-sm font-medium flex flex-row ">
                  Validated by{' '}
                  <small className="text-blue-500 mx-1 w-20 truncate text-sm font-light">
                    0x82b842992a7050443E54686e8c3483798dC5E678
                  </small>
                </label>
                <label className="text-black text-sm"> 0 txns</label>
              </div>
            </div>

            <div className=" h-16 border-b-2 border-gray-300 flex flex-row items-center ">
              <div className="bg-gray-400 m-4 h-12 w-12 rounded-lg">
                <label className="justify-center flex items-center h-full w-full text-black text-sm">
                  TX
                </label>
              </div>

              <div className=" h-11 w-40 m-1 flex flex-col justify-center p-2">
                <label className="text-blue-500 text-sm font-medium">
                  627551
                </label>
                <label className="text-black text-sm"> 5 min ago...</label>
              </div>

              <div className=" h-11 w-56 mx-2 flex flex-col justify-center p-2">
                <label className="text-black text-sm font-medium flex flex-row ">
                  Validated by{' '}
                  <small className="text-blue-500 mx-1 w-20 truncate text-sm font-light">
                    0x82b842992a7050443E54686e8c3483798dC5E678
                  </small>
                </label>
                <label className="text-black text-sm"> 0 txns</label>
              </div>
            </div>

            <div className=" h-16 border-b-2 border-gray-300 flex flex-row items-center ">
              <div className="bg-gray-400 m-4 h-12 w-12 rounded-lg">
                <label className="justify-center flex items-center h-full w-full text-black text-sm">
                  TX
                </label>
              </div>

              <div className=" h-11 w-40 m-1 flex flex-col justify-center p-2">
                <label className="text-blue-500 text-sm font-medium">
                  627551
                </label>
                <label className="text-black text-sm"> 5 min ago...</label>
              </div>

              <div className=" h-11 w-56 mx-2 flex flex-col justify-center p-2">
                <label className="text-black text-sm font-medium flex flex-row ">
                  Validated by{' '}
                  <small className="text-blue-500 mx-1 w-20 truncate text-sm font-light">
                    0x82b842992a7050443E54686e8c3483798dC5E678
                  </small>
                </label>
                <label className="text-black text-sm"> 0 txns</label>
              </div>
            </div>

            <div className=" h-16 border-b-2 border-gray-300 flex flex-row items-center ">
              <div className="bg-gray-400 m-4 h-12 w-12 rounded-lg">
                <label className="justify-center flex items-center h-full w-full text-black text-sm">
                  TX
                </label>
              </div>

              <div className=" h-11 w-40 m-1 flex flex-col justify-center p-2">
                <label className="text-blue-500 text-sm font-medium">
                  627551
                </label>
                <label className="text-black text-sm"> 5 min ago...</label>
              </div>

              <div className=" h-11 w-56 mx-2 flex flex-col justify-center p-2">
                <label className="text-black text-sm font-medium flex flex-row ">
                  Validated by{' '}
                  <small className="text-blue-500 mx-1 w-20 truncate text-sm font-light">
                    0x82b842992a7050443E54686e8c3483798dC5E678
                  </small>
                </label>
                <label className="text-black text-sm"> 0 txns</label>
              </div>
            </div>

            <div className=" h-16 border-b-2 border-gray-300 flex flex-row items-center ">
              <div className="bg-gray-400 m-4 h-12 w-12 rounded-lg">
                <label className="justify-center flex items-center h-full w-full text-black text-sm">
                  TX
                </label>
              </div>

              <div className=" h-11 w-40 m-1 flex flex-col justify-center p-2">
                <label className="text-blue-500 text-sm font-medium">
                  627551
                </label>
                <label className="text-black text-sm"> 5 min ago...</label>
              </div>

              <div className=" h-11 w-56 mx-2 flex flex-col justify-center p-2">
                <label className="text-black text-sm font-medium flex flex-row ">
                  Validated by{' '}
                  <small className="text-blue-500 mx-1 w-20 truncate text-sm font-light">
                    0x82b842992a7050443E54686e8c3483798dC5E678
                  </small>
                </label>
                <label className="text-black text-sm"> 0 txns</label>
              </div>
            </div>

            <div className=" h-16 border-b-2 border-gray-300 flex flex-row items-center ">
              <div className="bg-gray-400 m-4 h-12 w-12 rounded-lg">
                <label className="justify-center flex items-center h-full w-full text-black text-sm">
                  TX
                </label>
              </div>

              <div className=" h-11 w-40 m-1 flex flex-col justify-center p-2">
                <label className="text-blue-500 text-sm font-medium">
                  627551
                </label>
                <label className="text-black text-sm"> 5 min ago...</label>
              </div>

              <div className=" h-11 w-56 mx-2 flex flex-col justify-center p-2">
                <label className="text-black text-sm font-medium flex flex-row ">
                  Validated by{' '}
                  <small className="text-blue-500 mx-1 w-20 truncate text-sm font-light">
                    0x82b842992a7050443E54686e8c3483798dC5E678
                  </small>
                </label>
                <label className="text-black text-sm"> 0 txns</label>
              </div>
            </div>

            <div className=" h-16 border-b-2 border-gray-300 flex flex-row items-center ">
              <div className="bg-gray-400 m-4 h-12 w-12 rounded-lg">
                <label className="justify-center flex items-center h-full w-full text-black text-sm">
                  TX
                </label>
              </div>

              <div className=" h-11 w-40 m-1 flex flex-col justify-center p-2">
                <label className="text-blue-500 text-sm font-medium">
                  627551
                </label>
                <label className="text-black text-sm"> 5 min ago...</label>
              </div>

              <div className=" h-11 w-56 mx-2 flex flex-col justify-center p-2">
                <label className="text-black text-sm font-medium flex flex-row ">
                  Validated by{' '}
                  <small className="text-blue-500 mx-1 w-20 truncate text-sm font-light">
                    0x82b842992a7050443E54686e8c3483798dC5E678
                  </small>
                </label>
                <label className="text-black text-sm"> 0 txns</label>
              </div>
            </div>

            <div className=" h-16 border-b-2 border-gray-300 flex flex-row items-center ">
              <div className="bg-gray-400 m-4 h-12 w-12 rounded-lg">
                <label className="justify-center flex items-center h-full w-full text-black text-sm">
                  TX
                </label>
              </div>

              <div className=" h-11 w-40 m-1 flex flex-col justify-center p-2">
                <label className="text-blue-500 text-sm font-medium">
                  627551
                </label>
                <label className="text-black text-sm"> 5 min ago...</label>
              </div>

              <div className=" h-11 w-56 mx-2 flex flex-col justify-center p-2">
                <label className="text-black text-sm font-medium flex flex-row ">
                  Validated by{' '}
                  <small className="text-blue-500 mx-1 w-20 truncate text-sm font-light">
                    0x82b842992a7050443E54686e8c3483798dC5E678
                  </small>
                </label>
                <label className="text-black text-sm"> 0 txns</label>
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
