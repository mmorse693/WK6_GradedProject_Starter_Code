import { useState } from 'react';
import { Button, Container, Card, Form, Alert } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from 'react-icons/fa';
import './Auth.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');

    if (password !== confirmPassword) {
      setLocalError("Passwords do not match!");
      return;
    } 

    alert('Register functionality disabled for now');
  }

  return (
    <div className="auth-page">
      <Container>
        <div className="d-flex justify-content-center">
          <Card className="auth-card">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <h2 className="auth-title">Create Account</h2>
                <p className="auth-subtitle">Join DevAnswers community today</p>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="auth-label">
                    <FaUser className="me-2" />Full Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="auth-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="auth-label">
                    <FaEnvelope className="me-2" />Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="auth-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="auth-label">
                    <FaLock className="me-2" />Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    required
                    className="auth-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="auth-label">
                    <FaLock className="me-2" />Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    required
                    className="auth-input"
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 mb-3 auth-btn" 
                  disabled={loading}
                >
                  <FaUserPlus className="me-2" />
                  {loading ? 'Creating Account...' : 'Register'}
                </Button>

                { localError && 
                  <Alert variant="danger" className="rounded-3">
                    {localError}
                  </Alert> 
                }

                <div className="text-center mt-3">
                  <p className="auth-footer-text">
                    Already have an account?{' '}
                    <a href="#" className="auth-link">
                      Login
                    </a>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Register;