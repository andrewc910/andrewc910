import React from 'react';
import NextHead from 'next/head';

export default function Head() {
  return (
    <NextHead>
      <script src="js/popper/popper.min.js" />
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
