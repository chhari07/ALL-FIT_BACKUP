import React from 'react';
import './Workout.css'; // Assuming the CSS is saved in Workout.css

const Workout = () => {
  return (
    <div >
     <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,600,700&display=swap" rel="stylesheet" />
<div class="layout">
  <input name="nav" type="radio" class="nav home-radio" id="home" checked="checked" />
  <div class="page home-page">
    <div class="page-contents">
      <h1 className='text-white'>Home</h1>
      <p className='text-white'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptates dolore id aspernatur odit minus quidem deleniti ab rerum exercitationem dolores neque officiis explicabo possimus blanditiis sed, voluptatem ut. Ab?
        
    </p>
     
    </div>
  </div>
  <label class="nav" for="home">
    <span className=' text-black'>
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      Home
    </span>
  </label>

  <input name="nav" type="radio" class="about-radio" id="about" />
  <div class="page about-page">
    <div class="page-contents">
      <h1 className='text-white'>About</h1>
      <p className='text-white'>
      Amet consectetur adipisicing elit. Sed ipsam ad exercitationem, quo quae ullam, quidem laudantium corporis quis minima debitis nesciunt repellat. Quos dolore ex quis voluptas, minus ut?
      </p>
    </div>
  </div>
  <label class="nav" for="about">
    <span  className=' text-black'>
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
    About
      </span>
    </label>

  <input name="nav" type="radio" class="contact-radio" id="contact" />
  <div class="page contact-page">
    <div class="page-contents">
      <h1 className='text-white'>Contact</h1>
      <p className='text-white'>
        Eaque accusamus magnam error unde nam, atque provident omnis fugiat quam necessitatibus vel nulla sed quibusdam fuga veritatis assumenda alias quidem asperiores?
      </p>
    
    </div>
  </div>
  <label class="nav" for="contact">
    <span  className=' text-black'>
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
    Contact
      </span>
    
  </label>
</div>
    </div>
  );
}

export default Workout;
