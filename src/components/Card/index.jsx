import React from 'react';
import { Link } from 'react-router-dom'

import './card.scss';

const Card = (props) => {
  if (props.type === 'homepage') {
    return (
      <Link className="homepage" to={props.url}>
        <div>
          <h3 className="homepage__title">{props.title}</h3>
          <div className="homepage__picture">
            <img
              className="homepage__picture--img"
              src={props.image}
              alt="card"
            />
          </div>
          <div>
            <p className="homepage__summary">{props.summary}</p>
          </div>
        </div>
      </Link>
    );
  }
  if (props.type === 'people') {
    const searched = props.api.split('/');
    const url = `${props.url}/${searched[5]}`;

    return (
      <Link className="people" to={url}>
        <div className="people__card">
          <div className="people__card--picture">
            <img
              className="people__card--picture__img"
              src={props.image}
              alt="card"
            />
          </div>
          <div className="people__card--text">
            <h3 className="people__card--text__title">{props.title}</h3>
            <div className="people__card--text__summary">
              <p>{props.dob}</p>
              <p>{props.gender}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
};

export default Card;
