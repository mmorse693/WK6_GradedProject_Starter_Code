import { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { FaStackOverflow, FaUser, FaSignOutAlt, FaMoon, FaSun, FaBars, FaHome, FaTags, FaTimes } from 'react-icons/fa';

import './Header.css';

const Header = ({ isDarkMode, toggleTheme }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isAuthenticated = false; // Authentication disabled

  const handleCloseMobileMenu = () => setShowMobileMenu(false);
  const handleShowMobileMenu = () => setShowMobileMenu(true);

  const handleLogin = () => {
    alert('Login clicked');
  }

  const handleSignup = () => {
    alert('Sign up clicked');
  }

  const handleLogout = () => {
    alert('Logout clicked');
  }

  return (
    <header className="header">
      <div className="header-left">
        <Button 
          variant="link" 
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="d-md-none text-white p-0 me-2"
          style={{ border: 'none', fontSize: '1.25rem' }}
        >
          <FaBars />
        </Button>
        <h1 style={{ cursor: 'pointer' }}>
          <FaStackOverflow className="logo-icon" />
          DevAnswers
        </h1>
      </div>
      
      <div className="header-right">
        <Button 
          variant="outline-light" 
          onClick={toggleTheme}
          className="me-2"
          style={{ borderRadius: '8px' }}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </Button>
        {isAuthenticated ? (
          <>
            <Button 
              variant="link" 
              href="#"
              className="text-white me-3 d-none d-md-inline"
              style={{ 
                textDecoration: 'none',
                border: 'none',
                background: 'none',
                cursor: 'pointer'
              }}
            >
              <FaUser className="me-2" />
              User
            </Button>
            <Button variant="light" onClick={handleLogout}>
              <FaSignOutAlt className="me-2 d-none d-sm-inline" />
              <span className="d-none d-sm-inline">Logout</span>
              <FaSignOutAlt className="d-sm-none" />
            </Button>
          </>
        ) : (
          <>
            <Button variant="light" onClick={handleLogin}>
              <span className="d-none d-sm-inline">Login</span>
              <FaUser className="d-sm-none" />
            </Button>
            <Button variant="outline-light" onClick={handleSignup}>
              <span className="d-none d-sm-inline">Sign Up</span>
              <span className="d-sm-none">+</span>
            </Button>
          </>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {showMobileMenu && (
        <div className="mobile-menu-overlay" onClick={handleCloseMobileMenu}>
          <nav
            className="mobile-menu-panel"
            style={{ backgroundColor: 'var(--sidebar-bg)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-menu-header" style={{ borderBottom: '1px solid var(--border-color)', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-color)', fontWeight: 700 }}>
                <FaStackOverflow className="me-2" style={{ color: 'var(--primary-color)' }} />
                DevAnswers
              </span>
              <Button variant="link" onClick={handleCloseMobileMenu} style={{ color: 'var(--text-color)', border: 'none', padding: 0 }}>
                <FaTimes />
              </Button>
            </div>
            <div style={{ padding: '1rem' }}>
              <Nav className="flex-column">
                <Nav.Link
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleCloseMobileMenu(); }}
                  style={{
                    padding: '0.875rem 1rem',
                    color: 'var(--text-color)',
                    borderRadius: '8px',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}
                >
                  <FaHome style={{ fontSize: '1.25rem' }} />
                  <span style={{ fontWeight: 500 }}>Home</span>
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleCloseMobileMenu(); }}
                  style={{
                    padding: '0.875rem 1rem',
                    color: 'var(--text-color)',
                    borderRadius: '8px',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}
                >
                  <FaTags style={{ fontSize: '1.25rem' }} />
                  <span style={{ fontWeight: 500 }}>Tags</span>
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleCloseMobileMenu(); }}
                  style={{
                    padding: '0.875rem 1rem',
                    color: 'var(--text-color)',
                    borderRadius: '8px',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}
                >
                  <FaUser style={{ fontSize: '1.25rem' }} />
                  <span style={{ fontWeight: 500 }}>Profile</span>
                </Nav.Link>
              </Nav>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;