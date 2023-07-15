import React from 'react';
import '../styles/globals.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import Head from './components/Head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (


    <div>
      <Head/>
      <Navbar />
      <Component {...pageProps} />
    
    </div>
   
  )
 
  
}

export default MyApp
