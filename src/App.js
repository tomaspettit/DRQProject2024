// App.js

//IMPORTS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigationBar';
import Content from './pages/content';
import Read from './pages/read';
import Create from './pages/create';
import Update from './pages/update';
import "./App.css";

// Function App - Displaying compenents - using client side routing handling paths
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </Router>
  );
}

//Export to App.js
export default App;
