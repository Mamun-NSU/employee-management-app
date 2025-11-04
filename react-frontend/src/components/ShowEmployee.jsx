import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function ShowEmployee() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  // Fetch all employees
  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/employees");
      setEmployees(res.data);
    } catch (err) {
      console.error("Error fetching employees:", err);
      toast.error("Failed to load employees. Check console for details.", {
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Delete employee 
const handleDelete = async (id) => {
  // Show a toast-based confirmation
  const confirm = window.confirm("Are you sure you want to delete this employee?");
  if (!confirm) return;

  // Show a loading toast while deleting
  const toastId = toast.loading("Deleting employee...", {
    position: "top-right",
  });

  try {
    await axios.delete(`http://127.0.0.1:8000/employees/${id}`);

    // Remove deleted employee from state
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));

    // Update toast to success
    toast.update(toastId, {
      render: "Employee deleted successfully!",
      type: "success",
      isLoading: false,
      autoClose: 2000,
      position: "top-right",
    });
  } catch (err) {
    console.error("Delete failed:", err);

    // Get dynamic backend error message or fallback
    const errorMessage =
      err.response?.data?.message ||
      err.response?.data?.error ||
      "Failed to delete employee. Check console.";

    // Update toast to error
    toast.update(toastId, {
      render: errorMessage,
      type: "error",
      isLoading: false,
      autoClose: 3000,
      position: "top-right",
    });
  }
};


// const handleDelete = async (id) => {

//   if (!window.confirm("Are you sure you want to delete this employee?")) return;

//   try {
//     await axios.delete(`http://127.0.0.1:8000/employees/${id}`);

//     // remove deleted employee from state
//     setEmployees((prev) => prev.filter((emp) => emp.id !== id));

//     // show success toast
//     toast.success("Employee deleted successfully!", {
//       position: "top-right",
//       autoClose: 2000,
//     });
//   } catch (err) {
//     console.error("Delete failed:", err);

//     // show error toast
//     const errorMessage =
//       err.response?.data?.message ||
//       "❌ Failed to delete employee. Check console.";

//     toast.error(errorMessage, {
//       position: "top-right",
//       autoClose: 3000,
//     });
//   }
// };



  // Navigate to update page
  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <Container className="mt-4">
      <h2>Employee List</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.first_name}</td>
                <td>{emp.last_name}</td>
                <td>{emp.designation}</td>
                <td>{emp.email}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleEdit(emp.id)}
                    className="me-2"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No employees found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default ShowEmployee;
