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

  handleAdd(newStudent) {
    const init = {
      method: 'POST',
      body: JSON.stringify(newStudent),
      headers: { 'Content-type': 'application/json' }
    };
    fetch('api/grades', init)
      .then(response => response.json())
      .then(data => {
        const dataCopy = [...this.state.studentData];
        dataCopy.push(data);
        this.setState(state => ({ studentData: dataCopy }));
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

  getAverageGrade() {
    let sum = 0;
    this.state.grades.map(user => {
      sum += parseInt(user.grade);
    });
    const beforePercentage = sum / this.state.grades.length;
    return beforePercentage.toFixed(2) + '%';
  }

  render() {
    const average = this.getAverageGrade();
    return (
      <React.Fragment>
        <div className="col pt-5">
          <PageTitle average = {average} text = "Student Grade Table" />
          <div className="main-container row mt-4">
            <GradeTable grades = {this.state.grades}/>
            <GradeForm onSubmit={this.addStudent}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
