import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

import  Privacy  from "./Privacy";
import  Home  from "./Home";
import Header from './theme/Header';
import Footer from './theme/Footer';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes  >
          <Route
            path="/"
            exact
            element={ <Home />}
          />
          <Route
            path="/privacy-policy"
            element={ <Privacy />}
          />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;