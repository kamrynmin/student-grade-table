import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {

  displayStudent() {
    if (this.props.grades.length === 0) {
      return (
        <tr>
          <th scope="row">No Grades Recorded</th>
        </tr>
      );
    } else if (this.props.grades.length > 0) {
      return this.props.grades.map(sgt => {
        return (
          <Grade key={sgt.id} name={sgt.name} course={sgt.course}
            grade={sgt.grade} deleteStudent={this.props.deleteStudent} id={sgt.id}/>
        );
      });
    }
  }

  render() {
    return (
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col-">Student Name</th>
            <th scope="col-">Course</th>
            <th scope="col-">Grade</th>
            <th scope="col-">Operations</th>
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
