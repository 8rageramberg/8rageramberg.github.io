import React from 'react';
import settingsLogo from '../assets/settings.png'


// Class for adding settings emblem and toggle on click 
function Header({ toggleSettings }) {
    return (
        <header className="header">
            <button className="settings-button" onClick={toggleSettings}>
                <img src={settingsLogo} alt="Settings" />
            </button>
        </header>
    );
}

export default Header;