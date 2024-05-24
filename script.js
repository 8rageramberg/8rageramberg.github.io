// Store the element with the class 'content' as a variable for later use
var content = document.querySelector('.content');

// Store the URL in a variable as well
var url = "https://restcountries.com/v3.1/all"

var filterBtn = document.getElementById('filterBtn');
var filterInput = document.getElementById('filterInput');

// Function to filter countries based on user input
function filterCountries(input) {
    // Get all the card elements inside the content container
    var cards = document.querySelectorAll('.card');
  
    // Loop through each card and check if it contains the input value
    cards.forEach((card) => {
      var heading = card.querySelector('h1').textContent.toLowerCase();
      var shouldDisplay = heading.includes(input.toLowerCase());
      card.style.display = shouldDisplay ? 'block' : 'none';
    });
  }

// Call the function to update the DOM in case there are already favourite countries
updateFavourites();

// Set up the functionality for clearing the localStorage favourites
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
  localStorage.removeItem('favCountries');
  updateFavourites();
});

// Define the function for updating the DOM with favourite countries
function updateFavourites() {

  // Select the list element and clear it's content
  let list = document.querySelector("aside ul");
  list.innerHTML = "";

  // Retrieve the favourite countries from localStorage
  let favCountries = JSON.parse(localStorage.getItem('favCountries'))

  // Make sure the localStorage item exists by checking it's not equal to 'null'
  if (favCountries !== null){

    // Loop through the countries and add their names as list items to the page
    favCountries.forEach((country) => {
      let listItem = document.createElement("li");
      listItem.textContent = country;
      list.appendChild(listItem);
    })
  } 
}

// Event listener for the filter button
filterBtn.addEventListener('click', () => {
    const inputValue = filterInput.value.trim(); // Get the input value and trim any whitespace
    filterCountries(inputValue); // Call the filterCountries function with the input value
  });

// Fetch data from API and handle the response to display the country information on the page
fetch(url)
.then((response) => {
  // Check if response is successful
  if (response.ok) {
    // Convert response to JSON and return the data
    return response.json();
  } else {
    // Throw an error if response is not successful
    throw new Error(`Unable to access API. Error: ${response.status}`);
  }
})
.then((data) => {
  // Add code to do something with the data once it has been fetched and converted

  data.sort((a, b) => a.name.common.localeCompare(b.name.common));

  console.log(data);
  data.forEach((country) => {
    // console.log(country); // Uncomment to see each array item stored as object

        // Card container
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        // Title Heading
        let heading = document.createElement("h1");
        // Truncate the name if it's longer than 20 characters (to keep the grid alignment)
        if (country.name.common.length > 20) {
        heading.textContent = `${country.name.common.substring(0, 20)}...`;
        } else {
        heading.textContent = country.name.common;
        }

        // Description Paragraph
        let paragraph = document.createElement("p");
        paragraph.innerHTML = `Population: ${country.population} <br> Region: ${country.region} <br> Capital: ${country.capital} <br> Independent: ${country.independent}`;

        // Flag Image
        let flag = new Image();
        flag.src = country.flags.png;
        flag.alt = country.flags.alt;

        // Append all the sub elements to the card container
        card.appendChild(heading);
        card.appendChild(paragraph);
        card.appendChild(flag);

        // Append the card to the main content container (Step 1)
        content.appendChild(card);

        let favButton = document.createElement("button");
        favButton.textContent = "Add to Favourites";
        card.appendChild(favButton);

        favButton.addEventListener("click", function(event) {
          // Log out the name from the current country to test the each button
          console.log(country.name.common)
        
          // Extract the 'favCountries' item from local storage as JSON 
          let favCountries = JSON.parse(localStorage.getItem('favCountries'))
          
          // Check if the item doesn't exist in localStorage by seeing if it is null
          if (favCountries == null){
            // In which case, use the current country name to create an array
            favCountries = [country.name.common]
          } else {
            // Otherwise check if the country is already in the favourites array
            if (favCountries.find(element => element === country.name.common)){
              console.log('Country already exists')
            } else {
              // If it's not in the array already, push it into the array
              favCountries.push(country.name.common)
            }
          }
          console.log(favCountries)
          localStorage.setItem('favCountries', JSON.stringify(favCountries))
          updateFavourites();
        })
  })
})




.catch((error) => {
  // Handle error if API request is not successful
  let errorMessage = document.createElement("p");
  errorMessage.textContent = `Sorry, something went wrong - ${error.message}`;
  content.append(errorMessage);
});