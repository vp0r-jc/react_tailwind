import React from "react"
import SideMenu from './components/SideMenu'
import MainSite from './components/MainSite'

function App() {
 

  return (
    <>
     <div className="grid grid-cols-6 gap-1">
        <SideMenu />
        <div className="card col-[2/6]">2</div>
        <div className="card">3</div>
        <div className="card col-[1/4]">4</div>
        <div className="card col-[4/7]">5</div>
     </div>
    </>
  )
}

export default App
