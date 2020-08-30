import React from 'react';
import './styles.css'
import shieldIcon from '../../assets/images/icons/shield.png'

function PageFooter(){
    return(
        <footer className="footer">
            <a 
                href="https://github.com/lucasrennok" 
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>
                    <img src={shieldIcon} id="shieldIcon" alt="shield icon"/>
                    lucasrennok
                </h2>
            </a>
        </footer>
    );
}

export default PageFooter;