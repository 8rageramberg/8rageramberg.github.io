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
    window.location.reload();                                               // Refresh the page to reflect the changes
  };

  // Edit button is pressed and we store the card and go to the addSite
  const handleEdit = () => {
    localStorage.setItem('markedCard', JSON.stringify(markedCards[0]));     // Store the marked film so we can use it to prefill addSite
    console.log(markedCards[0])
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
  };

  // Error handeling when trying to add movies with marked cards
  const deSelect = () => {
    alert('You need to remove the selected cards to add or edit');
  };

  useEffect(() => {
    window.addEventListener('resize', adjustPageExtension);   // on resize we must adjust the footer size
  }, []);

  // Return the build for the index.html file. To handle the different Sites and footers, we have 
  return (
    <div className="root">
      {showAddSite ?
        <Title_2 /> :
        <Title />}

      <Header toggleSettings={toggleSettings} />
      <Settings />

      {showAddSite ?
        <AddSite /> :
        <Cards adjustPageExtension={adjustPageExtension} markedCards={markedCards} setMarkedCards={setMarkedCards} />}

      {showAddSite ?
        <Footer_2 onBack={onBack} onAdd={onBack} onDelete={onDelete} adjustPageExtension={adjustPageExtension} showBackButton={showBackButton}
          toggleButton={toggleButton} /> :
        <Footer_1 deSelect={deSelect} markedCards={markedCards} onDelete={onDelete} sortButton={console.log("sorting...")} adjustPageExtension={adjustPageExtension} toggleAddSite={toggleAddSite} handleEdit={handleEdit} />}
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

