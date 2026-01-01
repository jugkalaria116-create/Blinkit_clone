import React from "react";
import "./DeliveryInfo.css";

function DeliveryInfo() {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <p>Home • Delivery Info</p>
        <h1>Delivery Information</h1>
      </div>

      <div className="policy-container">
        <section>
          <h2>Delivery Timings</h2>
          <p>
            Orders are delivered the next day between 10:00 AM and 08:00 PM.
            Delivery time may vary depending on location.
          </p>
        </section>

        <section>
          <h2>Delivery Locations</h2>
          <p>
            We currently deliver to selected cities and surrounding areas.
            Availability depends on your PIN code.
          </p>
        </section>

        <section>
          <h2>Order Processing</h2>
          <p>
            Orders placed before 9:00 PM are processed the same day.
            Orders placed after will be processed the next working day.
          </p>
        </section>

        <section>
          <h2>Delivery Charges</h2>
          <p>
            Delivery charges vary based on order value and location.
            Free delivery is available on selected orders.
          </p>
        </section>

        <section>
          <h2>Failed Delivery</h2>
          <p>
            If delivery fails due to incorrect address or unavailability,
            our team will contact you to reschedule.
          </p>
        </section>
      </div>
    </div>
  );
}

export default DeliveryInfo;
