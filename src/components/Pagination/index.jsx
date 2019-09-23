// react
import React from 'react';
// style
import './pagination.scss';

const Pagination = () => {
  const host = window.location.host;
  return (
    <div className="pagination">
      <a className="pagination__link" href={`http://${host}/people?page=1`}>
        <i className="fas fa-angle-double-left"></i>
      </a>
      <a className="pagination__link" href={`http://${host}/people?page=1`}>
        1
      </a>
      <a className="pagination__link" href={`http://${host}/people?page=2`}>
        2
      </a>
      <a className="pagination__link" href={`http://${host}/people?page=3`}>
        3
      </a>
      <a className="pagination__link" href={`http://${host}/people?page=4`}>
        4
      </a>
      <a className="pagination__link" href={`http://${host}/people?page=5`}>
        5
      </a>
      <a className="pagination__link" href={`http://${host}/people?page=6`}>
        6
      </a>
      <a className="pagination__link" href={`http://${host}/people?page=7`}>
        7
      </a>
      <a className="pagination__link" href={`http://${host}/people?page=8`}>
        8
      </a>
      <a className="pagination__link" href={`http://${host}/people?page=9`}>
        9
      </a>
      <a className="pagination__link" href={`http://${host}/people?page=9`}>
        <i className="fas fa-angle-double-right"></i>
      </a>
    </div>
  )
};

export default Pagination;
