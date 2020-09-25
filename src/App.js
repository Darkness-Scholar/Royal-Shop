import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Comps/Footer/Footer';
import Header from './Comps/Header/Header';
import ReactRouter from './ReactRouter';


function App() {
  return (
    <Router>
      < >
        <Header />
        
        <ReactRouter />

        <Footer />
      </>
    </Router>
  );
}

export default App;
