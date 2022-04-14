import React from 'react'

function DataCardsContainer({className, children}) {
  return (
    <div className={`${className} py-4`}>
        {children}
    </div>
  )
}

export default DataCardsContainer;