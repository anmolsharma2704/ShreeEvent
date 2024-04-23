// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home"; 
import Error from "./Components/Error";
import Service from "./Components/Pages/Service";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use Home component for root path */}
          <Route path="/About" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<Error />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
