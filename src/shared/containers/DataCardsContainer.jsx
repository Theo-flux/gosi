import React from 'react'

function DataCardsContainer({children}) {
  return (
    <div className="pt-2 mdpt-8 overflow-y-hidden h-[477px]">
        {children}
    </div>
  )
}

export default DataCardsContainer;