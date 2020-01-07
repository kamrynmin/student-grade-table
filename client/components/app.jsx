import React from 'react';
import PageTitle from './page-title';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
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

  getAverageGrade() {
    let sum = 0;
    this.state.grades.map(user => {
      sum += user.grade;
    });
    return Math.round(sum / this.state.grades.length);
  }

  render() {
    const average = this.getAverageGrade();
    return (
      <div className="col pt-5">
        <PageTitle average = {average} text = "React SGT" />
        <GradeTable grades = {this.state.grades}/>
      </div>
    );
  }
}

export default App;
