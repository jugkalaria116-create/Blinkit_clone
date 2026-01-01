import React from "react";
import "./ShippingPolicy.css";

function ShippingPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <p>Home • Shipping Policy</p>
        <h1>Shipping Policy</h1>
      </div>

      <div className="policy-container">
        <section>
          <h2>Delivery Areas</h2>
          <p>
            We currently deliver across major cities in India. Delivery
            availability depends on your location and product type.
          </p>
        </section>

        <section>
          <h2>Shipping Time</h2>
          <p>
            Orders are processed within 24 hours. Estimated delivery time
            is 2–5 business days depending on your location.
          </p>
        </section>

        <section>
          <h2>Shipping Charges</h2>
          <p>
            Shipping charges may vary based on order value and location.
            Free delivery is available on selected orders.
          </p>
        </section>

        <section>
          <h2>Order Tracking</h2>
          <p>
            Once your order is shipped, tracking details will be shared
            via email or SMS.
          </p>
        </section>

        <section>
          <h2>Delays</h2>
          <p>
            Delivery delays may occur due to weather conditions,
            holidays, or unforeseen circumstances.
          </p>
        </section>
      </div>
    </div>
  );
}

export default ShippingPolicy;
