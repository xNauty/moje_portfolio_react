import React from 'react';
import './Menu.css';

function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');
}

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-toggle" onClick={toggleMenu}>☰</div>
            <ul className="menu-items">
                <li><a href="#socialmedia">Media społecznościowe</a></li>
                <li><a href="#about">O Mnie</a></li>
                <li><a href="#skills">Umiejętności</a></li>
                <li><a href="#hobby">Hobby</a></li>
            </ul>
            <a href="https://drive.google.com/file/d/1TNgR7ppPUmw0OiH8VC2Z2PrSdJBhqDlE/view?usp=sharing" className="cv-button" target="_blank" rel="noopener noreferrer">Moje CV</a>
        </div>
    );
};

export default Menu;
