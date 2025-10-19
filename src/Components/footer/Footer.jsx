import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (

    <footer className="footer">
        <hr />
      <div className="footerText">
        <p>© {year} Edusity. All rights reserved.</p>
        <div className="terms">
          <a href="/terms">Terms of service</a>
          <a href="/privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;