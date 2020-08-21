import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.querySelector('#home').style.height = `${window.innerHeight}px`;
  });
  return (
    <div id="home" className="position-relative overflow-y-hidden p-3 p-md-5 text-center bg-light">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">Hi, I'm Andrew</h1>
        <p className="lead font-weight-normal">I am software developer. I like Ruby, Javascript and Crystal</p>
        <a className="btn btn-outline-secondary" href="/contact">Contact Me</a>
      </div>
      <div className="product-device shadow-sm d-none d-md-block" />
      <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
    </div>
  );
}
