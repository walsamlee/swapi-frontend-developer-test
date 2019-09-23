// react
import React from 'react';
// component
import Card from '../Card/';
// style
import './homepage.scss';

const Homepage = () => (
  <div className="dashboard">
    {console.log('this', window.location.search)}
    <div className="dashboard__sect-1">
      <Card
        type="homepage"
        url="/people?page=1"
        title="People"
        image="https://res.cloudinary.com/walsam/image/upload/v1569147145/character-3.jpg"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Card
        type="homepage"
        url="/"
        title="Planets"
        image="https://res.cloudinary.com/walsam/image/upload/v1569147185/planet-2.jpg"
        summary="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
    <div className="dashboard__sect-1">
      <Card
        type="homepage"
        url="/"
        title="Spaceships"
        image="https://res.cloudinary.com/walsam/image/upload/v1569147163/starship-3.jpg"
        summary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
      />
    </div>
  </div>
);

export default Homepage;
