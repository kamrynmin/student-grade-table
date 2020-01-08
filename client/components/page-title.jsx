import React from 'react';

function PageTitle(props) {
  return (
    <h1 className="header-row">
      <span className="mb-4 col-1">{props.text}</span>
      <span className="mb-4 col-lg-12">Average Grade <span className="badge badge-secondary"> {props.average} </span></span>
    </h1>
  );
}

export default PageTitle;
