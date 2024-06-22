import React, { useEffect } from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const clock = `${hours}:${minutes}:${seconds}`;

            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const date = now.toLocaleDateString('pl-PL', options);

            document.getElementById('clock').textContent = clock;
            document.getElementById('date').textContent = date;
        };

        setInterval(updateTime, 1000);
        updateTime();
    }, []);

    const copyEmailToClipboard = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText('karolsys@gmail.com').then(() => {
            alert("+----------------------------------+\n" +
                " |                                                   |\n" +
                " |     Skopiowano adres email!      |\n" +
                " |     ▶ karolsys@gmail.com ◀     |\n" +
                " |                                                   |\n" +
                "+----------------------------------+\n");
        }).catch(err => {
            console.error('Nie udało się skopiować emaila:', err);
        });
    };

    return (
        <div className="full-screen-section" id="socialmedia">
            <div id="clock-container">
                <div id="clock"></div>
                <div id="date"></div>
            </div>
            <h1>Karol Syska</h1>
            <div className="color-changing-panel">
                <div className="social-links">
                    <a href="https://github.com/xNauty" target="_blank" rel="noopener noreferrer"><img src="ikony/github.png" alt="GitHub" /></a>
                    <a href="https://linkedin.com/in/karol-syska-61193818a/" target="_blank" rel="noopener noreferrer"><img src="ikony/linkedin.png" alt="LinkedIn" /></a>
                    <a href="https://instagram.com/x_nauty/" target="_blank" rel="noopener noreferrer"><img src="ikony/instagram.png" alt="Instagram" /></a>
                    <a href="https://facebook.com/xNauty" target="_blank" rel="noopener noreferrer"><img src="ikony/facebook.png" alt="Facebook" /></a>
                    <button onClick={copyEmailToClipboard} className="email-button"><img src="ikony/email.png" alt="Email" /></button>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;
