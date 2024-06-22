import React, { useEffect } from 'react';
import './Interests.css';

const interests = [
    'Druk 3D',
    'Elektronika',
    'Lutowanie',
    'Projektowanie 3D',
    'Jazda na rowerze',
    'Narciarstwo',
    'Kosmonautyka',
    'Psychologia',
    'Kryptografia'
];

const Interests = () => {
    useEffect(() => {
        const interestElements = document.querySelectorAll('.interest');

        const getRandomColor = () => {
            const r = Math.floor(Math.random() * 200);
            const g = Math.floor(Math.random() * 200);
            const b = Math.floor(Math.random() * 200);
            return `rgb(${r}, ${g}, ${b})`;
        };

        interestElements.forEach(interest => {
            interest.addEventListener('mouseover', function () {
                const randomColor = getRandomColor();
                this.style.backgroundColor = randomColor;
            });
        });
    }, []);

    return (
        <div className="interests-section" id="hobby">
            <h2 className="neon-text-interests">Moje Hobby</h2>
            <div className="interests-list">
                {interests.map(interest => (
                    <div key={interest} className="interest">{interest}</div>
                ))}
            </div>
        </div>
    );
};

export default Interests;
