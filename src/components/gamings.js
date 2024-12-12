// gamings.js - Displaying GamingItem component

//IMPORTS
import GamingItem from "../components/gamingItem";


// Function Gamings - GamingItem component
const Gamings = (props)=>{
    return props.myGamings.map(
        (gaming)=>{
             /* 
               Passes the ReloadData function to child components so 
               they can trigger a refresh after deletion. 
            */
            return <GamingItem mygaming={gaming} key={gaming._id} Reload={props.ReloadData}/>
        }
    );
}

//Export to App.js
export default Gamings;