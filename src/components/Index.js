import React from 'react';
import Header from './header/Header';
import HomePage from './homePage/HomePage';



// Home Page


const Index = () => {
    return (
        <div className='homepage'>
            <Header />
            <HomePage/>
            <p>Index.js</p>
        </div>
    )
}

export default Index;