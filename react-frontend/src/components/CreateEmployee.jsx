import { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // for redirect
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function CreateEmployee() {
  const navigate = useNavigate(); // initialize navigate
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    designation: "",
    phone_number: "",
    email: "",
    nationality: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/employees", formData)
      .then(res => {
        toast.success("Employee created successfully!"); // success toast
        setFormData({
          first_name: "",
          last_name: "",
          designation: "",
          phone_number: "",
          email: "",
          nationality: "",
          address: ""
        });

        // Redirect after short delay (1.5s)
        setTimeout(() => {
          navigate("/show"); // redirect to Show Employee page
        }, 1500);
      })
      .catch(err => {
        console.error(err);
        if (err.response && err.response.data && err.response.data.message) {
          toast.error(`Error: ${err.response.data.message}`);
        } else {
          toast.error("Failed to create employee. Check console.");
        }
      });
  };

  return (
    <Container className="mt-4">
      <h2>Create Employee</h2>
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

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </Container>
  );
}

export default CreateEmployee;


