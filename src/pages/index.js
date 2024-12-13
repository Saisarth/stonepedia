// File: src/pages/index.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Hero.css";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Explore the World of Stones</h1>
          <button>Explore Now</button>
        </div>
      </section>
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>We are passionate about bringing high-quality stones to enthusiasts around the world.</p>
      </section>
      <section id="products" className="section">
  <h2>Featured Products</h2>
  <div className="products-grid">
    <div className="product-card">
      <img src="/images/marble.png" alt="marble" />
      <h3>marble</h3>
      <p>High-quality stone for landscaping.</p>
    </div>
    <div className="product-card">
      <img src="/images/onyx.png" alt="onyx" />
      <h3>Onyx</h3>
      <p>Premium stones for decoration.</p>
    </div>
    <div className="product-card">
      <img src="/images/granite.png" alt="granite" />
      <h3>granite</h3>
      <p>Stone for construction purposes.</p>
    </div>
  </div>
</section>

      <section id="testimonials" className="section testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial">"Stonepedia has the best selection of stones I've ever seen!"</div>
        <div className="testimonial">"I use their stones for all my landscaping projects. Highly recommended!"</div>
      </section>
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
