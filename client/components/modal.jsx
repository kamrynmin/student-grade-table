import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      student:
      {
        name: this.props.student.name,
        course: this.props.student.course,
        grade: this.props.student.grade
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  handleChange(event) {
    const value = event.target.value;
    const target = event.target.name;
    const copy = { ...this.state.student };
    copy[target] = value;
    this.setState(state => ({ student: copy }));
  }

  handleCancel() {
    const oldStudentState = {
      name: this.props.student.name,
      course: this.props.student.course,
      grade: this.props.student.grade
    };
    this.setState(state => ({ student: oldStudentState }));
  }

  handleUpdateSubmit(event) {
    event.preventDefault();
    const updateData = {
      name: this.state.student.name,
      course: this.state.student.course,
      grade: parseInt(this.state.student.grade)
    };
    const studentId = this.props.student.id;
    this.setState({ modalOpen: false });
    this.props.update(updateData, studentId);

  }

  render() {
    const style = this.state.modalOpen ? { display: 'block' } : { display: 'none' };
    return (
      <React.Fragment>
        <button type="button" className="btn btn-info btn-sm" onClick={this.openModal}>Edit</button>

        <div className="modal" style={style}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-dark">Update Info Below</h5>
                <button type="button" onClick={this.closeModal}>
                  &times;
                </button>
              </div>
              <form className="modal-body" onSubmit={this.handleUpdateSubmit}>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <i className="fas fa-user-graduate input-group-text"></i>
                  </div>
                  <input type="text" name="name" value={this.state.student.name} className="form-control" onChange={this.handleChange} />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <i className="fas fa-book input-group-text"></i>
                  </div>
                  <input type="text" name="course" value={this.state.student.course} className="form-control" onChange={this.handleChange} />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <i className="fas fa-file-excel input-group-text"></i>
                  </div>
                  <input type="text" name="grade" value={this.state.student.grade} className="form-control" onChange={this.handleChange} />
                </div>

                <div className="modal-footer">
                  <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
                  <button type="button" onClick={this.handleUpdateSubmit} className="btn btn-primary">Save changes</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
