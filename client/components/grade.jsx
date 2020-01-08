import React from 'react';

class Grade extends React.Component {

  render() {
    return (
      <tr scope="row">
        <td>{this.props.name}</td>
        <td>{this.props.course}</td>
        <td>{this.props.grade}</td>
        <button type="button" className="btn btn-danger">Delete</button>
      </tr>
    );
  }
}

export default Grade;
