import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { Container } from 'react-bootstrap';

const BaseLayout = ({ children, isDarkMode, toggleTheme }) => {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-grow-1" style={{ marginTop: '60px', backgroundColor: 'var(--bg-primary)' }}>
        <Container fluid className="p-0" style={{ backgroundColor: 'var(--bg-primary)' }}>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default BaseLayout;