// read.js - Displaying Gamings & Clock component

//IMPORTS
import Gamings from "../components/gamings";
import { useEffect, useState } from "react";
import axios from "axios";
import Clock from "../components/clock";

// Function Read - useState, axios link, Clock & Gamings component
const Read = () => {

  const [gamings, setGamings] = useState([]);

  /* 
     Defines and manages the Reload function, which fetches 
     updated gaming data from the server and updates the state. 
  */
  const reloadData = () =>{
    axios.get('http://localhost:4000/api/gamings')
      .then((response) => {
        console.log(response.data);
        setGamings(response.data.gamings);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    reloadData();
  },[]);
  return (
    <div>
      <Clock/>
      <p>If you want to go back to the home page, click on the home logo '<img
              src="/image/home.png"
              width="30" height="30"
              />' </p>
              <h3 id="h3ReadStyle">Reading Data</h3>
      <Gamings myGamings={gamings} ReloadData={reloadData}/>
    </div>
  );
}

//Export to App.js
export default Read;