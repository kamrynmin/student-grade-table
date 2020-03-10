import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete() {
    this.props.deleteStudent(this.props.id);
  }

  handleUpdate() {
    const { name, course, grade, id } = this.props;
    const student = { name, course, grade, id };
    this.props.updateStudent(student);
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.course}</td>
        <td>{this.props.grade}</td>
        <td>
          <button className="btn btn-danger mr-2"
            onClick={this.handleDelete}>Delete</button>
          <button className="btn btn-warning"
            onClick={this.handleUpdate}>Update</button>
        </td>
      </tr>
    );
  }
}

export default Grade;
