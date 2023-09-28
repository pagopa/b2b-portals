# 1. Frontend Design Component Decision

Date: 2023-09-20

## Status

Proposed

## Context

We are tasked with designing the frontend of our web application. The primary goals in terms of UX, Scalability, Autonomy, Adaptability, Security, Privacy, and Simplicity are as follows:

- UX: Create an intuitive and user-friendly interface.
- Scalability: Ensure that the design can scale to accommodate future features.
- Autonomy: Allow for easy management and updates to the frontend.
- Adaptability: Make the frontend adaptable to different screen sizes and devices.
- Security: Implement secure design practices.
- Privacy: Respect user privacy through design choices.
- Simplicity: Keep the design clean and straightforward.

### Option 1: Tailwind CSS

Description:

Tailwind CSS is a utility-first CSS framework that offers a unique approach to styling web interfaces. It provides a set of pre-built, customizable classes that you can apply directly in your HTML markup to style elements. Tailwind CSS promotes rapid development and easy maintenance by abstracting complex CSS rules into simple, reusable classes.

Pros:

- Rapid Development: Tailwind CSS allows for quick prototyping and development with its extensive set of utility classes.

- Customization: You can easily customize the framework to match your project's design system.

- Responsive Design: Tailwind CSS includes responsive design utilities, making it straightforward to create adaptive layouts.

- Consistency: The use of predefined classes ensures a consistent design language across the project.

Cons:

- Learning Curve: Developers may initially find it challenging to learn all the available classes and their combinations.

- File Size: The generated CSS file can be larger due to the inclusion of all possible utility classes, which might impact load times if not optimized.

- Limited Creativity: Some designers may find Tailwind CSS limiting in terms of creative freedom compared to writing custom CSS.


Here an example made with the code:

const Home = () => {
  return (
    <main className="bg-blue-200 min-h-screen flex items-center justify-center hover:bg-blue-400">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-2xl font-semibold text-gray-800">Hello World!</p>
      </div>
    </main>
  );
};

export default Home;


In this example:

1) We import React and define a functional component named Home that's typed as a React functional component.

2) In the JSX code, we apply Tailwind CSS classes to style the elements. Here's what each class does:

bg-blue-200: Sets the background color to a light blue shade.
min-h-screen: Ensures that the main element takes up at least the full height of the screen.
flex items-center justify-center: Centers the content vertically and horizontally within the main element.
bg-white: Sets the background color of the inner div to white.
p-4: Adds padding to the inner div.
rounded-lg: Rounds the corners of the inner div.
shadow-md: Adds a subtle shadow to the inner div.
text-2xl font-semibold text-gray-800: Sets the text to 2xl size, makes it semi-bold, and changes the color to gray.

### Option 2: SCSS

Description:

SCSS (Sass) is a CSS pre-processor that extends the capabilities of CSS. It offers features like variables, nesting, mixins, and functions, allowing for more efficient and maintainable CSS code. SCSS is written in a syntax that is a superset of CSS, making it compatible with existing stylesheets.

Pros:

- Enhanced Productivity: SCSS's features like variables and mixins help reduce code duplication and simplify maintenance.

- Readability: SCSS code can be highly organized and readable, making it easier for developers to collaborate and maintain.

- Customizability: You have complete control over the styles, allowing for unique and creative designs.

- Integration: SCSS can be integrated into various build tools and frameworks, making it versatile.

Cons:

- Learning Curve: Developers unfamiliar with SCSS may need time to learn its syntax and features.

- Build Step: Compiling SCSS into CSS requires an additional build step in the development process.

- Overhead: Overusing features like nesting can result in bloated CSS files if not managed properly.


Here's an example using SCSS:

import './styles.scss';

const Home = () => {
  return (
    <main>
      <div className="hoverEffect">
        <p>Hello World!</p>
      </div>
    </main>
  );
};

export default Home;


/* styles.scss */
main {
  background-color: lightblue;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hoverEffect:hover {
  background-color: lightgray;
}

p {
  font-size: 2rem;
  font-weight: bold;
  color: gray;
}


### Option 3: Bootstrap (SUGGESTED)

Description:

Bootstrap is a popular CSS framework that provides a collection of CSS and JavaScript components for building responsive and visually appealing web interfaces. It offers a consistent design language and helps streamline the development process by reducing the need for custom styling.

Pros:

- Rapid Prototyping: Bootstrap's ready-made components and styles allow for quick prototyping and development.

- Responsiveness: Bootstrap is designed with mobile-first responsiveness in mind, ensuring compatibility with various devices.

- Extensive Documentation: Bootstrap offers comprehensive documentation and an active community, making it easy to find solutions and resources.

- Consistency: Bootstrap promotes a consistent design language, which can be useful for large teams and projects.

Cons:

- Design Limitations: Bootstrap's default styling may not align with a project's unique design requirements, requiring additional customization.

- File Size: Including the entire Bootstrap library can lead to larger file sizes, impacting load times.

- Customization Complexity: Customizing Bootstrap styles can be challenging, and extensive modifications may result in more complex CSS.


Here's an example using Bootstrap:

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <main className="bg-info min-vh-100 d-flex align-items-center justify-content-center">
      <div className="bg-light p-4 rounded shadow hover-effect">
        <p className="h2 font-weight-bold text-dark">Hello World!</p>
      </div>
    </main>
  );
};

