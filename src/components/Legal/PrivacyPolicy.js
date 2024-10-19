import React from 'react';

/* 
  PrivacyPolicy Component:
  Purpose: 
  - Displays the platform's privacy policy and explains how user data is handled.
  
  Suggestions:
  - Include sections on data collection, user rights, and contact information for privacy inquiries.
  - Ensure the privacy policy is accessible and easy to understand.
*/

const PrivacyPolicy = () => {
  return (
    <div className='privacy-policy-container'>
      <h2>Privacy Policy</h2>
      <p>This is where you can outline the privacy policy of your platform.</p>

      <h3>Data Collection</h3>
      <p>Explain what kind of data is collected from users and why.</p>

      <h3>User Rights</h3>
      <p>Include information on users' rights regarding their data, such as access or deletion requests.</p>

      <h3>Contact Information</h3>
      <p>Provide details for how users can reach out if they have privacy-related questions or concerns.</p>
    </div>
  );
};

export default PrivacyPolicy;
