function GraphTitle({title}) {
  return (
    <div className="flex justify-between items-center mb-2">
        <p className="text-sm md:text-md font-bold">{title}</p>
        <i className="text-2xl ri-arrow-down-s-fill"></i>
    </div>
  )
}

export default GraphTitle;
