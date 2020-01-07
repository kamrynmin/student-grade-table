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

  render() {
    return (
      <div className="col pt-5">
        <PageTitle text = "React SGT" />
        <GradeTable grades = {this.state.grades}/>
      </div>
    );
  }
}

export default App;
