import React from 'react';
import settingsLogo from '../assets/settings.png'

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