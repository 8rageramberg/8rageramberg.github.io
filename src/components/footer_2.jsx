import React, { useEffect } from 'react';



function Footer({ onAdd, onBack, onDelete, adjustPageExtension, showBackButton }) {


    useEffect(() => {
        adjustPageExtension();
    }, [adjustPageExtension]);


  
    return (
        <div id="page-extension">
            <footer className="footer">
                <div className="footer-container">
                    <div className="end-buttons">
                        {showBackButton ? (
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