import React from 'react';
import Card from '../Card/';

import './homepage.scss';

const Homepage = () => (
  <div className="dashboard">
    <div className="dashboard__sect-1">
      <Card
        title="Characters"
        image="https://res.cloudinary.com/walsam/image/upload/v1569147145/character-3.jpg"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Card
        title="Planets"
        image="https://res.cloudinary.com/walsam/image/upload/v1569147185/planet-2.jpg"
        summary="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
    <div className="dashboard__sect-1">
      <Card
        title="Spaceships"
        image="https://res.cloudinary.com/walsam/image/upload/v1569147163/starship-3.jpg"
        summary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
      />
    </div>
  </div>
);

export default Homepage;
