import React from 'react';

/* 
  HelpCenter Component:
  Purpose: 
  - Provides users with assistance on how to use the platform, including FAQs and tutorials.
  
  Suggestions:
  - Include common questions related to account management, privacy settings, and posting content.
  - Consider adding a search bar for users to quickly find relevant help articles.
*/

const HelpCenter = () => {
  const faqs = [
    { question: 'How do I reset my password?', answer: 'To reset your password, go to the settings page and click "Reset Password".' },
    { question: 'How do I report inappropriate content?', answer: 'To report inappropriate content, click the "Report" button next to the content in question.' }
  ];

  return (
    <div className='help-center-container'>
      <h2>Help Center</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpCenter;
