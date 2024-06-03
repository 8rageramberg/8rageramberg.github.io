import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

// importing the building blocks of the application
import Header from './components/header';
import Cards from './components/cards';
import Footer_1 from './components/footer_1';
import Footer_2 from './components/footer_2';
import Title from './components/title_1';
import Title_2 from './components/title_2';
import Settings from './components/settings';
import AddSite from './components/addSite';

// The app is controllong everything about what is showing in the Single page. 
function App() {
  const [showAddSite, setShowAddSite] = useState(false);  // Apply useState depending on the add site showing or not 
  const [markedCards, setMarkedCards] = useState([]);     // Marked cards are an indicator list of which cards are marked.
  const [showBackButton, setShowBackButton] = useState(true); // Ustate to assert if backButton or deleteButton should be displayed 
  const [films, setFilms] = useState([]);                 // List of film list 


  // Toggle the backbutton between delete or back depending on the addsite was launched on EDIT or ADD btn
  const toggleButton = () => {
    setShowBackButton(prevShowBackButton => !prevShowBackButton);
  };

  // Toggle settings were created in CSS in an earlier version as an overlay, here we reuse that functionality
  const toggleSettings = () => {
    const settingsOverlay = document.getElementById('settings');
    settingsOverlay.classList.toggle('show');
  };

  // Toggle the view for addSite
  const toggleAddSite = () => {
    setShowAddSite(prevState => !prevState);
  };

  // onDelete is the function when cards are deleted.
  const onDelete = () => {
    const storedFilms = JSON.parse(localStorage.getItem('films')) || [];    // Get the stored films from local storage
    const updatedFilms = storedFilms.filter(film => !film.marked);          // Filter out marked films
    localStorage.setItem('films', JSON.stringify(updatedFilms));            // Update the local storage with filter
    localStorage.removeItem('markedCard');                                  // Remove marked card from local storage, if Delete draft pressed
    setFilms(updatedFilms)
    setMarkedCards([])
    onBack()
  };




  // Edit button is pressed and we store the card and go to the addSite
  const handleEdit = () => {
    localStorage.setItem('markedCard', JSON.stringify(markedCards[0]));     // Store the marked film so we can use it to prefill addSite
    toggleButton();
    toggleAddSite();
  };

  // Adjust the page extension height, this is to resolve overlapping fixed footer element
  function adjustPageExtension() {
    const footerHeight = document.querySelector('.footer').offsetHeight + 16;
    document.getElementById('page-extension').style.height = footerHeight + 'px';
  }

  // action for the back/delete button in the addSite. This brings us back to the 
  const onBack = () => {
    setShowAddSite(false);
  }

  // Function to unmark all marked cards
  const unmarkAllCards = () => {
    const updatedFilms = films.map(film => ({ ...film, marked: false }));
    localStorage.setItem('films', JSON.stringify(updatedFilms));
    setFilms(updatedFilms);
    setMarkedCards([]);
  };

  useEffect(() => {
    window.addEventListener('resize', adjustPageExtension);   // on resize we must adjust the footer size
  }, []);

  // Return the build for the index.html file. To handle the different Sites and footers, we have 
  return (
    <div className="root">
      {showAddSite ? // Toggeling titles based on the showAddSite const
        <Title_2 /> :
        <Title />}

      <Header toggleSettings={toggleSettings} />
      <Settings />

      {showAddSite ?    // Toggeling add site and card site based on the showAddSite const
        <AddSite showAddSite={showAddSite} /> :
        <Cards adjustPageExtension={adjustPageExtension} markedCards={markedCards} setMarkedCards={setMarkedCards} films={films} setFilms={setFilms} />}

      {showAddSite ?    // Toggeling footers based on the showAddSite const
        <Footer_2 onBack={onBack} onAdd={onBack} onDelete={onDelete} adjustPageExtension={adjustPageExtension} showBackButton={showBackButton}
          toggleButton={toggleButton} /> :
        <Footer_1 unmarkAllCards={unmarkAllCards} markedCards={markedCards} onDelete={onDelete} sortButton={console.log("sorting...")} adjustPageExtension={adjustPageExtension} toggleAddSite={toggleAddSite} handleEdit={handleEdit} />}
    </div>
  );
}

// Rendering in root
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

