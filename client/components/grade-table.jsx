import React from 'react';

function GradeTable(props) {
  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col-">Student Name</th>
          <th scope="col-">Course</th>
          <th scope="col-">Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>studentname</td>
          <td>studentcourse</td>
          <td>studentgrade</td>
        </tr>
      </tbody>
    </table>

  );
}

export default GradeTable;
