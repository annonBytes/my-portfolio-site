import React, { useEffect } from 'react';
import './styles/App.scss';
import Header from './components/header';
import Banner from './components/banner';

function App() {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
