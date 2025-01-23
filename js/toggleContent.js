  function toggleContent(element) {
    const content = element.nextElementSibling;
    const icon = document.querySelector('.project-hide-icon');

    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      icon.innerHTML = '&#x2013;'; // Dash
    } else {
      content.style.display = 'none';
      icon.innerHTML = '&#x25BC;'; // Down arrow
    }
  }

