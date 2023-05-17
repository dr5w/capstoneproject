// app.js

// Function to handle the form submission
function handleSubmit(event) {
    event.preventDefault();
    // You can add your form submission logic here
    // For example, you can retrieve the form data and send it to a server using AJAX
    // You can also show a success message or perform any other desired action
  }
  
  // Event listener to handle form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
  
  // Event listener to handle hover effect on navigation links
  const links = document.querySelectorAll('#topnav a');
  links.forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.style.fontSize = '35px';
    });
    link.addEventListener('mouseout', () => {
      link.style.fontSize = '25px';
    });
  });
  
  // Event listener to handle hover effect on social icons
  const socialIcons = document.querySelectorAll('#social i');
  socialIcons.forEach((icon) => {
    icon.addEventListener('mouseover', () => {
      icon.style.fontSize = '35px';
    });
    icon.addEventListener('mouseout', () => {
      icon.style.fontSize = '25px';
    });
  });
  