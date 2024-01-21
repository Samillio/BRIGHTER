// script.js

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Get all cards with the class 'card'
  var cards = document.querySelectorAll('.card');

  // Attach a click event listener to each card
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      // Get the title of the clicked card
      var eventTitle = card.querySelector('.card-title').textContent;

      // Display an alert with the event title
      alert('Clicked on ' + eventTitle + ' card!');
    });
  });
});
