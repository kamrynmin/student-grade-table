import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {

  displayStudent() {
    if (this.props.grades.length > 0) {
      return this.props.grades.map(sgt => {
        return (
          <Grade key={sgt.id} name={sgt.name} course={sgt.course}
            grade={sgt.grade} />
        );
      });
    }
  }

  render() {
    return (
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {this.displayStudent()}
        </tbody>
      </table>

    );
  }
}
export default GradeTable;
