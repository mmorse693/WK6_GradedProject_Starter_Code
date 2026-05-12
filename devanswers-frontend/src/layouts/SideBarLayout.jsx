import { Nav, Container, Row, Col } from "react-bootstrap";
import { FaHome, FaTags, FaUser } from "react-icons/fa";
import "./SideBarLayout.css";

const SideBarLayout = ({ children }) => {
  return (
    <Container fluid className="sidebar-container p-0">
      <Row className="sidebar-row g-0">
        {/* Left Sidebar — nav links inlined, no separate component needed */}
        <Col xs={12} md={3} lg={2} className="d-none d-md-block sidebar-left">
          <nav className="sidebar-nav">
            <Nav className="flex-column">
              <Nav.Link
                href="#"
                className="nav-item-custom"
                onClick={(e) => e.preventDefault()}
              >
                <FaHome className="nav-icon" />
                <span>Home</span>
              </Nav.Link>
              <Nav.Link
                href="#"
                className="nav-item-custom"
                onClick={(e) => e.preventDefault()}
              >
                <FaTags className="nav-icon" />
                <span>Tags</span>
              </Nav.Link>
              <Nav.Link
                href="#"
                className="nav-item-custom"
                onClick={(e) => e.preventDefault()}
              >
                <FaUser className="nav-icon" />
                <span>Profile</span>
              </Nav.Link>
            </Nav>
          </nav>
        </Col>
        {/* Main Content */}
        <Col xs={12} className="sidebar-main-content">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default SideBarLayout;
