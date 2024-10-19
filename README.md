# DisabilityConnect - Social Media Platform

**Project Name**: DisabilityConnect  
**Description**: A social media platform aimed at connecting disabled individuals, families, service providers, and others. The platform includes features such as posts, messaging, blog-style news, user control panels, analytics, and more. It is designed to promote communication and resource-sharing, while ensuring privacy and security for all users.

---

## Table of Contents:
- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Goals](#goals)
- [To-Do List](#to-do-list)
- [Completed List](#completed-list)
- [How to Contribute](#how-to-contribute)
- [File-Specific Details](#file-specific-details)
- [Important Functions](#important-functions)

---

## Project Overview:

This project aims to create a full-featured social media platform specifically designed to meet the needs of disabled individuals, their families, and service providers. The platform will allow for creating and managing user profiles, posting content, messaging, scheduling events, and more.

The focus is on creating a modular, maintainable, and scalable platform, allowing easy extension and updates without large-scale refactoring. The separation of components, animations, and styles ensures ease of maintenance.

---

## Folder Structure:

\\\
src/
+-- components/
�   +-- Navigation/
�   �   +-- Navigation.js
�   �   +-- NavButton.js
�   �   +-- Navigation.css
�   �   +-- Navigation.animations.css
�   +-- Login/
�   �   +-- Login.js
�   �   +-- Login.css
�   �   +-- Login.animations.css
�   +-- Register/
�   �   +-- Register.js
�   �   +-- Register.css
�   �   +-- Register.animations.css
�   +-- UserProfile/
�   �   +-- UserProfile.js
�   �   +-- UserProfile.css
�   �   +-- UserProfile.animations.css
�   +-- Calendar/
�   �   +-- Calendar.js
�   �   +-- Calendar.css
�   �   +-- Calendar.animations.css
�   +-- Messages/
�   �   +-- Messages.js
�   �   +-- Messages.css
�   �   +-- Messages.animations.css
�   +-- Friends/
�   �   +-- Friends.js
�   �   +-- Friends.css
�   �   +-- Friends.animations.css
�   +-- Posts/
�   �   +-- Posts.js
�   �   +-- PostItem.js
�   �   +-- Posts.css
�   �   +-- Posts.animations.css
�   +-- Blog/
�   �   +-- Blog.js
�   �   +-- BlogPost.js
�   �   +-- Blog.css
�   �   +-- Blog.animations.css
�   +-- Admin/
�   �   +-- AdminDashboard.js
�   �   +-- AdminNews.js
�   �   +-- Admin.css
�   �   +-- Admin.animations.css
�   +-- ControlPanel/
�   �   +-- ControlPanel.js
�   �   +-- ControlPanel.css
�   �   +-- ControlPanel.animations.css
�   +-- Analytics/
�   �   +-- Analytics.js
�   �   +-- Analytics.css
�   �   +-- Analytics.animations.css
+-- firebase/
�   +-- auth.js
�   +-- firebaseConfig.js
+-- animations/
�   +-- global.animations.css
+-- assets/
�   +-- images/
�   +-- icons/
�   +-- svg/
+-- styles/
�   +-- global.css
�   +-- theme.css
+-- utils/
�   +-- helpers.js
+-- App.js
+-- App.css
+-- index.js
+-- README.md
\\\

---

## Goals:

1. **User-Friendly Platform**: Build an inclusive social media platform for disabled individuals and their families.
2. **Component-Based Architecture**: Modularize components (like navigation, posts, messaging, etc.) for easy scalability.
3. **Flexible Styling**: Keep animations and styles separated per component to minimize the need for changes across the project.
4. **Efficient Development**: Ensure that new features can be added with minimal refactoring by keeping logic, styles, and animations in separate files.
5. **Admin Features**: Include blog-style news, user analytics, and control panels for better platform management.
6. **Privacy and Security**: Implement Firebase authentication and Firestore for secure user data management.
7. **Long-Term Extensibility**: Ensure that the platform can evolve with new features without overhauling existing functionality.

---

## To-Do List:

1. **Posts**:
   - [ ] Build Posts.js to display user posts.
   - [ ] Implement PostItem.js for individual posts.
   - [ ] Connect posts to Firebase for persistence.
   - [ ] Add user-specific post feeds.
   
2. **Messages**:
   - [ ] Implement messaging functionality using Firebase's real-time database or Firestore.
   - [ ] Create user-specific messaging threads.

3. **Blog**:
   - [ ] Build Blog.js for admin to post news or updates.
   - [ ] Develop BlogPost.js for displaying individual blog entries.
   
4. **Admin Panel**:
   - [ ] Create AdminDashboard.js to manage users, posts, and reports.
   - [ ] Develop admin blog news posting (AdminNews.js).
   
5. **Control Panel**:
   - [ ] Implement user settings and privacy management (ControlPanel.js).
   
6. **Analytics**:
   - [ ] Create Analytics.js to provide platform insights (e.g., post engagement, user activity).

7. **User Profiles**:
   - [ ] Extend UserProfile.js to allow users to edit their information, upload profile pictures, etc.

8. **Animations**:
   - [ ] Implement custom animations for navigation, posts, and more.

---

## Completed List:

1. **Project Setup**:
   - [x] Initial folder structure.
   - [x] Firebase authentication setup.
   - [x] User registration and login functionality.
   - [x] User profile base implementation.
   
2. **Styling and Animations**:
   - [x] Global styles applied (global.css).
   - [x] Separated component-specific animations.

3. **Navigation**:
   - [x] Created Navigation.js and NavButton.js.
   - [x] Applied basic styling and animation for navigation.

4. **Global Configuration**:
   - [x] Added theme and global styling files.
   - [x] Connected Firebase for authentication and Firestore.

---

## How to Contribute:

1. **Cloning the Repo**:
   - Clone the repository:
     \\\
     git clone https://github.com/username/DisabilityConnect.git
     \\\

2. **Setting Up Firebase**:
   - Ensure Firebase credentials are properly set up in irebaseConfig.js.
   - Add Firestore rules for user data security.
   
3. **Running the App**:
   - Install dependencies:
     \\\
     npm install
     \\\
   - Run the development server:
     \\\
     npm start
     \\\

4. **Adding New Features**:
   - For new features (like new components), follow the structure and ensure each component has its own logic, style, and animations.

---

## File-Specific Details:

### **App.js**:
The main application file that renders the overall structure of the app. Routes to different components (such as login, user profile, posts) are configured here.

### **Navigation.js**:
This component handles the top navigation bar and dynamically loads navigation buttons from the NavButton.js component.

### **firebaseConfig.js**:
Handles Firebase configuration (authentication, Firestore, etc.).

### **helpers.js**:
Contains utility functions (e.g., formatting functions, data processing logic) to be reused across multiple components.

---

## Important Functions:

- **egisterWithEmail()**: Located in uth.js. Handles user registration via Firebase Authentication and stores user data in Firestore.
- **loginWithEmail()**: Located in uth.js. Authenticates users via Firebase.
- **setUserProfile()**: Saves and updates user profile data (name, email, etc.) in Firestore.

---

