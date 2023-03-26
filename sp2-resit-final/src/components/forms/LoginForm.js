import { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { LOGIN_URL } from '../constants/api';
import {useHistory } from 'react-router-dom';

function LoginForm() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    password: '',    
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios.post(LOGIN_URL, formData)
      .then(response => {
        
        localStorage.setItem('authToken', response.data.token);
        
        setFormData({
          email: '',
          password: '',
        });
        history.push('/members');
      })
      .catch(error => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">Login</Button>
    </Form>
  );
}

export default LoginForm;