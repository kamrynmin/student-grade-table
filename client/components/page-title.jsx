import React from 'react';

function PageTitle(props) {
  return (
    <div className="col">
      <span className="col-6 col-md-4" >{props.text}</span>
      <span className="mb-4 col-6 float-right ">Average Grade <span className="badge badge-secondary"> {props.average} </span></span>
    </div>
  );
}

export default PageTitle;
