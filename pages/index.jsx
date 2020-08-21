import React from 'react';

export default function Home() {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <div className="mb-auto">
        <div>
          <h3 className="float-md-left mb-0">Cover</h3>
        </div>
      </div>

      <div className="px-3">
        <h1>Hi, I'm Andrew</h1>
        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p className="lead">
          <a
            href="/contact"
            className="btn btn-lg btn-primary font-weight-bol"
          >
            Contact Me
          </a>
        </p>
      </div>

      <div className="mt-auto text-white-50" />
    </div>
  );
}
