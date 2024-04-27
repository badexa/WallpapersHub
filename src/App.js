import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Discover from './components/pages/Discover';
import Nature from './components/pages/Nature';
import Cars from './components/pages/Cars';
import Samurai from './components/pages/Samurai';
import Animals from './components/pages/Animals';
import Space from './components/pages/Space';
import Abstract from './components/pages/Abstract';
import { Provider } from 'react-redux';
import store from './redux/store'; 


function App() {
  return (
    <>
     <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/about' element={<About />} />
          <Route path='/nature' element={<Nature />} />
          <Route path='/abstract' element={<Abstract />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/space' element={<Space />} />
          <Route path='/samurai' element={<Samurai />} />
          <Route path='/animals' element={<Animals />} />
        </Routes>



      </Router>

      </Provider>
    </>
  );
}

export default App;


