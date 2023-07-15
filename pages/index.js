import React from 'react';
import Head from 'next/dist/shared/lib/head';
import 'tachyons';

import Footer from "./components/Footer"


export default function Home() {


  return (
    
    <div >
      
      <main >
        <div className='bloc1'>
          <div className='text1'>
            <h1>Bloquez votre dimanche 19 juin, vous avez déjà quelque chose de prévu</h1>
            <p>Retrouvez toutes les informations sur notre site internet</p>
            <div className='btn'>
              <button className='btn1'>J'accède aux Programmes</button>
              <button className='btn2'>Je donne Procuration</button>
            </div>
          </div>
          <div className='text2'>
            <br></br><h2>Les 12 et 19 juin<br></br>Allons Voter!</h2>
          </div>
        </div>
        <div className='bloc2'>
          <div className='text3'>
              <p>Text Publication</p>
              <p>Text Publication</p>
              <p>Text Publication</p>
              <p>Text Publication</p>
              <p>Text Publication</p>
          </div>
          <div className='text4'>
              <p>Text Publication</p>
              <p>Text Publication</p>
              <p>Text Publication</p>
              <p>Text Publication</p>
              <p>Text Publication</p>
          </div>
        </div>
    </main>
      <Footer/>
      

    


      
    </div>
    
  )
}
