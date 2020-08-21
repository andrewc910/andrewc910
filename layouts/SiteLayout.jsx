/* eslint-disable react/prop-types */
import React from 'react';
import Head from '../components/Head';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function SiteLayout({ children }) {
  return (
    <div>
      <Head />
      <div className="wrapper d-flex align-items-stretch">
        <NavBar />
        <main className="container">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
