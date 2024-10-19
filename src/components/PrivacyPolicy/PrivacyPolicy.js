import React from 'react';

/* 
  PrivacyPolicy Component:
  Displays the platform's privacy policy regarding user data and security.
*/
const PrivacyPolicy = () => {
  return (
    <div className='privacy-policy-container'>
      <h2>Privacy Policy</h2>
      <p>We respect your privacy and are committed to protecting your personal information.</p>
      <h3>1. Data Collection</h3>
      <p>We collect data such as your name, email, and usage information to enhance your experience on the platform.</p>
      <h3>2. Data Sharing</h3>
      <p>Your data will not be shared with any third parties without your consent, except as required by law.</p>
      <h3>3. Data Security</h3>
      <p>We implement security measures to protect your data from unauthorized access.</p>
      <h3>4. Changes to Policy</h3>
      <p>We may update this privacy policy from time to time. Any changes will be communicated to users.</p>
    </div>
  );
};

export default PrivacyPolicy;
