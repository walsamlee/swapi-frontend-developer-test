import React from 'react';
import { Link } from 'react-router-dom'

import './card.scss';

const Card = (props) => (
  <Link className="card" to="/">
    <div>
      <h3 className="card__title">{props.title}</h3>
      <div className="card__picture">
        <img
          className="card__picture--img"
          src={props.image}
          alt="card"
        />
      </div>
      <p className="card__summary">{props.summary}</p>
    </div>
  </Link>
);

export default Card;
