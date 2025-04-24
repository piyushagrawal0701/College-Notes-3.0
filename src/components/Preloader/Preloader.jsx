import React from 'react';
import './preloader.css';
// import preloadergif from '../../assets/preloader.gif'
// import preloadergifmob from '../../assets/preloader.gif'

const Preloader = () => {
    
  
  return (
    <>
      {/* <!-- ------------ PRELOADER ---------  --> */}
      <div className="grid items-center place-items-center sm:pt-[25%] pt-[90%] justify-center  ">
          <div className='spinner'></div>
          {/* <div className='sm:hidden block'><img src={preloadergifmob} alt="" className='object-center ' /></div> */}
          {/* You can customize the preloader further with CSS or use an actual loading animation */}
        </div>


    </>
  );
};

export default Preloader;
