import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Requestform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    college: '',
    branch: '',
    subject: '',
    reason: '', // Added reason field
  });

  const [branches, setBranches] = useState({
    'College A': ['Computer Science', 'Electronics', 'Mechanical', 'Civil'],
    'College B': ['Information Technology', 'Electrical', 'Chemical'],
    // ... more colleges and branches
  });

  const [subjects, setSubjects] = useState({
    'Computer Science': ['Data Structures', 'Algorithms', 'Operating Systems', 'Database Management'],
    'Electronics': ['Analog Circuits', 'Digital Electronics', 'Microcontrollers'],
    'Mechanical': ['Thermodynamics', 'Fluid Mechanics', 'Manufacturing Processes'],
    'Civil': ['Structural Analysis', 'Geotechnical Engineering', 'Transportation Engineering'],
    'Information Technology': ['Web Development', 'Software Engineering', 'Networking'],
    'Electrical': ['Power Systems', 'Control Systems', 'Electrical Machines'],
    'Chemical': ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry'],
    // ... more branches and subjects
  });

  const [availableSubjects, setAvailableSubjects] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'branch') {
      setAvailableSubjects(subjects[value] || []);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with your submission logic
  };

  return (
    <Container className="bg-black text-white py-5">
      <h2 className="text-3xl font-bold mb-4 text-center">Revaluation Request Form</h2>
      <Form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border border-gray-700"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border border-gray-700"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="mobile">
            <Form.Label>Mobile:</Form.Label>
            <Form.Control
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border border-gray-700"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="college">
            <Form.Label>College:</Form.Label>
            <Form.Control
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border border-gray-700"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="branch">
          <Form.Label>Branch:</Form.Label>
          <Form.Select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white border border-gray-700"
          >
            <option value="">Select Branch</option>
            {Object.keys(branches).map((college) =>
              branches[college].map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))
            )}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="subject">
          <Form.Label>Subject:</Form.Label>
          <Form.Select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white border border-gray-700"
          >
            <option value="">Select Subject</option>
            {availableSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="reason">
          <Form.Label>Reason for Revaluation:</Form.Label>
          <Form.Control
            as="textarea" // Use textarea for multi-line input
            rows={3} // Adjust number of rows as needed
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white border border-gray-700"
          />
        </Form.Group>


        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit Request
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Requestform;






