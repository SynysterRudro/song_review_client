import React from 'react';
import banner from '../../assests/img/banner.jpg'

const Home = () => {

    const myStyle = {
        backgroundImage:
            ` linear-gradient(rgba(180,30 ,25, 50), rgba(0, 0, 0, 0.5)),url(${banner})`,
        height: '80vh',

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    };

    return (
        <div className='my-6'>
            <div className='flex justify-center items-center' style={myStyle}>
                <h1 className='text-white text-center text-5xl font-serif'> Welcome to Music Mania
                    <span className='block text-xl'>Here you can give and watch song reviews</span>
                </h1>
            </div>
        </div>
    );
};

export default Home;