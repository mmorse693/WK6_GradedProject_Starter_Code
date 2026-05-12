import './Footer.css';

// TODO: Implement the Footer component displaying copyright info.
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;