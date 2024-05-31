
document.addEventListener('DOMContentLoaded', () => {
    const addFolderForm = document.getElementById('addFolderForm');
    const addBtn = document.getElementById('add-button');


    addFolderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = addFolderForm.querySelector('input[placeholder="Title"]').value;
        const director = addFolderForm.querySelector('input[placeholder="Director"]').value;
        const year = parseInt(addFolderForm.querySelector('input[placeholder="Year"]').value, 10);
        const content = addFolderForm.querySelector('input[name="contentType"]:checked').value;
        const genre = addFolderForm.querySelector('#genre').value;
        const durationHours = parseInt(addFolderForm.querySelector('#durationHours').value, 10);
        const durationMinutes = parseInt(addFolderForm.querySelector('#durationMinutes').value, 10);
        const duration = `${durationHours}h ${durationMinutes}m`;
        const watched = addFolderForm.querySelector('input[name="watched"]:checked').value === 'yes';
        const rating = parseInt(addFolderForm.querySelector('#rating').value, 10);
        const priority = parseInt(addFolderForm.querySelector('#priority').value, 10);
        const imageUrl = addFolderForm.querySelector('#imgUrl').value;
        const favorite = addFolderForm.querySelector('input[name="favourite"]').checked;

        const film = {
            title,
            director,
            year,
            content,
            genre,
            duration,
            watched,
            rating,
            priority,
            imageUrl,
            favorite,
            date: new Date().toISOString()
        };

        const films = JSON.parse(localStorage.getItem('films')) || [];
        films.push(film);
        localStorage.setItem('films', JSON.stringify(films));
        window.location.href = 'index.html';
    });



    // back buttons
    const backBtn = document.getElementById('back-button')


    // Keyboard shortcuts
    document.addEventListener('keydown', (event) => {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const cmdKey = isMac ? event.metaKey : event.altKey;

        if (cmdKey && event.key === 'a') {
            event.preventDefault(); // Prevent default browser behavior
            backBtn.click();
        }
    });


    // add height to empty div, based on the footer height
    function adjustPageExtension() {
        var footerHeight = document.querySelector('.footer').offsetHeight + 16;
        document.getElementById('page-extension').style.height = footerHeight + 'px';
    }
    window.addEventListener('load', adjustPageExtension);


});

