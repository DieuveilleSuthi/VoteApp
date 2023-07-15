
import React from "react";
import Head from 'next/dist/shared/lib/head';
import Catalogue from "./components/Catalogue"
import Footer from "./components/Footer"




function Candidature () {
    return (
        <><div>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        </div>
        <div>

            <Catalogue/>
            <Footer/>
        </div></>
    )
}
export default Candidature