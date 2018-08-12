import React from 'react';

import CarCard from 'components/CarCard';
import FilterBar from 'components/FilterBar';

const cards = [
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/13255311/1056070313.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/18877910/1054729045.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/19746068/thumb/1054745774.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/19843851/thumb/1056708489.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/13255311/1056070313.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/18877910/1054729045.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/19746068/thumb/1054745774.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/19843851/thumb/1056708489.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/13255311/1056070313.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/18877910/1054729045.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/19746068/thumb/1054745774.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/19843851/thumb/1056708489.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/13255311/1056070313.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/18877910/1054729045.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/19746068/thumb/1054745774.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/19843851/thumb/1056708489.jpg",
  },
];

const Browse = () => {
  return (
    <div>
      <FilterBar />
      <div className="columns is-gapless is-multiline">
        {cards.map(card => (
          <div className="column is-one-fifth-desktop is-one-third-tablet is-half-mobile">
            <CarCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Browse;
