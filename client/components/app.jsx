import React from 'react';
import PageTitle from './page-title';
import GradeTable from './grade-table';
import GradeForm from './form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.addStudent = this.addStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  componentDidMount() {
    this.getAllStudents();
  }

  getAllStudents() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => {
        this.setState({ grades: data });
      });
  }

  addStudent(newStudent) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStudent)
    })
      .then(response => response.json)
      .then(data => {
        const duplicateData = [...this.state.grades];
        duplicateData.push(data);
        this.setState(state => ({ grades: duplicateData }));
      })
      .then(() => {
        this.getAllStudents();
      })
      .catch(err => {
        this.setState({
          grades: [`the error is ${err}`]
        });
      });
  }

  deleteStudent(studentId) {
    fetch(`/api/grades/${studentId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        const grades = this.state.grades.filter(grade => grade.id !== studentId);
        this.setState({ grades });
      })
      .catch(err => console.error(err));
  }

  getAverageGrade() {
    let sum = 0;
    if (this.state.grades.length > 0) {
      this.state.grades.map(user => {
        sum += parseInt(user.grade);
      });
      const beforePercentage = sum / this.state.grades.length;
      return beforePercentage.toFixed(2) + '%';
    } else {
      return 'N/A';
    }
  }

  render() {
    const average = this.getAverageGrade();
    return (
      <div className="container-fluid p-3">
        <PageTitle average={average} />
        <div
          className="row">
          <div className="col-lg-8 col-sm-12">
            <GradeTable
              grades={this.state.grades}
              deleteStudent={this.deleteStudent} />
          </div>
          <div className="col-lg-4 col-sm-12">
            <GradeForm
              addStudent={this.addStudent} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
