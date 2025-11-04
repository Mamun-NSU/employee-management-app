import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";

function ShowEmployee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/employees")
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Employees List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Designation</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.first_name}</td>
              <td>{emp.last_name}</td>
              <td>{emp.designation}</td>
              <td>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ShowEmployee;
