Little Lemon Restaurant Web Application

A responsive, accessible React web application for Little Lemon—a Mediterranean restaurant located in Chicago. This project allows users to view weekly specials, read customer testimonials, and reserve tables online with dynamic time availability and form validation.

Features
Table Booking & Reservations: Interactive reservation form allowing users to select dates, dynamic available time slots, guest counts, and occasions.

Dynamic Time Slots: State reducer utilizing external API calls to retrieve real-time table availability based on the selected date.

Form Validation: Comprehensive client-side validation using HTML5 attributes and React state management to enforce correct inputs before submission.

Accessibility (a11y): Built with semantic HTML elements (<header>, <main>, <nav>, <footer>), explicit form labeling (htmlFor), and custom aria-* attributes.

Responsive UI: Custom modern design with center-constrained layouts optimized for mobile, tablet, and widescreen desktop views.

Automated Unit Testing: Test suite covering component rendering, API interactions, HTML5 input rules, and interactive state validation.

Tech Stack
- Frontend: React, JavaScript (ES6+)
- Styling: CSS3 (Flexbox & CSS Grid)
- Routing: React Router v6
- Testing: Jest, React Testing Library
- Icons & Assets: Custom SVG logos and media assets

Getting Started

Prerequisites
Ensure you have Node.js (v14 or higher) and npm installed on your machine.

Installation
Clone the repository with git clone.
Navigate to the project directory with cd.
Install the dependencies with npm install.
Start the local development server with npm start.

Running Unit Tests
You can run the test with npm test.
