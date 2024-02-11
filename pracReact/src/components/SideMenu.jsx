function SideMenu({id, handleClick}) {
  
  
  return (
    <div className="bg-[#303134] grid self-start overflow-hidden rounded-md border border-[#D7DAE9] font-mono">
      <div className="flex justify-center bg-[#D7DAE9] ">
        <h1>Title</h1>
      </div>
      <div className="text-white text-[12px] p-2 ">
        <p className="">Welcome to proyect <span className="text-lg
         font-bold">Schema</span>, a place where you can find information about the future of the next financial system, cryptocurrencies and bockchain.</p>
      </div>
      <div>
        <ul className="list-none">
          <li>
            <button onClick={() => handleClick(0)}>Blockchain</button>
          </li>
          <li>
            <button>Bitcoin</button>
          </li>
          <li>
            <button onClick={()=> handleClick(1)}>Nombre</button>
            <h4>name:{id}</h4>
          </li>
        </ul>
      </div>
    </div>      
  )
}

export default SideMenu