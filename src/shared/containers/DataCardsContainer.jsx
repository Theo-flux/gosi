import React from 'react'

function DataCardsContainer({className, children}) {
  return (
    <div className={`${className} pt-2 md:pt-8 overflow-y-hidden h-[550px]`}>
        {children}
    </div>
  )
}

export default DataCardsContainer;