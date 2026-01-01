import React from "react";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
    return (
        <div className="policy-page">
            <div className="policy-header">
                <p>Home • Privacy Policy</p>
                <h1>Privacy Policy</h1>
            </div>

            <div className="policy-container">
                <section>
                    <h2>Information We Collect</h2>
                    <p>
                        We collect personal information such as your name, email address,
                        phone number, and delivery address when you place an order or
                        contact us.
                    </p>
                </section>

                <section>
                    <h2>How We Use Your Information</h2>
                    <p>
                        Your information is used to process orders, provide customer
                        support, improve our services, and communicate important updates.
                    </p>
                </section>

                <section>
                    <h2>Data Protection</h2>
                    <p>
                        We implement appropriate security measures to protect your personal
                        data from unauthorized access or misuse.
                    </p>
                </section>

                <section>
                    <h2>Sharing of Information</h2>
                    <p>
                        We do not sell or share your personal data with third parties,
                        except when required to complete your order or comply with law.
                    </p>
                </section>

                <section>
                    <h2>Your Rights</h2>
                    <p>
                        You have the right to access, update, or request deletion of your
                        personal information at any time.
                    </p>
                </section>

                <section>
                    <h2>Contact Us</h2>
                    <p>
                        For privacy-related concerns, contact us at
                        <b> support@tastydaily.com</b>.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
