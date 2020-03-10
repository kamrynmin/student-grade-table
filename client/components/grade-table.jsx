import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {

  displayGrades() {
    if (this.props.grades.length) {
      return (
        <tbody>
          {
            this.props.grades.map(grade =>
              <Grade
                {...grade}
                key={grade.id}
                deleteStudent={this.props.deleteStudent}
                updateStudent={this.props.updateStudent} />
            )
          }
        </tbody>
      );
    }
  }

  render() {
    const gradeToDisplay = !this.props.grades.length ? '' : 'd-none';
    return (
      <React.Fragment>
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Course</th>
              <th scope="col">Grade</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          {this.displayGrades()}
        </table>
        <div className={'container-fluid ' + gradeToDisplay}>
          <div className="row">
            <h4 className="h4 col d-none d-lg-block">
              No Grades to Display
            </h4>
            <h5 className="h5 col text-center d-lg-none pb-3">
              No Grades to Display
            </h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GradeTable;
