import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteStudent(this.props.id);
  }

  render() {
    return (
      <tr scope="row">
        <td>{this.props.name}</td>
        <td>{this.props.course}</td>
        <td>{this.props.grade}</td>
        <td><button onClick={this.handleDelete} type="button" className="btn btn-danger justify-content-center">Delete</button></td>
      </tr>
    );
  }

}
export default Grade;
