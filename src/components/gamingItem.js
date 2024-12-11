// movieitem.js

//IMPORTS
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

/* A component from React Router that lets you navigate to a new route without refreshing the page. 
It is used to create in-app navigation.*/
// to={"/edit/" + props.mygaming._id}: This to attribute defines the path the Link component should navigate to when clicked.
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import axios from "axios";

// Group a series of buttons together on a single line or stack them in a vertical column
import { ButtonGroup } from "react-bootstrap"; 

/* 
    Logo update on the blue button is for going to the edit page ('/update/:id')
    Logo delete on the red button is for deleting data out of the gaming list
    An image arrow for showing of how to click on the image as a website 
*/

//Function GamingItem
const GamingItem = (props)=> {
  useEffect(() => {
    console.log("Gaming Item:", props.mygaming);
  }, [props.mygaming]); // Only run this effect when the mygaming prop changes

  /* 
     Adds a delete button to each gaming with a delete image logo, sending a DELETE request with the 
     gaming's ID to the server. Refreshes the gaming list by calling the Reload 
     function passed down as a prop.
  */
     const handleDelete = (e) => {
      e.preventDefault();
      axios.delete('http://localhost:4000/api/gaming/' + props.mygaming._id)
          .then((res) => {
              props.Reload(); // Refresh the gaming list after deletion
          })
          .catch((err) => {
              console.error("Error deleting gaming:", err);
          });
  };

  /*  
      Card.Header for Gaming Title
      Footer for New Price & Old Price => incase it's only one price, put them both on the same price. 
      Otherwise put them into different price.
      Card.Body for Gaming Poster with a website => click on the image that it will get you to website link
  */
  return (
    <div>
      <Card>
        <Card.Header id="cardStyle" ><b>{props.mygaming.title}</b></Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <a href={props.mygaming.website}>
            <img src={props.mygaming.poster} alt={props.mygaming.title} />
            </a>
            <footer>Click on the image<br/> that goes to the website<img src="/image/arrow.jpg" width="45" height="30"></img><br/>
            <b>New Price:</b> €{props.mygaming.newPrice} <br/><b>Old Price:</b> €{props.mygaming.oldPrice}
            </footer>
          </blockquote>
        </Card.Body>
        <ButtonGroup>
        <Link className="btn btn-primary" to={"/update/"+props.mygaming._id}><img
              src="/image/edit.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /></Link>
        <Button className="btn btn-danger" onClick={handleDelete}><img
              src="/image/delete.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /></Button>
            </ButtonGroup>
      </Card>
    </div>
  );
}

//Export to App.js
export default GamingItem;