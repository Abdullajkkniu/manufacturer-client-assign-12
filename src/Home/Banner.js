import React from 'react';
import '../Home/Banner.css';


const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{backgroundImage: `url(https://i.ibb.co/PrHGNPN/banner-2-1.jpg)`, backgroundSize:'cover'}}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Explore us</button>
    </div>
  </div>
</div>
    );
};

export default Banner;