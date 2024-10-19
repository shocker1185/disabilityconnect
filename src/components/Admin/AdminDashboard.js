import React from 'react';

/* 
  AdminDashboard Component:
  Main interface for administrators to manage users, posts, and reports.
*/
const AdminDashboard = () => {
  return (
    <div className='admin-dashboard'>
      <h2>Admin Dashboard</h2>
      <button>Manage Users</button>
      <button>View Reports</button>
      <button>Moderate Posts</button>
    </div>
  );
};

export default AdminDashboard;
