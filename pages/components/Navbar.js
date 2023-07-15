import React from "react";
import Link from 'next/link';
import Image from 'next/image'





function Navbar(){
    return (
        
       <> <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">
                    <img  src="https://www.sebastienbouyssou.com/wp-content/uploads/2009/10/imagerep01.jpg"
                        alt="Picture of the author"
                        width={156}
                        height={105}></img>
                </a>
                <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                   <span class="navbar-toggler-icon"></span>
                </label>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Accueil </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/candidature">Candidatures</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">voter</a>
                        </li>
                        
                        
                    </ul>
                    
                </div>
            </nav>
            
    </div></>
    )
}

export default Navbar