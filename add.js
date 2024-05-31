
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