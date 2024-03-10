import React from 'react'
import hamburgerIcon from '../assets/hamburger.svg';
import youtubeIcon from '../assets/youtube.svg';
import userIcon from '../assets/usericon.png'

const Header = () => {
  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img className='h-8' alt="hamburger-icon" src={hamburgerIcon}/>
        <img className='h-8 ml-4' alt="youtube-icon" src={youtubeIcon}/>
      </div>

      <div className='col-span-10'>
        <input type="text"/>
        <button>Search</button>
      </div>

      <div className='col-span-1'>
        <img className='h-8' alt="user-icon" src={userIcon}/>
      </div>

    </div>
  )
};

export default Header;
