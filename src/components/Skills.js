import React, { useEffect } from 'react';
import './Skills.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const skills = [
    { name: 'Python', level: 5 },
    { name: 'C++', level: 3 },
    { name: 'Arduino Language', level: 4 },
    { name: 'Java', level: 3 },
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 4 },
    { name: 'JavaScript', level: 4 },
    { name: 'AI Prompting', level: 5 },
    { name: 'SQL', level: 4 },
    { name: 'Skrypty (.bat , .ps1)', level: 4 },
    { name: 'Visual Studio Code', level: 5 },
    { name: 'Linux & Terminal', level: 4 },
    { name: 'Fusion 360', level: 4 },
    { name: 'Blender', level: 3 },
    { name: 'Home Assistant', level: 5 },
    { name: 'UltiMaker Cura', level: 4 },
];

const getRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

const Skill = ({ name, level }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <i key={index} className={`fas fa-star ${index < level ? 'filled' : ''}`}></i>
    ));

    return (
        <div className="skill">
            <div className="skill-name">{name}</div>
            <div className="skill-level">{stars}</div>
        </div>
    );
};

const Skills = () => {
    useEffect(() => {
        const skills = document.querySelectorAll('.skill');

        skills.forEach(skill => {
            skill.addEventListener('mouseenter', () => {
                skill.style.boxShadow = `0px 0px 20px 10px ${getRandomRgbColor()}`;
            });
            skill.addEventListener('mouseleave', () => {
                skill.style.boxShadow = 'none';
            });
        });
    }, []);

    return (
        <div className="skills-section" id="skills">
            <h2 className="neon-text-V">Moje Umiejętności</h2>
            <h3 className="skills-subheading">Języki programowania</h3>
            <div className="skills-list">
                {skills.map(skill => (
                    <Skill key={skill.name} name={skill.name} level={skill.level} />
                ))}
            </div>
        </div>
    );
};

export default Skills;
