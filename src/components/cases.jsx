/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import React from 'react';
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';


const caseStudies = [
  {
    id: 1,
    subtitle: 'Curology',
    title: "A custom formula for your skin's unique needs",
    img: 'curology-min',
  },

  {
    id: 2,
    subtitle: 'Yourspace',
    title: 'Open space floor plans for your next venture',
    img: 'yourspace-min',

  },

  {
    id: 3,
    subtitle: 'Lumin',
    title: 'For your best look ever',
    img: 'lumin-min',

  },
];


const Cases = () => (
  <section className="cases">
    <div className="container-fluid">
      <div className="cases-navigation">
        <div className="cases-arrow prev disabled">
          <CasesPrev />
        </div>

        <div className="cases-arrow next">
          <CasesNext />
        </div>
      </div>
      <div className="row">
        {caseStudies.map((caseItem) => (
          <div className="case" key="caseItem.id">
            <div className="case-details">
              <span>
                {caseItem.subtitle}
                <h2>{caseItem.title}</h2>
              </span>

            </div>

            <div className="case-image">
              <img src={require(`../assets/${caseItem.img}.png`)} alt={caseItem.subtitle} />
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);


export default Cases;
