import React from 'react';

function PageTitle(props) {
  return (
    <header className="container-fluid pb-3">
      <div className="row">
        <h1 className="h1 col-6 text-left d-none d-lg-block">Student Grade Table</h1>
        <h1 className="h2 col-6 text-right d-none d-lg-block">Average Grade
          <span className="badge badge-secondary">{props.average}</span>
        </h1>
        <h2 className="h3 col-12 text-center d-lg-none">Student Grade Table</h2>
        <h3 className="h4 col-12 text-center d-lg-none">Average Grade
          <span className="badge badge-secondary">{props.average}</span>
        </h3>
      </div>
    </header>
  );
}

export default PageTitle;
