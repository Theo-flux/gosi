function PodGrid({children}) {
    return (
      <div className="pb-4 border-b border-dashed border-neutral-400 grid grid-cols-2 gap-2 lg:grid-cols-3 gap-4">
          {children} 
      </div>
    )
  }
  
export default PodGrid;