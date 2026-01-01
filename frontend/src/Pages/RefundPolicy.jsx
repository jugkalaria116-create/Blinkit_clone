import React from "react";
import "./RefundPolicy.css";

function RefundPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <p>Home • Refund Policy</p>
        <h1>Refund Policy</h1>
      </div>

      <div className="policy-container">
        <section>
          <h2>Eligibility for Refund</h2>
          <p>
            Refunds are applicable only if the product received is damaged,
            defective, or incorrect.
          </p>
        </section>

        <section>
          <h2>Refund Request Time</h2>
          <p>
            Customers must raise a refund request within 24 hours of delivery.
            Requests after this period may not be accepted.
          </p>
        </section>

        <section>
          <h2>Refund Process</h2>
          <p>
            Once your refund request is approved, the amount will be credited
            back to your original payment method within 5–7 business days.
          </p>
        </section>

        <section>
          <h2>Non-Refundable Items</h2>
          <p>
            Perishable items, opened packages, and items damaged due to
            customer mishandling are not eligible for refunds.
          </p>
        </section>

        <section>
          <h2>Contact for Refunds</h2>
          <p>
            For refund-related queries, please contact our support team at
            support@tastydaily.com.
          </p>
        </section>
      </div>
    </div>
  );
}

export default RefundPolicy;
