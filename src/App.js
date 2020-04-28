/* eslint-disable prefer-rest-params */
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import gsap from 'gsap';
import './styles/App.scss';
// components import
import Header from './components/header';
import Navigation from './components/navigation';


// Pages components
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Work from './pages/work';


// routes
const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about-me', name: 'About me', Component: About },
  { path: '/work', name: 'Work', Component: Work },
  { path: '/contact', name: 'Contact', Component: Contact },

];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  // Prevents flashing before the Dom loads
  gsap.to('body', 0, { css: { visibility: 'visible' } });

  const [Dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const vh = Dimensions.height * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);


    // eslint-disable-next-line prefer-arrow-callback
    const debouncedHandleResize = debounce(function HandleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (

    // eslint-disable-next-line react/jsx-filename-extension
    <>

      <Header dimensions={Dimensions} />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
