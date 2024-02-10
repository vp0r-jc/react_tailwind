import React from "react"
import SideMenu from './components/SideMenu'
import MainSite from './components/MainSite'
import Table from './components/Table'

function App() {
 

  return (
    <>
     <div className="grid grid-cols-6 gap-1">
        <SideMenu />
        <MainSite />
        <div className="card">3</div>
        <Table />
     </div>
    </>
  )
}

export default App
