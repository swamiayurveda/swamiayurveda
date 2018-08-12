import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Plaimage" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          Toyata Camry
          $21,000
        </div>
      </div>
    </div>
  );
};


export default Card;
