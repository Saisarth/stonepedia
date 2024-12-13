import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Stonepedia</div>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}