import React from 'react';

function PageTitle(props) {
  return (
    <h1 className="header-row">
      <span className="mb-4">{props.text}</span>
      <h1 className="mb-4 pull-right">Average Grade <span className="badge badge-secondary"> {props.average} </span></h1>

    </h1>
  );
}

export default PageTitle;
