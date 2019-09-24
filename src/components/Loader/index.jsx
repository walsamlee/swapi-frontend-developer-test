// react
import React from 'react';
// third party
import Spinner from 'react-loader-spinner';
// style
import './loader.scss';

const Loader = () => (
  <div className="loader">
    <Spinner
      type="Circles"
      color="#000000"
      height={100}
      width={100}
    />
  </div>
);

export default Loader;
