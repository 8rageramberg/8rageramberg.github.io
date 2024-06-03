import React, { useEffect, useState } from 'react';

// Cards is the main manager for the cards on the page
const Cards = ({ adjustPageExtension, markedCards, setMarkedCards, films, setFilms }) => {
    // Mainly for testing but also for my graders to see some preloaded film data. This initiates if there are no cards
    const filmsData = [
        {
            title: 'Batman Begins',
            director: 'Christopher Nolan',
            year: 2005,
            content: 'Film',
            genre: 'Fantasy / Action',
            durationMinutes: 2,
            durationHours: 3,
            watched: true,
            rating: 9,
            priority: 1,
            favourite: true,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
            marked: false,
            showing: false
        },
        {
            title: 'The Dark Knight',
            director: 'Christopher Nolan',
            year: 2008,
            content: 'Film',
            genre: 'Fantasy / Action',
            durationMinutes: 2,
            durationHours: 3,
            watched: true,
            rating: 9.2,
            priority: 1,
            favourite: true,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            marked: false,
            showing: false
        },
        {


            title: 'Forrest gump',
            director: 'Peter Parker',
            year: 2010,
            content: 'Film',
            genre: 'Sci-Fi / Action',
            durationMinutes: 2,
            durationHours: 3,
            watched: true,
            rating: 8.8,
            priority: 2,

            favourite: true,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqrGIF8Y2IS0VdPvqCJqvIwAoQmWJ-j2fmg&s',
            marked: false,

        },
        {
            title: 'Interstellar',
            director: 'Christopher Nolan',
            year: 2010,
            content: 'Film',
            genre: 'Sci-Fi / Action',
            durationMinutes: 2,
            durationHours: 3,
            watched: true,
            rating: 8.8,
            priority: 2,
            favourite: true,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjc4ZjkyZmMtNmRmOS00MDUzLWI4NjgtNWM4ZTI3MzliYmIwXkEyXkFqcGdeQXVyMjc5MDg0NDc@._V1_FMjpg_UX1000_.jpg',
            marked: false,

        },
        {
            title: 'Nemo',
            director: 'Christopher Nolan',
            year: 2010,
            content: 'Film',
            genre: 'Sci-Fi / Action',
            durationMinutes: 2,
            durationHours: 3,
            watched: true,
            rating: 8.8,
            priority: 2,
            favourite: true,
            imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg?region=0%2C0%2C540%2C810',
            marked: false,

        },
        {
            title: 'Lord of The Rings',
            director: 'Christopher Nolan',
            year: 2010,
            content: 'Film',
            genre: 'Sci-Fi / Action',
            durationMinutes: 2,
            durationHours: 3,
            watched: true,
            rating: 8.8,
            priority: 2,
            favourite: true,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg',
            marked: false,

        },
        {
            title: 'FIGHT CLUB',
            director: 'Christopher Nolan',
            year: 2010,
            content: 'Film',
            genre: 'Sci-Fi / Anime',
            durationMinutes: 2,
            durationHours: 3,
            watched: true,
            rating: 8.8,
            priority: 2,
            favourite: true,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
            marked: false,
        },
        {
            title: 'Conjuring',
            director: 'Christopher Nolan',
            year: 2010,
            content: 'Film',
            genre: 'Horror',
            durationMinutes: 2,
            durationHours: 3,
            watched: true,
            rating: 10,
            priority: 5,
            favourite: true,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1w35AsAv2sISXApGQxf8hD_gO4d_A_ZC3Q&s',
            marked: false,
        },
    ];



    const [hasImageError, setHasImageError] = useState({}); // Image Error handeling

    // Error handeling, This way we allow user to not fill in URL aswell
    const handleImageError = (index) => {
        setHasImageError((prevErrors) => ({
            ...prevErrors,
            [index]: true,
        }));
    };


    // Creation of each card
    const createCard = () => {
        return films.map((film, index) => {
            const durationHours = parseInt(film.durationHours, 10);
            const durationMinutes = parseInt(film.durationMinutes, 10);
            const duration = `${durationHours}h ${durationMinutes}m`;           // Create one duration in better format for cards                              
            const uniqueKey = `${film.title}-${index}`;                         // Create unique key for films

            adjustPageExtension();                                              // adjust page extention in case card creates new row, we dont want footer to overlap it
            return (
                <div
                    key={uniqueKey}
                    className={`card ${markedCards.includes(film) ? 'marked' : ''}`}
                    onClick={() => handleCardClick(index)}              // onClick marking cards 
                >
                    <div className="card-left">
                        <img id="poster"
                            src={film.imageUrl}
                            alt={film.title}
                            onError={() => handleImageError(index)}
                        />
                        {hasImageError[index] && (                      // Had to remove error 
                            <div className="error-msg" style={{ color: 'red' }}>
                                <p>Image </p>
                                <p> Upload </p>
                                <p>Failed</p>
                            </div>
                        )}
                    </div>
                    <div className="card-right">
                        <div className="card-details">

                            <h2>{film.title}</h2>
                            <p><strong>Director:</strong> {film.director}</p>
                            <p><strong>Year:</strong> {film.year}</p>
                            <p><strong>Content:</strong> {film.content}</p>
                            <p><strong>Genre:</strong> {film.genre}</p>
                            <p><strong>Duration:</strong> {duration}</p>
                            <p><strong>Watched:</strong> {film.watched ? 'Yes' : 'No'}</p>
                            <p><strong>Rating:</strong> {film.rating !== null ? parseFloat(film.rating).toFixed(1) : 'None'}</p>
                            <p><strong>Priority:</strong> {film.priority}</p>
                            <p><strong>Date add:</strong> {film.date = new Date().toLocaleDateString()}</p>
                            <p><strong>Favorite:</strong> {film.favourite ? 'Yes 💙' : 'No'}</p>
                            <p style={{ display: 'none' }}><strong>Marked:</strong> {film.marked ? 'Yes' : 'No'}</p>

                        </div>
                    </div>
                </div>
            );
        });
    };

    // Given an imput the film are either marked or unmarked 
    const toggleMarkedStatus = (films, index) => {
        const updatedFilms = films.map((film, idx) => {
            if (idx === index) {
                return { ...film, marked: !film.marked };
            } else {
                return film;
            }
        });
        return updatedFilms;
    };

    // Handle card click
    const handleCardClick = (index) => {
        const updatedFilms = toggleMarkedStatus(films, index);          // Get the films and their indexes
        const clickedFilm = updatedFilms[index];
        localStorage.setItem('films', JSON.stringify(updatedFilms));
        setFilms(updatedFilms);                                         // Update marked state in storage

        // Update the state of the marked cards const
        if (clickedFilm.marked) {
            // If film is marked, add it to the marked cards 
            setMarkedCards((prevMarkedCards) => [...prevMarkedCards, clickedFilm]);
        } else {
            // else, remove it from the marked cards
            setMarkedCards((prevMarkedCards) =>
                prevMarkedCards.filter((card) => card.title !== clickedFilm.title)
            );
        }
    };

    // Add the default set of files if there is none displaying. Else: display the local storage 
    useEffect(() => {
        const storedFilms = JSON.parse(localStorage.getItem('films')) || [];
        if (storedFilms.length === 0) {
            localStorage.setItem('films', JSON.stringify(filmsData));
            setFilms(filmsData);
        } else {
            setFilms(storedFilms);
        }
    }, []);
    return (
        <div>
            <aside className="content">
                <div className="card-container">
                    {createCard()}
                </div>
            </aside>
        </div>
    );
};

export default Cards;
