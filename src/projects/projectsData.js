import projectOne from "../assets/fish_tours.gif"
import projectTwo from "../assets/fc.gif"
import projectThree from "../assets/uber.gif"
import projectFour from "../assets/weather.gif"
import projectFifth from "../assets/pulse.gif"
import projectSixth from "../assets/project6.jpg"

const projects = {
  1: {
    title: "Crete Fishing Tours",
    image: projectOne,
    description: (
      <>
        <p>This landing page was custom-designed and developed for a client based in Greece who sought to establish an online presence for their business offering fishing boat tours in the waters of Crete, Greece.</p>
      </>
    ),
    github: "https://github.com/paketoff/fishing_tours",
    demo: "https://cretefishingtours.info/#en",
  },
  2: {
    title: "Fitness Club Web Application",
    image: projectTwo,
    description: (
      <>
        <p>This project is an information management system for fitness clubs, developed using cutting-edge technologies. It has a MySQL database with multiple tables and employs JWT and bcrypt for security. The back-end is built on Node.js with NestJS, while the front-end uses Angular to create a user-friendly interface. A notable feature is the recommendation questionnaire, dynamically adjusting membership plans based on user responses to help them make informed decisions.</p>
      </>
    ),
    github: "https://github.com/paketoff/fitness_club",
    demo: "#",
  },
  3: {
    title: "Uber Landing",
    image: projectThree,
    description: (
      <>
        <p>This landing page project represents one of my early ventures into web development, showcasing my proficiency in crafting websites using pure HTML and CSS. Serving as a pet project, it was meticulously developed to gain valuable experience in the creation of engaging and visually appealing landing pages, using a native JavaScript and the jQuery library.</p>
      </>
    ),
    github: "https://github.com/paketoff/uber",
    demo: "https://app.netlify.com/sites/heroic-dasik-445c06/deploys/64d78fd617608f0af5f157bd",
  },
  4: {
    title: "Weather Web CLI",
    image: projectFour,
    description: (
      <>
        <p>This compact web CLI application was developed using Node.js and integrated with an external API to provide users with real-time weather information for any city they specify. The main focus of this project was to gain valuable experience in Node.js application development. The CLI application serves as a versatile tool that can easily be incorporated as a supplementary service within a larger web application.</p>
      </>
    ),
    github: "https://github.com/paketoff/weather_cli",
    demo: "https://www.npmjs.com/package/weather_cli-package",
  },
  5: {
    title: "Pulse Landing",
    image: projectFifth,
    description: (
      <>
        <p>The development of this project was commissioned by a client specializing in the retail of sporting goods. The primary objective was to create a foundational solution for their online platform, focusing on the implementation of essential features using JavaScript and the jQuery library.</p>
      </>
    ),
    github: "https://github.com/paketoff/pulse",
    demo: "https://64d79082555a760b9559c496--endearing-heliotrope-645757.netlify.app",
  },
  6: {
    title: "Personal Cloud Storage Web Application",
    image: projectSixth,
    description: (
      <>
        <p>Currently, I am developing a web application, a cloud storage platform, using the MERN stack (MongoDB, ExpressJS, React, Node.js) technology.</p>
      </>
    ),
    github: "https://github.com/paketoff/cloud-mern",
    demo: "#",
  },
}

export default projects;