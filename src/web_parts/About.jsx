




import "./About.css";

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Khurshiya Store</h1>
        <p>Your Style, Your Beauty, Your Happiness</p>
      </section>

      <section className="about-content">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
            alt="Women's shopping"
          />
        </div>

        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Welcome to Khurshiya Store! We are here to help women discover
            beautiful and affordable products. Our goal is to make online
            shopping easy, enjoyable, and convenient for everyone.
          </p>

          <p>
            From stylish clothing to beautiful accessories and bags,
            we aim to bring you products that match your style and needs.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide quality products at affordable prices
          and make every customer feel special.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>💗 Our Values</h3>
            <p>Quality, honesty, and care for every customer.</p>
          </div>

          <div className="about-card">
            <h3>✨ Our Vision</h3>
            <p>To make shopping simple, stylish, and enjoyable.</p>
          </div>

          <div className="about-card">
            <h3>🛍️ Our Promise</h3>
            <p>Beautiful products and a friendly shopping experience.</p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>© 2026 Khurshiya Store | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default About;

