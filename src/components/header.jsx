/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import gsap from 'gsap';
import { ReactComponent as UpArrow } from '../assets/up-arrow-circle.svg';

const tl = gsap.timeline();


// eslint-disable-next-line react/prop-types
const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });

    if (menuState.menuOpened === true) {
      // run open menu animation

      tl.to('body', {
        duration: 0.01,
        css: {
          overflow: 'hidden',
        },
      })

        .to('.App', {
          duration: 1,
          // eslint-disable-next-line react/prop-types
          y: dimensions.width < 654 ? '100vh' : dimensions.height / 2,
          ease: 'expo.inOut',
        }).to('.hamburger-menu span', {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: '50% 0%',
          ease: 'expo.inOut',
        })
        .to('#path_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to('#path_2', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to('#Line_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to('#circle', {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to('.hamburger-menu-closed', {
          duration: 0.6,
          delay: -0.8,
          css: {
            display: 'block',
          },
        });
    } else {
      // run close menu animation
      tl.to('.App', {
        duration: 1,
        y: 0,
        ease: 'expo.inOut',
      }).to('#circle', {
        duration: 0.6,
        delay: -0.6,
        css: {
          strokeDashoffset: -193,
          strokeDasharray: 227,
        },
      }).to('#path_1', {
        duration: 0.4,
        delay: -0.6,
        css: {
          strokeDashoffset: 10,
          strokeDasharray: 10,
        },
      }).to('#path_2', {
        duration: 0.6,
        delay: -0.6,
        css: {
          strokeDashoffset: 10,
          strokeDasharray: 10,
        },
      })
        .to('#Line_1', {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to('.hamburger-menu span', {
          duration: 0.6,
          delay: -0.6,
          scaleX: 1,
          transformOrigin: '50% 0%',
          ease: 'expo.inOut',
        })
        .to('.hamburger-menu-closed', {
          css: {
            display: 'none',
          },
        })
        .to('body', {
          css: {
            overflow: 'auto',
          },
        });
    }
  }, [menuState.menuOpened]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/">
              BEMZ.
            </NavLink>
          </div>

          <div className="nav-toggle">

            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span />
              <span />
            </div>

            <div
            // eslint-disable-next-line react/jsx-indent-props
            onClick={() => setMenuState({ menuOpened: false })}
              className="hamburger-menu-closed"
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default withRouter(Header);
