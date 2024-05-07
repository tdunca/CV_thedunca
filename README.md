# About the project:

This repository contains the source code for my CV website.<br />
The website is built using React, Redux and various styling techniques.<br />
It was a mandatory assignment for my ongoing education in FrontEnd-Developing.<br />
Note: Email-link and the Contact form are not functional.


### Requirements:

The requirements were as follows:

- Create an SPA that works as a CV och personal website using a JavaScript framework.
- Create reusable components to structure your website.
- Use props to send data between components to insure an effective data-flow.
- Use React roter to navigate.
- Implement useState-Hook in at least one component.
- Integrate Redux for global state management.
- Comment your code where necessary.
- Include a README-file that describes the project, how to run it and an overwiew of the functions.

### Usage

To run the application locally:

npm run start

## Overwiew of functions:

### Views

### Home

Contains an introduction

### About

The about page presents a grid layout showcasing skills, about me and work experience.

### Projects

The projects page features a carousel displaying various projects. Each project includes an image and a link to the GitHub repository.

### Contact

The contact page has a form for users to reach out. After submission, a message and social media icons are displayed.

### Components

### Button

A reusable button component. Used in the form and for the darkmode.

### Carousel

A carousel component using the `react-responsive-carousel` library.

### Form

A form component with dynamic rendering based on form submission status.

### Grid

A grid component using the `react-grid-layout` library.

### InputField

A reusable input field component. Used in the form component.

### React router

React router is implemented on the main.js page

### useState Hook

A useState-Hook is used in the form component.

### Redux

Redux is used for the dark/light theme.
