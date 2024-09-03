/*
  Display a message on the screen inside an h1 element, using data.

  BONUS: Add an image to the page, also sourced from the data.
*/

// Create a Veu app
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "First exercise using Veu.js Framework", // Create Message
    };
  },
}).mount("#app");