export default Home;


### Option 4: Custom CSS

Description:

Developing a custom CSS framework from scratch provides complete control over the design, allowing for highly tailored and unique styles. Custom CSS allows for full creative freedom in shaping the frontend of the application.

Pros:

- Full Control: Custom CSS offers unlimited design possibilities and complete control over every aspect of styling.

- Optimized Styles: You can write only the styles needed for the project, resulting in leaner CSS files.

- Creative Freedom: Designers and developers can freely explore creative ideas without constraints.

- Efficiency: Custom CSS can be optimized for performance, minimizing file size and loading times.

Cons:

- Development Time: Creating a custom CSS framework can be time-consuming, especially for complex designs.

- Maintenance: Custom CSS requires thorough testing and ongoing maintenance to ensure consistency and compatibility.

- Expertise: Developing custom CSS requires a deep understanding of CSS and best practices, which may not be suitable for all teams.

- Potential Inefficiencies: Without careful planning, custom CSS can become inefficient and lead to code duplication.

Here's an example using custom CSS in TypeScript:


import styles from './styles.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.container} ${styles.hoverEffect}`}>
        <p className={styles.text}>Hello World!</p>
      </div>
    </main>
  );
};

export default Home;


/* styles.module.css */
.main {
  background-color: lightblue;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hoverEffect:hover {
  background-color: lightgray;
}

.text {
  font-size: 2rem;
  font-weight: bold;
  color: gray;
}


## Decision

In the context of our web application, facing the need for a frontend design solution, we propose to consider multiple options:

Option 1: Tailwind CSS
Option 2: SCSS
Option 3: Bootstrap
Option 4: Plain CSS

We have provided examples for each option to facilitate the decision-making process.

Consequences

## Option 1: Tailwind CSS

To achieve our system qualities and desired consequences with Tailwind CSS:

- UX: Tailwind CSS provides a rich set of utility classes that make it easy to create a visually appealing and user-friendly interface.

- Scalability: As our application grows, Tailwind CSS will allow us to efficiently scale the frontend design without significant overhead.

- Autonomy: Tailwind CSS simplifies the process of maintaining and updating the frontend, reducing the need for extensive custom code.

- Adaptability: Tailwind CSS offers responsive design utilities, ensuring adaptability to different screen sizes and devices.

- Security: While Tailwind CSS doesn't directly address security concerns, it doesn't introduce security risks, and we will implement secure design practices separately.

- Privacy: Tailwind CSS doesn't impact privacy concerns directly but allows us to build privacy-conscious user interfaces.

- Simplicity: Tailwind CSS promotes a clean and straightforward approach to frontend design.


## Option 2: SCSS

To achieve our system qualities and desired consequences with SCSS:

- UX: SCSS allows for enhanced styling capabilities, enabling us to create visually appealing and user-friendly interfaces.

- Scalability: SCSS's code organization and reusability features can contribute to efficient frontend scaling.

- Autonomy: With SCSS, we have control over styles, reducing reliance on external frameworks and libraries.

- Adaptability: SCSS enables us to create responsive designs tailored to different screen sizes and devices.

- Security: SCSS doesn't directly address security but doesn't introduce security risks by itself. Secure design practices will be implemented separately.

- Privacy: SCSS doesn't directly impact privacy but allows us to customize interfaces for privacy-conscious users.

- Simplicity: SCSS promotes organized and maintainable code, simplifying the frontend development process.


## Option 3: Bootstrap

To achieve our system qualities and desired consequences with Bootstrap:

- UX: Bootstrap offers pre-designed components for a visually appealing and user-friendly interface.

- Scalability: Bootstrap provides a foundation for building responsive and scalable designs.

- Autonomy: While Bootstrap streamlines development, extensive customization may be required for unique designs.

- Adaptability: Bootstrap's responsive components ensure adaptability to different screen sizes and devices.

- Security: Bootstrap follows best practices, reducing security risks in design. Additional security measures will be implemented separately.

- Privacy: Bootstrap doesn't specifically address privacy concerns but can be customized to meet privacy requirements.

- Simplicity: Bootstrap simplifies frontend development with ready-made components, making it easy to create user interfaces.


## Option 4: Custom CSS

To achieve our system qualities and desired consequences with Custom CSS:

- UX: Custom CSS offers complete creative freedom to craft visually appealing and user-friendly interfaces.

- Scalability: Custom CSS allows us to create optimized, lightweight styles to support frontend scalability.

- Autonomy: Developing custom CSS provides full control over the design, reducing reliance on external frameworks.

- Adaptability: Custom CSS can be tailored to specific screen sizes and devices, ensuring adaptability.

- Security: Security considerations will be part of the custom CSS development process to minimize risks.

- Privacy: Custom CSS enables the customization of user interfaces for enhanced privacy features.

- Simplicity: While custom CSS offers flexibility, it requires careful planning and maintenance for simplicity and consistency.