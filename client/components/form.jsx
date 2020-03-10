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
    this.props.addStudent(newStudent);
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
      <form
        className="input-group"
        onSubmit={this.handleSubmit}>
        <div className="container-fluid">
          <div className="row">
            <h3 className="h3 col-12 text-left d-none d-lg-block mb-4">Add Grade</h3>
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <span className="fas fa-user-alt"></span>
            </span>
          </div>
          <input
            required
            type="text"
            placeholder="Name"
            value={this.state.name}
            className="form-control"
            onChange={this.handleNameChange} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <span className="fas fa-school"></span>
            </span>
          </div>
          <input
            required
            type="text"
            placeholder="Course"
            className="form-control"
            value={this.state.course}
            onChange={this.handleCourseChange} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <span className="fas fa-graduation-cap"></span>
            </span>
          </div>
          <input
            required
            type="number"
            placeholder="Grade"
            value={this.state.grade}
            className="form-control"
            onChange={this.handleGradeChange} />
        </div>
        <div className="input-group">
          <button
            type="submit"
            onSubmit={this.handleSubmit}
            className='btn btn-success'>
            Add
          </button>
          <button
            type="button"
            onClick={this.clearForm}
            className="btn btn-outline-secondary">
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
