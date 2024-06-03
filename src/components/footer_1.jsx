import React from 'react';

// Footer one class, matching with card display
function Footer({ unmarkAllCards, onDelete, sortButton, adjustPageExtension, toggleAddSite, markedCards, handleEdit }) {


  // Search bar for card site, created with toggle css styles
  const optionsToggle = () => {
    const searchInput = document.querySelector('.search-input');
    searchInput.value = ''
    const optionsContent = document.querySelector('.options-content');
    optionsContent.classList.toggle('show');
    adjustPageExtension()
  }

  // Filter handler for search bar
  const handleInputChange = (event) => {
    const inputValue = event.target.value.trim(); 
    filterCards(inputValue);
  };

  // Filter cards function. managing display in css
  const filterCards = (inputValue) => {
    const filterText = inputValue.toLowerCase();
    const filmCards = Array.from(document.querySelectorAll('.card'));   // Get all cards

    filmCards.forEach(card => {                                         // Loop card, get data
      const filmDetails = card.querySelector('.card-details');             
      const textContent = filmDetails.textContent.toLowerCase();

      if (textContent.includes(filterText)) {                           // Display if match
        card.style.display = '';
      } else {
        card.style.display = 'none';                                    // Hide if not
      }
    });
  }

  return (
    <div id="page-extension">
      <footer className='footer'>

        <div className="options-dropdown">
          <div className="options-content">
            <input type="text" className="search-input" id="temp" placeholder="Search..." onChange={handleInputChange} />
          </div>

          <div className="footer-container">
            <button className="delete-button" onClick={onDelete}>DELETE</button>
            <button className="sort-button" onClick={sortButton}>SORT</button>
            <button className="options-toggle" onClick={optionsToggle}>SEARCH</button>

            {markedCards.length === 1 ? (
              <button className="edit green-button" onClick={handleEdit}>EDIT</button>
            ) : (
              markedCards.length > 1 ? (
                <button className="new-button" onClick={unmarkAllCards}> DESELECT</button>
              ) : (
                <button className="add-button" onClick={toggleAddSite}>ADD</button>
              )
            )}

          </div>
        </div>
      </footer >
    </div >
  );
}

export default Footer;
