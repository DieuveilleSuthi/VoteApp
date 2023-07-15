import React from "react"
import Link from 'next/link'


function Footer () {
    return (
        <div>
            <footer className="py-3 my-4">
            <div className="container-fluid ">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
                    
                    <li className="nav-item ">
                    <Link href='/' ><button type="button" class="btn btn-primary link h-60" role ="button"> 
                            <a> Accueil </a></button>
                        </Link> 
                    </li>
                    
                     <li className="nav-item">
                        <Link href='/candidature' class =""><button type="button" class="btn btn-primary h-60" role ="button">
                            <a> Candidatures </a></button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/login' class =""><button type="button" class="btn btn-primary h-60" role ="button">
                            <a>Voter</a></button>
                        </Link>
                    </li>
                
                </ul>
            </div>
            <p className="text-center text-muted">© 2022 EFREI-Chillers, Inc</p>
        </footer>
        </div>
    )
}
export default Footer


