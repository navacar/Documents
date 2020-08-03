import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import Contracts from './Components/Contracts/Contracts';
import Partners from './Components/Partners/Partners';
import FNS from './Components/FNS/FNS';
import Declaration from './Components/Declaration/Declaration';
import Footer from './Components/Fotter/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className="appContent">
        <Route path='/Contracts' render={() => <Contracts />} />
        <Route path='/Partners' render={() => <Partners />} />
        <Route path='/FNS' render={() => <FNS />} />
        <Route path='/Declarations' render={() => <Declaration />} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
