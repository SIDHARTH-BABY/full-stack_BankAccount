import React from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../Sidebar/SideBar";

import  './homesyle.scss';
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
    <SideBar/> 
       <div  >
     Home Page
    </div>
    </>

  );
};

export default Homepage;
