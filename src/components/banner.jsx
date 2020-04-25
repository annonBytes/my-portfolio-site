import React from 'react';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';

const Banner = () => (
  <section className="main">
    <div className="container">
      <div className="row">
        <h2>
          <div className="line">
            <span>
              I'm a Digital Designer
            </span>
          </div>
          <div className="line">
            <span>
              based in Lagos, Nigeria.
            </span>
          </div>
        </h2>
        <div className="btn-row">
          <a href="/">
            Read about me
            <RightArrow />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
