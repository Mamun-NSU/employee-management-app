import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    designation: "",
    phone_number: "",
    email: "",
    nationality: "",
    address: ""
  });

  // Fetch employee by ID
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/employees/${id}`)
      .then((res) => {
        setFormData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load employee details.", {
          position: "top-center",
          autoClose: 2500,
        });
        setLoading(false);
      });
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle update submit
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.loading("Updating employee...", {
      toastId: "update-progress",
      position: "top-center",
    });

    axios
      .put(`http://127.0.0.1:8000/employees/${id}`, formData)
      .then(() => {
        toast.update("update-progress", {
          render: "Employee updated successfully!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });

        setTimeout(() => navigate("/"), 2000);
      })
    .catch((err) => {
  console.error(err);

  // Get dynamic error message from backend or default fallback
  const errorMessage =
    err.response?.data?.message ||
    err.response?.data?.error ||
    err.response?.data?.errors
      ? Object.values(err.response.data.errors).flat().join(", ")
      : "Unexpected error occurred while updating employee.";

  toast.update("update-progress", {
    render: `${errorMessage}`,
    type: "error",
    isLoading: false,
    autoClose: 3500,
  });
});
  
  };

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status" />
        <p>Loading employee data...</p>
        <ToastContainer />
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-3 text-center">Update Employee</h2>
      <Form onSubmit={handleSubmit}>
        {[
          "first_name",
          "last_name",
          "designation",
          "phone_number",
          "email",
          "nationality",
          "address",
        ].map((field) => (
          <Form.Group className="mb-3" key={field}>
            <Form.Label>{field.replace("_", " ").toUpperCase()}</Form.Label>
            <Form.Control
              name={field}
              value={formData[field] || ""}
              onChange={handleChange}
              required={["first_name", "last_name", "designation", "email"].includes(
                field
              )}
              type={field === "email" ? "email" : "text"}
            />
          </Form.Group>
        ))}
        <Button type="submit" variant="primary" className="w-100">
          Update Employee
        </Button>
      </Form>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />
    </Container>
  );
}

export default UpdateEmployee;
