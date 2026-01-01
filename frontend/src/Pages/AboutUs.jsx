import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="about-header">
        <p className="breadcrumb">Home • About Us</p>
        <h1>About Us</h1>
      </div>

      {/* About Section */}
      <div className="about-container">
        <div className="about-text">
          <p>
            At <b>TastyDaily</b>, we are committed to providing you with the
            freshest and highest-quality groceries at affordable prices.
            Our mission is to simplify your shopping experience and save you time.
          </p>

          <p>
            TastyDaily is a leading online grocery store that brings convenience
            to your doorstep. We focus on fresh, nutritious food for a healthy
            lifestyle.
          </p>

          <div className="features">
            <div className="feature">
              <h4>✔ Quality</h4>
              <p>We source products from trusted suppliers.</p>
            </div>

            <div className="feature">
              <h4>✔ Customer Support</h4>
              <p>Friendly support available for your needs.</p>
            </div>

            <div className="feature">
              <h4>✔ Fast Delivery</h4>
              <p>Quick and reliable doorstep delivery.</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800"
            alt="Fresh vegetables"
          />
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog-section">
        <h2>Our Blog</h2>

        <div className="blog-cards">
          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500"
              alt="Family cooking"
            />
            <span>October 3, 2023</span>
            <h4>Family-Friendly Cooking</h4>
            <p>Quick and nutritious meals for busy families.</p>
          </div>

          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500"
              alt="Eco friendly food"
            />
            <span>October 3, 2023</span>
            <h4>Going Green</h4>
            <p>Eco-friendly shopping choices.</p>
          </div>

          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500"
              alt="Charcuterie board"
            />
            <span>October 3, 2023</span>
            <h4>DIY Charcuterie Boards</h4>
            <p>Create the perfect spread.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
