/* eslint-disable react/prop-types */
import React from 'react';
import SiteLayout from '../layouts/SiteLayout';
import 'bootstrap/scss/bootstrap.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </SiteLayout>
  );
}

export default MyApp;
