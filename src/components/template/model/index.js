import React from 'react'

function Model({children}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black bg-opacity-50">
         <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
            {children}
         </div>
    </div>
  )
}

export default Model