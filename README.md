<img src="https://i.imgur.com/1QgrNNw.png" width="200" height="200" />

# **Hero Compare**

<img src="https://media.giphy.com/media/C6JQPEUsZUyVq/giphy.gif" width="700" height="400" />

## Introduction

**Hero Compare** is a web application that offers a wealth of information about heroes and champions featured in two of the most renowned multiplayer online battle arena **(MOBA)** games: **League of Legends (LoL)** and **Dota 2**. This web page serves as an indispensable resource tailored for gamers and enthusiasts alike who seek to delve into, assess, and draw comparisons between the diverse array of heroes present in these iconic games.

Explore the vast world of heroes, understand their unique attributes, and make informed choices for your gameplay. Hero Compare is your gateway to a deeper understanding of the heroes and champions in **LoL** and **Dota 2**.

## Getting Started

To get started with Hero Compare, follow the instructions below:

1. Clone both of the repositories to your local machine.
2. [GitHub repository front-end](https://github.com/HChughtai98/Hero_Compare) & [GitHub repository back-end](https://github.com/HChughtai98/Hero_Compare_Backend)
3. Install the required dependencies with `npm install` on both repositories.
4. Start the back-end application with `npm run json-server`
5. Start the front-end application with `npm run dev` and visit the provided page in your browser.
6. Explore the App and enjoy the features!

## Features

Hero Compare offers a variety of features that provide a comprehensive and interactive user experience:

- **Interactive UI**: Engage with a dynamic user interface that's both visually appealing and easy to use. Navigate through our application with ease and find exactly what you need with just a few clicks.
- **Catalog of Heroes**: Explore a vast catalog of heroes from popular games like Dota 2 and League of Legends. Whether you're a fan of MOBAs or just curious, our extensive collection ensures there's something for everyone.
- **Add New Heroes**: Are you a hero enthusiast? You have the ability to contribute by adding new heroes to our platform. Provide detailed descriptions, images, and other information to showcase your favorite heroes.
- **Delete Heroes**: Manage the hero catalog effectively by removing listings when necessary. This feature ensures that our catalog remains up-to-date and accurate.
- **Robust 404 Page**: If you ever encounter a missing page, don't worry! Our custom 404 page ensures you're not left at a dead end. It provides a clear message and options to return to active parts of the platform.
- **About Page**: Get to know Hero Compare and the team behind it. Our about page provides insights into our mission, values, and the passionate individuals making it all happen.
- **Info Page**: Dive into comprehensive information about the heroes and games featured on Hero Compare. Learn about their classes, complexity, the game they belong to, and their roles within that game. Explore their abilities, lore, and much more.
- **Dota2 Page**: Explore the world of Dota 2 heroes. Discover their unique strengths and weaknesses, and compare them to heroes from other games.
- **League of Legends Page**: Immerse yourself in the League of Legends universe. Get to know the champions, their backgrounds, and how they stack up against heroes from different gaming worlds.

Experience the ultimate hero comparison platform with Hero Compare. Join our community today and start exploring the world of heroes like never before!

## Backlog for Future Enhancements

As Hero Compare continues to evolve, we have several exciting features and improvements in our backlog. These enhancements aim to enhance the user experience, expand functionality, and provide more valuable insights for gamers and enthusiasts.

### Adding New Heroes

- **Regular Updates**: We plan to keep the hero database up-to-date with new additions and changes from both League of Legends (LoL) and Dota 2.
- **Historical Data**: In addition to current hero information, we aim to provide historical data and patch notes for a deeper understanding of hero evolution.

### Comparison Enhancements

- **Advanced Comparison Tools**: We're exploring the development of advanced hero comparison tools, allowing users to analyze heroes based on various attributes, abilities, and statistics.
- **Visual Charts**: Implementing visual charts and graphs for an intuitive comparison of hero attributes, win rates, and popularity.

### User Profiles and Favorites

- **User Profiles**: Introducing user profiles that enable gamers to track their favorite heroes, personal statistics, and comparisons.
- **Favorites**: Users can mark heroes as favorites for quick access and tracking.

### Community and Social Integration

- **User Reviews**: Enabling users to leave reviews and ratings for heroes, sharing their insights and experiences.
- **Social Sharing**: Adding social media integration for users to share their hero comparisons and findings with the community.

### Mobile App Development

- **Mobile Application**: Exploring the development of a mobile app version for Hero Compare, offering on-the-go access to hero information and comparisons.

### Performance Optimization

- **Faster Loading**: Continuous efforts to optimize website performance, ensuring quick and responsive access to hero data.
- **Server Upgrades**: Upgrading servers to handle increased traffic and user interactions.

### Feedback Mechanism

- **User Feedback System**: Implementing a user feedback mechanism for suggestions, bug reports, and feature requests.
- **Community Voting**: Allowing users to vote on proposed features, helping prioritize development efforts.

We're excited to have contributions from the community to help bring these features to life. If you’re interested in contributing, please see our CONTRIBUTING.md file for guidelines on how to get involved.

_Note: The features listed in the backlog are subject to change based on user feedback and project priorities._

## Technologies Used

Hero Compare is a web application that leverages a combination of modern technologies and tools to provide a seamless and informative experience for users. Below is a list of the key technologies involved in our project:

### Frontend

- **React**: The frontend of Hero Compare is built using React, a powerful JavaScript library for building dynamic and responsive user interfaces. React's component-based architecture allows for modular and efficient UI development.
- **React Router**: We use React Router for navigation and routing within the single-page application, ensuring smooth transitions between different sections and hero comparisons.
- **PropTypes**: PropTypes is utilized for type-checking component props, enhancing code reliability and maintainability.
- **CSS3 and HTML5**: These standard web technologies are employed for styling and structuring the web pages, resulting in an attractive and user-friendly interface.

### Backend API

- **Custom Backend API**: Hero Compare is supported by a custom backend API developed to manage hero data, comparisons, and user interactions. It provides the necessary data endpoints for the frontend to fetch hero information and perform comparisons.

### State Management and Data Handling

- **useState and useEffect Hooks**: React's useState and useEffect hooks play a crucial role in managing frontend state and handling lifecycle events within functional components.
- **RESTful API**: The frontend communicates with the backend API using RESTful principles to retrieve and update hero data.

### Forms and User Interaction

- **Form Handling**: Hero Compare includes form handling mechanisms for user interactions, allowing users to compare heroes and access additional information seamlessly.

### Images and Media

- **Image Handling**: The application efficiently handles and displays hero images, contributing to the visual appeal and informativeness of the hero profiles.

### Development Tools and Practices

- **ESLint/Prettier**: We employ ESLint and Prettier to maintain code quality and consistency, ensuring a clean and error-free codebase.
- **Git and GitHub**: Version control is managed using Git and GitHub, facilitating collaboration and code management.
- **Responsive Web Design**: Hero Compare follows responsive design principles, making the application accessible and functional across various devices and screen sizes.

### Hosting

- **Netlify**: Hero Compare is live-hosted on Netlify, providing a reliable and scalable hosting environment for the frontend and backend API. This ensures high availability and performance for users.

## Project Structure

Our HERO_COMPARE application is meticulously organized for optimal development workflow and maintenance. Below is a detailed outline of the project's structure:

- `node_modules`: Contains all the Node.js modules our project depends on.
- `public`: This directory houses static assets, including the `index.html` entry point.
- `src`: The core directory where the source code of our application is located.
  - `assets`: Here we store static resources such as images and reusable components.
    - `react.svg`: An SVG logo for React.
  - `components`: This folder holds our React components, which include:
    - `AddCharacter.jsx`: Component to add a new character.
    - `CharacterDetails.jsx`: Displays the details of each character.
    - `CharacterList.jsx`: Lists all characters.
    - `ComplexityIndicator.jsx`: Shows the complexity level of a character or feature.
    - Other custom components for handling the application's functionality.
  - `images`: Contains images used across the app. Notable subdirectories and files include:
    - `rolesImages`: A subdirectory with images categorizing different roles.
    - Various logos and specific UI elements like arrows and background images.
  - `pages`: React components that correspond to the various pages of the app, such as:
    - `About.jsx`: Information about the app.
    - `Characters.jsx`: The page that renders character details.
    - `NotFound.jsx`: A custom 404 error page.
    - `Dota.jsx`: The Dota page is responsible for rendering the list of Dota 2 heroes and includes filtering functionality.
    - `Lol.jsx`: The LoL page displays the League of Legends champions and provides similar filtering capabilities as the Dota page.
    - `Home.jsx`: The Home page serves as the entry point to the application, offering navigation to both the Dota and LoL pages as well as a comparison feature.
    - Other pages that form the single-page application (SPA) structure.
  - `styling`: Directory for all CSS files, ensuring a consistent and elegant UI/UX.
    - `AboutPage.css`: Styles for the About page.
    - `Characters.css`: Styling details for character components.
    - `ComplexityIndicator.css`: Visual styles for complexity indicators.
    - Other stylesheets for various components and pages.
- `.eslintrc.cjs`: ESLint configuration file for code style and quality checks.
- `.gitignore`: Lists the files and directories which are not to be tracked by Git.
- `netlify.toml`: Configuration file for Netlify deployment.
- `package-lock.json` & `package.json`: These files manage project dependencies and metadata.
- `README.md`: A markdown file providing detailed information about the project.
- `vite.config.js`: Configuration file for Vite, our frontend build tool.

This structure highlights our dedication to a clean and organized codebase, making it straightforward for developers to locate and familiarize themselves with the various aspects of our application, which supports efficient development and easy upkeep..

## Links

- [Slides Link](https://slides.com/haris-3/code)
- [Github repository Link back-end](https://github.com/HChughtai98/Hero_Compare_Backend)
- [GitHub repository Link front-end](https://github.com/HChughtai98/Hero_Compare)
- [Netlify page Link](https://main--jolly-tarsier-7fdd00.netlify.app/)

## Made By

Hero Compare is proudly developed by a team of dedicated and talented individuals:

- **Haris Chughtai**

  - At 25, Haris exemplifies the dynamic spirit of learning and adaptation. Transitioning from Business Management & Marketing into the intricate world of Software Development, he brings with him an eagerness to face and surmount the intellectual rigors of coding. Based in North Rhine-Westphalia, Germany, Haris has embraced the challenges of development with the same vigor that drives his passion for gaming and esports. His goal is clear: to craft impactful software solutions while advancing his skills and enjoying life's journey without reservations.

- **Josip Milan**
  - Josip's narrative is a tale of transformation from a high-caliber Executive Sous Chef to an innovative web developer. His remarkable journey into the tech realm is marked by the same passion and pursuit of excellence that distinguished his culinary career. In Amsterdam's bustling cityscape, Josip's blend of creativity and systematic problem-solving manifests in his dedication to the HERO_COMPARE project. His diverse interests, from gastronomy to gaming, infuse his work with a unique perspective, making him a vital contributor to the world of IT.

This project is a testament to their hard work, creativity, and collaborative spirit. The Hero Compare team continues to push the boundaries of what's possible in web development, setting new standards for innovation and user experience.
