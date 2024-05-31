
document.addEventListener('DOMContentLoaded', () => {
    // Settings overlay

    // close buttons

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