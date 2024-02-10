import React, { useState, useEffect } from "react";
import { content as data } from "../assets/content";

function MainSite() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(data);
  }, []);

  return (
    <>
      <div className="grid col-[2/6] bg-[#303134]  border-[#D7DAE9] rounded-md border font-mono">
        <div className="flex justify-center bg-[#D7DAE9] self-start overflow-hidden">
          <h1>Main Window</h1>
        </div>

        <div className="flex justify-center text-white text-[12px] p-2">
          <img
            src="https://www.telefonica.com/es/wp-content/uploads/sites/4/2022/06/Imagen1.jpg?w=1224&h=673&crop=1"
            alt="testimage"
            className="h-20 rounded-lg"
          />
        </div>
        <div></div>
        <div>
          {content
            .filter((content) => content.id === 1)
            .map((content) => (
              <div key={content.id} className="text-white">
                <h1>{content.title}</h1>
                <p>{content.cont}</p>
              </div>
            ))}
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
