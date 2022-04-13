import React from 'react'

function DataCardsContainer({className, children}) {
  return (
    <div className={`${className} py-4 overflow-y-scroll h-[450px]`}>
        {children}
    </div>
  )
}

export default DataCardsContainer;