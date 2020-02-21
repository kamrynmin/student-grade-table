import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.clearForm = this.clearForm.bind(this);

  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleCourseChange(event) {
    this.setState({ course: event.target.value });
  }

  handleGradeChange(event) {
    this.setState({ grade: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newStudent = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newStudent);
    this.setState(state => ({ name: '', course: '', grade: '' }));
  }

  clearForm() {
    this.setState(state => ({
      name: '',
      course: '',
      grade: ''
    }));
  }

  render() {
    return (
      <h6 className="container col-4 text-center"> Add Grade
        <div className="row">
          <div className="col-12-auto">
            <form onSubmit={this.handleSubmit}>
              <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Name</label>
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text fas fa-user"></div>
                </div>
                <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Student Name" value= {this.state.name} onChange={this.handleNameChange}></input>
              </div>
              <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Course</label>
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text far fa-list-alt"></div>
                </div>
                <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Student Course" value= {this.state.course} onChange={this.handleCourseChange}></input>
              </div>
              <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Grade</label>
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text fas fa-user-graduate"></div>
                </div>
                <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Student Grade" value= {this.state.grade} onChange={this.handleGradeChange}></input>
              </div>
              <button onSubmit={this.handleSubmit} type="submit" className="btn btn-success">Add</button>
              <button onClick={this.clearForm} type="button" className="btn btn-secondary">Cancel</button>

            </form>
          </div>
        </div>
      </h6>

    );
  }
}

export default GradeForm;
