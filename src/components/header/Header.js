import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'><h1>Mok</h1></Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <a href='https://www.github.com/21x37' target='_blank'>Github</a>
        </div>
    );
};

export default Header;