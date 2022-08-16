function Pods({data, text}) {
  return (
    <div className="bg-neutral-100 text-primary-900 p-2 rounded-md">
        <div className="">
            <p className="m-0 md:text-lg lg:text-2xl font-bold">{data}</p>
            <small className="m-0 text-[10px] overflow-x-hidden w-full md:text-xs font-medium">{text}</small>  
        </div>  
    </div>
  )
}

export default Pods;