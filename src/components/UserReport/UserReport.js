import React, { useState } from 'react';

/* 
  UserReport Component:
  Purpose: 
  - Allows users to report inappropriate content or user behavior.
  
  Common Functions to Add:
  - submitReport() -> Sends a user report to admins for review.
  - fetchReportReasons() -> Fetches reasons or categories of reports (e.g., spam, harassment, etc.).

  Suggestions:
  - Include multiple categories for reporting (e.g., harassment, spam, inappropriate content).
  - Ensure that reports are confidential and securely stored.
*/

const UserReport = () => {
  const [reportReason, setReportReason] = useState('');
  const [reportDescription, setReportDescription] = useState('');

  const handleSubmit = () => {
    console.log('Report Submitted:', reportReason, reportDescription);
    // Implement logic to submit the report to Firebase or a database
  };

  return (
    <div className='user-report-container'>
      <h2>Report a User or Content</h2>

      <label>Reason for Report</label>
      <select value={reportReason} onChange={(e) => setReportReason(e.target.value)}>
        <option value='harassment'>Harassment</option>
        <option value='spam'>Spam</option>
        <option value='inappropriate_content'>Inappropriate Content</option>
      </select>

      <label>Description</label>
      <textarea 
        value={reportDescription} 
        onChange={(e) => setReportDescription(e.target.value)} 
        placeholder='Describe the issue in detail...'
      />

      <button onClick={handleSubmit}>Submit Report</button>
    </div>
  );
};

export default UserReport;
