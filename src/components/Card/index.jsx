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
  if (props.type === 'planets') {
    const searched = props.api.split('/');
    const url = `${props.url}/${searched[5]}`;

    return (
      <Link className="planets" to={url}>
        <div className="planets__card">
          <div className="planets__card--picture">
            <img
              className="planets__card--picture__img"
              src={props.image}
              alt="card"
            />
          </div>
          <div className="planets__card--text">
            <h3 className="planets__card--text__title">{props.title}</h3>
            <div className="planets__card--text__summary">
              <p>{props.climate}</p>
              <p>{props.population}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (props.type === 'starships') {
    const searched = props.api.split('/');
    const url = `${props.url}/${searched[5]}`;

    return (
      <Link className="starships" to={url}>
        <div className="starships__card">
          <div className="starships__card--picture">
            <img
              className="starships__card--picture__img"
              src={props.image}
              alt="card"
            />
          </div>
          <div className="starships__card--text">
            <h3 className="starships__card--text__title">{props.title}</h3>
            <div className="starships__card--text__summary">
              <p>{props.model}</p>
              <p>{props.capacity}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
};

export default Card;
