import React from "react";
import { Box } from "@chakra-ui/react";
import "./Home.css"

const Home = () => {
  return (
    <>
     <div className="home-content" id="home">
        {/* <h1>hello</h1> */}
        <div className="bg">
          <img src="\image\Llogo.png" className="Logo" />
          <br/>
          {/* <h1 className="logoname">COLD PLAY</h1> */}
        </div>
      </div>
    </>
  );
};

export default Home;
