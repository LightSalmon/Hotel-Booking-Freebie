import React from 'react';
import {initialHotels} from '../utils/initialHotels';
import Card from './Card';

function Packages(){
  return(
    <section className="packages">
      <h2 className="packages__title">OTHER PACKAGES</h2>
      <ul className="packages__cards">
        {initialHotels.map(card => <Card key={card.id} {...card}/>)}
      </ul>
    </section>
  )
}

export default Packages;
