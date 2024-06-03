import React, { useEffect } from 'react';

function Footer({ onBack, onDelete, adjustPageExtension, showBackButton }) {

    // adjust page extention 
    useEffect(() => {
        adjustPageExtension();
    }, [adjustPageExtension]);
        
    return (
        <div id="page-extension">
            <footer className="footer">
                <div className="footer-container">
                    <div className="end-buttons">
                        {showBackButton ? (                                         // Alternating buttons based on edit or add were used to access site
                            <button id="back-button" onClick={onBack}>BACK</button>
                        ) : (
                            <button id="delete-button" onClick={onDelete} >DELETE DRAFT</button>
                        )}
                        <button form="addFolderForm" type="submit">ADD</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
