// edit.js - Displaying Clock component

//IMPORTS
import axios from "axios";

    // Add edit functionality

    /*  useParams: is used to get the id of the gaming from the URL, 
    allowing us to retrieve the specific gaming data from the database. */
    import { useParams } from "react-router-dom"; 

    /* userNavigate: is called to redirect 
    the user back to the "read" page */
    import { useNavigate } from "react-router-dom"; 

import { useEffect, useState } from "react";
import Clock from "../components/clock";

// Edit Funtion & export to App.js, plus useParams, useEffect, useState, useNavigate, axios link & Clock component
const Update = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [poster, setPoster] = useState('');
    const [website, setWebsite] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4000/api/gaming/'+id)
        .then((res)=>{
            console.log("sucess "+res.data);
            setTitle(res.data.title);
            setOldPrice(res.data.oldPrice);
            setNewPrice(res.data.newPrice);
            setPoster(res.data.poster);
            setWebsite(res.data.website);
        })
        .catch((err)=>{console.log(err)});
    },[id]);

    /* handleSubmit => after input all five boxes, the edit button clicked, and it will navigate 
    to '/read' to see if it that changes */
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
            // No Website
            console.log("Website Not Added!")
        }else{
            // All 5 input boxes added
        const gaming = {title,oldPrice,newPrice,poster,website};
        console.log(gaming);

        axios.put('http://localhost:4000/api/gaming/'+id, gaming)
        .then((res)=>{
                // It would navigate to '/read' after 5 seconds (5000 milliseconds)
                const timer = setTimeout(() => {
                    navigate('/read'); 
                }, 5000);
                return () => clearTimeout(timer);
        })
        .catch((err)=>{
            console.log(err);
        });
      
    }
}

    return (
        <div>
            <Clock/>
            <p>If you want to go back to the home page, click on the home logo '<img
              src="/image/home.png"
              width="30" height="30"
              />' </p>
            <h3 id="h3EditStyle">Please update your gaming data</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Gaming Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div><br/>
                <div className="form-group">
                    <label>Edit Old Price: </label>
                    <input type="text"
                        className="form-control"
                        value={oldPrice}
                        onChange={(e) => { setOldPrice(e.target.value) }}
                    />
                </div><br/>
                <div className="form-group">
                    <label>Edit New Price: </label>
                    <input type="text"
                        className="form-control"
                        value={newPrice}
                        onChange={(e) => { setNewPrice(e.target.value) }}
                    />
                </div><br/>
                <div className="form-group">
                    <label>Edit Movie Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => { setPoster(e.target.value) }}
                    />
                </div><br/>
                <div className="form-group">
                    <label>Edit Gaming Website: </label>
                    <input type="text"
                        className="form-control"
                        value={website}
                        onChange={(e) => { setWebsite(e.target.value) }}
                    />
                </div><br/>
                <div>
                    <input type="submit" value="Update Gaming"></input>
                </div>
            </form>
        </div>
    );
}

//Export to App.js
export default Update;