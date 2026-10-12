

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Khurshiya Store</h1>
          <p>
            Discover beautiful products for women at affordable prices.
            Shop your favorite items today!
          </p>
          <button onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })}>
            Shop Now
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800"
            alt="Women's fashion collection"
          />
        </div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="category-container">
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400" alt="Women's clothing" />
            <h3>Clothing</h3>
          </div>

          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400" alt="Jewelry" />
            <h3>Jewelry</h3>
          </div>

          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400" alt="Women's bags" />
            <h3>Bags</h3>
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <h2>Why Shop With Us?</h2>
        <div className="product-info">
          <div>
            <h3>✨ Quality Products</h3>
            <p>Beautiful products selected with care.</p>
          </div>

          <div>
            <h3>💰 Affordable Prices</h3>
            <p>Enjoy shopping without spending too much.</p>
          </div>

          <div>
            <h3>💖 Customer Satisfaction</h3>
            <p>Your happiness is our priority.</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2026 Khurshiya Store | All Rights Reserved</p>
      </footer>
    </div>






  );
}

export default Home;