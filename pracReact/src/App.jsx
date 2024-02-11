import React, {useState} from "react";
import SideMenu from './components/SideMenu';
import MainSite from './components/MainSite';
import Table from './components/Table';



function App() {
  const [id,setId] = useState(0)

  function handleClick(id){
    console.log(id)
    setId(id)
  }
  return (
    <>
     <div className="grid grid-cols-6 gap-1">
        <SideMenu id={id} handleClick={handleClick}/>
        <MainSite id={id}/>
        <div className="card">3</div>
        <Table />
        <div className="card grid col-[4/7]">5</div>
     </div>
    </>
  )
}

export default App
