// react
import React from 'react';
// style
import './pagination.scss';

const Pagination = (props) => {
  const host = window.location.host;
  const pages = Math.floor(props.pageCount / 10)
  const numberOfPages = [];

  for(let i = 0; i <= pages; i++) {
    numberOfPages.push(i + 1);
  }

  return (
    <div className="pagination">
      <a className="pagination__link" href={`http://${host}/${props.page}?page=1`}>
        <i className="fas fa-angle-double-left"></i>
      </a>
      {
        numberOfPages.map(page => {
          return (
            <a className="pagination__link" href={`http://${host}/${props.page}?page=${page}`}>
              {page}
            </a>
          )
        })
      }
      <a className="pagination__link" href={`http://${host}/${props.page}?page=${numberOfPages.length}`}>
        <i className="fas fa-angle-double-right"></i>
      </a>
    </div>
  )
};

export default Pagination;
