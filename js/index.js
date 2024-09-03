/*
  Display a message on the screen inside an h1 element, using data.

  BONUS: Add an image to the page, also sourced from the data.
*/

// Create a Veu app
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "First exercise using Veu.js Framework", // Create Message variable
      img: "https://cdn.dribbble.com/users/32512/screenshots/7701476/media/7896f20d280164017ce0e2e07aca20fa.png", // Create image variable
      alt: "Veu.js Framework", // Create alt variable
    };
  },
}).mount("#app");
