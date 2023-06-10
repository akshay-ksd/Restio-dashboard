import React from 'react'
import { AddCircleOutline,SearchOutline,FilterOutline } from 'react-ionicons'

function Header(props) {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search"
        className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand font-sans-condensed"
      />
      <button className="items-center flex ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-brand focus:outline-none font-sans-condensed">
      <SearchOutline
          color={'#00000'}
          height="20px"
          width="20px"
        />
        <span className='ml-2'>Search</span>
      </button>
      <button className="items-center flex ml-2 bg-brandLight text-white px-4 py-2 rounded-lg hover:bg-brand focus:outline-none font-sans-condensed"
              onClick={()=>props.openForm()}>
        <AddCircleOutline
          color={'#00000'}
          height="20px"
          width="20px"
        />
        <span className='ml-2'>Add New Restaurant</span>
      </button>
      <button className="items-center flex ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-brand focus:outline-none font-sans-condensed">
        <FilterOutline
          color={'#00000'}
          height="20px"
          width="20px"
        />
      </button>
    </div>
  )
}

export default Header