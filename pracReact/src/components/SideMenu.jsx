function SideMenu({id, handleClick}) {
  
  
  return (
    <div className="bg-[#303134] grid self-start overflow-hidden rounded-md border border-[#D7DAE9] font-mono">
      <div className="flex justify-center bg-[#D7DAE9] ">
        <h1>::index::</h1>
      </div>
      <div className="text-white text-[12px] p-2 ">
        <p className="">Welcome to project <span className="
         font-bold text-lime-400">VB(Vitual Biogenesis)</span>, knowledge is made for sharing.</p>
         <p>&nbsp;</p>
         <p className="text-[#D7DAE9]">We are the prime artefacts of a universal astroengineering project by type omega intellects...</p>
         <p>&nbsp;</p>
         <p className="text-red-600">v0.1 <span className="text-[#D7DAE9]">by vp0rLAB</span></p>
      </div>
      <div>
        <ul className="list-none">
          <li>
            <button onClick={() => handleClick(0)}>Blockchain</button>
          </li>
          <li>
          <button onClick={() => handleClick(1)}>Bitcoin</button>
          </li>
          <li>
          <button onClick={() => handleClick(2)}>Eth</button>
          </li>
          <li>
            <h4>id:{id}</h4>
          </li>
        </ul>
      </div>
    </div>      
  )
}

export default SideMenu