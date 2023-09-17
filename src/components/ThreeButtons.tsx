import React from 'react'

const ThreeButtons = () => {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-4">
        {/* Button 1 */}
        <div className="relative inline-flex flex-col items-center px-16 py-16 overflow-hidden text-xl font-medium text-indigo-600 border-2 border-indigo-600 rounded-lg hover:text-white group hover:bg-gray-50">
          <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative">Documents</span>
        </div>

        {/* Button 2 */}
        <div className="relative inline-flex flex-col items-center px-16 py-16 overflow-hidden text-xl font-medium text-indigo-600 border-2 border-indigo-600 rounded-lg hover:text-white group hover:bg-gray-50">
          <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative">News feeds</span>
        </div>

        {/* Button 3 */}
        <div className="relative inline-flex flex-col items-center px-16 py-16 overflow-hidden text-xl font-medium text-indigo-600 border-2 border-indigo-600 rounded-lg hover:text-white group hover-bg-gray-50">
          <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative">Grammar</span>
        </div>
      </div>
    </div>
  


    </>
  )
}

export default ThreeButtons;


