import React, { useState, useEffect } from "react";
import { content as data } from "../assets/content";

function MainSite({id}) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(data);
  }, []);

  return (
    <>
      <div className="grid col-[2/6] bg-[#303134]  border-[#D7DAE9] rounded-md border font-mono h-[680px] overflow-auto">
        <div className="flex justify-center bg-[#D7DAE9] self-start">
          <h1>Main Window</h1>
        </div>

        <div className="flex justify-center p-2 overflow-auto">
    
        
        <div className="overflow-auto">
          {content
            .filter((content) => content.id === id)
            .map((content) => (
              <div key={content.id} className="text-white">
                <h1 className="font-bold text-xl flex justify-center">{content.title}</h1>
                <p className="flex justify-center text-[13px] text-teal-700">{content.subtitle}</p>
                <br />
                <p className="text-gray-400">{content.cont}</p>
                <br />
                <p className="text-gray-400">{content.textb}</p>
                <br/>
                <p className="text-cyan-400">{content.textc}</p>
                <br />
                <p>{content.pow}</p>
                <p>{content.pow}</p>
                <p>{content.pow}</p>
                <p>{content.pow}</p>
              </div>
            ))}
            <h4>id:{id}</h4>
        </div>
      </div>
      </div>
    </>
  );
}

export default MainSite;

/* {content.map((content) => (
  <div key={content.id} className="text-white">
    <h1>{content.title}</h1>
    <p>{content.cont}</p>
  </div>
))} */
