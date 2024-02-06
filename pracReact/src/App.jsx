import React from "react"

function App() {
 

  return (
    <>
     <div className="grid grid-cols-6 gap-1">
        <div className="card">1</div>
        <div className="card col-[2/6]">2</div>
        <div className="card">3</div>
        <div className="card col-[1/4]">4</div>
        <div className="card col-[4/7]">5</div>
     </div>
    </>
  )
}

export default App
