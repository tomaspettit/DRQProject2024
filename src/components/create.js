// create.js

//IMPORTS
import axios from "axios";
import { useState } from "react";
import Clock from "./clock";
import { useNavigate } from "react-router-dom";

// Function Create - useState, axios link, useNavigate & Clock component
const Create = () => {

    const [title, setTitle] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [poster, setPoster] = useState('');
    const [website, setWebsite] = useState('');
    const navigate = useNavigate();

    /* handleSubmit => after input all five boxes, the create button clicked, and it will navigate 
    to '/read' to see if it the data is create */
    const handleSubmit = (e) => {
        e.preventDefault();

        if(title == ""){
            // No Title
            console.log("Title Not Added!")
        }else if(oldPrice == ""){
            // No Old Price
            console.log("Old Price Not Added!")
        }else if(newPrice == ""){
            // No New Price
            console.log("New Price Not Added!")
        }else if(poster == ""){
            // No Poster
            console.log("Poster Not Added!")
        }else if(website == ""){
            // No Webiste
            console.log("Website Not Added!")
        }else{
            // All 5 input boxes added
        const gaming = {title, oldPrice, newPrice, poster, website};
        console.log(gaming);

        axios.post('http://localhost:4000/api/gamings',gaming)
        .then((res)=>{
            console.log(res.data);
            
            // It would navigate to '/read' after 5 seconds (5000 milliseconds)
            const timer = setTimeout(() => {
                navigate('/read'); 
            }, 5000);
            return () => clearTimeout(timer);
        })
        .catch();
    }
}

    return (
        <div>
            <Clock/>
            <p>If you want to go back to the home page, click on the home logo '<img
              src="/image/home.png"
              width="30" height="30"
              />' </p>
              <h3 id="h3CreateStyle">Please create your gaming data</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Gaming Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div><br/>
                <div className="form-group">
                    <label>Add Old Price: </label>
                    <input type="text"
                        className="form-control"
                        value={oldPrice}
                        onChange={(e) => { setOldPrice(e.target.value) }}
                    />
                </div><br/>
                <div className="form-group">
                    <label>Add New Price: </label>
                    <input type="text"
                        className="form-control"
                        value={newPrice}
                        onChange={(e) => { setNewPrice(e.target.value) }}
                    />
                </div><br/>
                <div className="form-group">
                    <label>Add Gaming Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => { setPoster(e.target.value) }}
                    />
                </div><br/>
                <div className="form-group">
                    <label>Add Gaming Website: </label>
                    <input type="text"
                        className="form-control"
                        value={website}
                        onChange={(e) => { setWebsite(e.target.value) }}
                    />
                </div><br/>
                <div>
                    <input id="inputButtonStyle" type="submit" value="Add Gaming"></input>
                </div>
            </form>
        </div>
    );
}

//Export to App.js
export default Create;