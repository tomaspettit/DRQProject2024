// content.js - Displaying Clock component

//IMPORTS
import React from 'react';
import Clock from "../components/clock";

/* 
    Logo create is for going to create page ('/create') for create a new data
    Logo read is for going to read page ('/read') for reading all data for what I create
*/

//Function Content - Clock component, Navigation Bar
const Content = () => {

  return (
    <div className="appStyle">
      <Clock/>
      <h1>Welcome to Online Gaming Shop</h1>
      <p>When your an Admin, you can create, read, update or delete gaming items.</p>
      <p>For lots of examples that you can choose are: </p>
        <ol>
          <li>VR(Virtual Reality) using Headset and controller</li>
          <li>Video Games</li>
          <li>Chargers for charging up your controllers or so much more</li>
          <li>Gaming Consoles</li>
          <li>Controllers</li>
          <li>Gaming Desktop like getting PC component, parts for setting up laptop or computer</li>
        </ol>
          <p>If you want to add new gaming records, click on the create logo 
            '<img src="/image/create.png" width="30" height="30"/>' 
          </p>
          <p>If you want to look all of those gaming records, click on the read logo 
            '<img src="/image/read.png" width="30" height="30" />'
          </p>
              <img src="/image/console.png" width="200" height="200"/>
              <img src="/image/vr.png" width="250" height="200"/>
              <img src="/image/xbox.png" width="200" height="200"/>
    </div>
  );
}

//Export to App.js
export default Content;