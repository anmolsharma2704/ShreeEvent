import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"; 
import Error from "./Components/Error";
import Service from "./Components/Service";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact"; 
import CorporateEvents from "./Components/CorporateEvents";
import AssociationEvents from "./Components/AssociationEvents";
import NotForProfitEvents from "./Components/NotForProfitEvents";
import Events from  "./Components/Events";
import Birthday from "./Components/Birthday";
import Anniversary from "./Components/Anniversary";
import Wedding from "./Components/Wedding";
import Blog from "./Components/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use Home component for root path */}
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/corporate-events" element={<CorporateEvents />} />
          <Route path="/association-events" element={<AssociationEvents />} />
          <Route path="/not-for-profit-events" element={<NotForProfitEvents />} /> 
          <Route path="/events" element={<Events />} />
          <Route path="/anniversary" element={<Anniversary />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/blogs" element={<Blog />} />     
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
