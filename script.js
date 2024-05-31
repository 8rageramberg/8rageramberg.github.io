document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.querySelector('.card-container'); // Select .card-container directly
  const films = [
    {
      title: 'Batman Begins',
      director: 'Christopher Nolan',
      year: 2005,
      content: 'Film',
      genre: 'Fantasy / Action',
      duration: '2h 20min',
      watched: true,
      rating: 9,
      priority: 1,
      favorite: true,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
      date: new Date('2012-12-10T16:30:00')
    },
    {
      title: 'The Dark Knight',
      director: 'Christopher Nolan',
      year: 2008,
      content: 'Film',
      genre: 'Fantasy / Action',
      duration: '2h 32min',
      watched: true,
      rating: 9.2,
      priority: 1,
      favorite: true,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      date: new Date('2012-12-10T16:30:00')
    },
    {
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2010,
      content: 'Film',
      genre: 'Sci-Fi / Action',
      duration: '2h 28min',
      watched: true,
      rating: 8.8,
      priority: 2,
      favorite: true,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
      date: new Date('2012-12-10T16:30:00')
    },
    {
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2010,
      content: 'Film',
      genre: 'Sci-Fi / Action',
      duration: '2h 28min',
      watched: true,
      rating: 8.8,
      priority: 2,
      favorite: true,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg',
      date: new Date('2012-12-10T16:30:00')
    },
    {
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2010,
      content: 'Film',
      genre: 'Sci-Fi / Action',
      duration: '2h 28min',
      watched: true,
      rating: 8.8,
      priority: 2,
      favorite: true,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg',
      date: new Date('2012-12-10T16:30:00')
    },
    {
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2010,
      content: 'Film',
      genre: 'Sci-Fi / Action',
      duration: '2h 28min',
      watched: true,
      rating: 8.8,
      priority: 2,
      favorite: true,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg',
      date: new Date('2012-12-10T16:30:00')
    },
    {
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2010,
      content: 'Film',
      genre: 'Sci-Fi / Action',
      duration: '2h 28min',
      watched: true,
      rating: 8.8,
      priority: 2,
      favorite: true,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg',
      date: new Date('2012-12-10T16:30:00')
    },
    {
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2010,
      content: 'Film',
      genre: 'Sci-Fi / Action',
      duration: '2h 28min',
      watched: true,
      rating: 8.8,
      priority: 2,
      favorite: true,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg',
      date: new Date('2012-12-10T16:30:00')
    },
    // Add other film objects here as needed
  ];

  function renderFilms() {
    cardContainer.innerHTML = '';
    films.forEach(film => {
      const filmCard = document.createElement('div'); // Changed from 'li' to 'div' for the card
      filmCard.className = 'card';

      const leftDiv = document.createElement('div');
      leftDiv.className = 'card-left';
      const rightDiv = document.createElement('div');
      rightDiv.className = 'card-right';

      const img = document.createElement('img');
      img.src = film.imageUrl;
      img.alt = film.title;
      leftDiv.appendChild(img);

      const details = document.createElement('div');
      details.className = 'card-details';
      details.innerHTML = `
        <h2>${film.title}</h2>
        <p><strong>Director:</strong> ${film.director}</p>
        <p><strong>Year:</strong> ${film.year}</p>
        <p><strong>Content:</strong> ${film.content}</p>
        <p><strong>Genre:</strong> ${film.genre}</p>
        <p><strong>Duration:</strong> ${film.duration}</p>
        <p><strong>Watched:</strong> ${film.watched ? 'Yes' : 'No'}</p>
        <p><strong>Rating:</strong> ${film.rating !== null ? film.rating : 'None'}</p>
        <p><strong>Priority:</strong> ${film.priority}</p>
        <p><strong>Favorite:</strong> ${film.favorite ? 'Yes' : 'No'}</p>
        <p><strong>Date:</strong> ${film.date.toLocaleString()}</p>
      `;
      rightDiv.appendChild(details);

      filmCard.appendChild(leftDiv);
      filmCard.appendChild(rightDiv);

      cardContainer.appendChild(filmCard);
    });
  }

  renderFilms();
});



document.addEventListener('DOMContentLoaded', () => {
  const optionsToggle = document.querySelector('.options-toggle');
  const optionsContent = document.querySelector('.options-content');
  const footer = document.querySelector('.footer');
  const cardMarker = document.querySelectorAll(".card");

  // ADD overlay
  const addBtn = document.getElementById('add-button');

  // Settings overlay
  const settingsBtn = document.querySelector('.settings-button');
  const settingsOverlay = document.getElementById('settings');

  // close buttons
  const closeBtns = document.querySelectorAll('.close-button')


  // listeners
  optionsToggle.addEventListener('click', () => {
    optionsContent.classList.toggle('show');
  });

  // Close the options dropdown when clicking outside of it
  window.addEventListener('click', (event) => {
    if (!event.target.matches('.options-toggle') && !event.target.closest('.options-content')) {
      optionsContent.classList.remove('show');
      footer.classList.remove('menu-open'); // Also remove the class from the footer
    }
  });
  cardMarker.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("marked");
    });
  });

  settingsBtn.addEventListener('click', () => {
    settingsOverlay.classList.toggle('show');
    footer.classList.toggle('show');
  });

  window.addEventListener('click', (event) => {
    if (event.target.matches('.settings')){
      settingsOverlay.classList.remove('show');
      footer.classList.remove('show');
    }
  });

  // Close button event listeners
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // addOverlay.classList.remove('show');
      settingsOverlay.classList.remove('show');
      footer.classList.remove('show');
    });
  });


  // Keyboard shortcuts
  document.addEventListener('keydown', (event) => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const cmdKey = isMac ? event.metaKey : event.altKey;

    if (cmdKey && event.key === 'a') {
      event.preventDefault(); // Prevent default browser behavior
      // addOverlay.classList.toggle('show');
      addBtn.click()
      settingsOverlay.classList.remove('show');
    } else if (cmdKey && event.key === 'c') {
      event.preventDefault(); // Prevent default browser behavior
      closeBtns.forEach(btn => {
        btn.click();
      });
    } else if (cmdKey && event.key === 's') {
      event.preventDefault(); // Prevent default browser behavior
      settingsOverlay.classList.toggle('show');
      // addOverlay.classList.remove('show');
    }
  });

  function adjustBodyPadding() {
    var footer = document.querySelector('.footer');
    var footerHeight = footer.offsetHeight + 16;
    document.body.style.paddingBottom = footerHeight + 'px';
  }

  // Adjust padding on load
  window.addEventListener('load', adjustBodyPadding);

  // Adjust padding if the window is resized
  window.addEventListener('resize', adjustBodyPadding);



});