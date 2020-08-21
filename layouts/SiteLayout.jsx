/* eslint-disable react/prop-types */
import React from 'react';
import Head from '../components/Head';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function SiteLayout({ children }) {
  return (
    <div>
      <Head />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
