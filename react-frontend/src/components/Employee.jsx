import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button, Table } from "react-bootstrap";

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    designation: "",
    phone_number: "",
    email: "",
    nationality: "",
    address: ""
  });

  // 1️⃣ Fetch employees from Laravel backend API
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/employees") // ✅ include /api
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  // 2️⃣ Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3️⃣ Handle form submit (POST)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/employees", formData) // ✅ include /api
      .then(res => {
        alert("Employee added!");
        setEmployees([...employees, res.data]); // update list
        setFormData({  // reset form
          first_name: "",
          last_name: "",
          designation: "",
          phone_number: "",
          email: "",
          nationality: "",
          address: ""
        });
      })
      .catch(err => {
        console.error(err);
        alert("Error adding employee. Check console.");
      });
  };

  return (
    <Container className="mt-4">
      <h2>Add Employee</h2>
      <Form onSubmit={handleSubmit}>
        {["first_name","last_name","designation","phone_number","email","nationality","address"].map((field) => (
          <Form.Group className="mb-2" key={field}>
            <Form.Label>{field.replace("_", " ").toUpperCase()}</Form.Label>
            <Form.Control
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required={["first_name","last_name","designation","email"].includes(field)}
              type={field === "email" ? "email" : "text"}
            />
          </Form.Group>
        ))}
        <Button type="submit" className="mt-2">Add Employee</Button>
      </Form>

      <h2 className="mt-4">Employees List</h2>
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

export default Employee;
