const startCourseButtons = document.querySelectorAll('.btn');
const aboutButton = document.querySelector('nav ul li:nth-child(4) a'); // Select the "About" button specifically

startCourseButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Course started!');
  });
});

aboutButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  const introSection = document.getElementById('intro-section');
  introSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the intro section
});
