
document.addEventListener('DOMContentLoaded', () => {
    // Settings overlay
    const settingsBtn = document.querySelector('.settings-button');
    const settingsOverlay = document.getElementById('settings');

    // close buttons
    const closeBtns = document.querySelectorAll('.close-button')
    const backBtn = document.getElementById('back-button')

    settingsBtn.addEventListener('click', () => {
        settingsOverlay.classList.toggle('show');
    });

    // Close button event listeners
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            settingsOverlay.classList.remove('show');
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (event) => {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const cmdKey = isMac ? event.metaKey : event.altKey;

        if (cmdKey && event.key === 'a') {
            event.preventDefault(); // Prevent default browser behavior
            settingsOverlay.classList.remove('show');
            backBtn.click();

        } else if (cmdKey && event.key === 'c') {
            event.preventDefault(); // Prevent default browser behavior
            closeBtns.forEach(btn => {
                closeBtns.click();
            });
        } else if (cmdKey && event.key === 's') {
            event.preventDefault(); // Prevent default browser behavior
            settingsOverlay.classList.toggle('show');

        }
    });

});