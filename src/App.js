import React from 'react'
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import './style.css';
import './media.css';
function App() {
  return (
    <div id='mainContainer'>
      <div className='flex'>
      <Header/>
      <Login/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
