import React from "react";
import "./TermsAndConditions.css";

function TermsAndConditions() {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <p>Home • Terms & Conditions</p>
        <h1>Terms & Conditions</h1>
      </div>

      <div className="policy-container">
        <section>
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using Tasty Daily, you agree to comply with and
            be bound by these terms and conditions.
          </p>
        </section>

        <section>
          <h2>Use of Website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a
            manner that does not infringe the rights of others.
          </p>
        </section>

        <section>
          <h2>Account Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account information and for all activities under your account.
          </p>
        </section>

        <section>
          <h2>Orders & Payments</h2>
          <p>
            All orders placed are subject to availability and confirmation.
            Prices and availability may change without prior notice.
          </p>
        </section>

        <section>
          <h2>Cancellation & Refund</h2>
          <p>
            Cancellation and refund requests are governed by our Refund
            Policy available on the website.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            Tasty Daily shall not be liable for any indirect or incidental
            damages arising from the use of this website.
          </p>
        </section>

        <section>
          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time without
            prior notice. Continued use constitutes acceptance.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsAndConditions;
