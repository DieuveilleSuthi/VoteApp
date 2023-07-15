
import React, { useEffect, useState } from "react"
import user from "./login.js";
import { Avatar, Grid, styled } from "@nextui-org/react";
import axios from "axios";
import Head from "next/head.js";
import { set } from "react-hook-form";
import { useRouter } from 'next/router'
import Link from "next/link.js";
import { getCookie, setCookie, deleteCookie, hasCookie } from 'cookies-next';
import jwtDecode from 'jwt-decode'
const candidats = require("./api/candidats.js")





export default function Voter () {


    const getUser =  () => {

        const connected = hasCookie('userToken')
    
       if (connected) {
        
        const result = jwtDecode(getCookie('userToken'))
        console.log(result)
          return result
       }

    }

    const user = getUser()

    
    //Pour avoir le hasVoted(aVoté) :
    // const hasVoted = user.hasVoted;

    //console.log(user.hasVoted)



    
    const [vote, setVote] = useState('');
    //const [aVoté, SetAVoté] = useState(user.hasVoted);
    const [success, setSuccess] = React.useState(false);
    const router = useRouter()
    const [name, setName] = React.useState("");
    //////////////

    const [message, setMessage] = useState('');
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch('http://localhost:3000/api/connect', {
                        credentials: 'include',
                    });

                    const content = await response.json();

                    setMessage(`Bonjour ${content.userID}`);
                    setAuth(true);
                } catch (e) {
                    setMessage('You are not logged in');
                    setAuth(false);
                }
            }
        )();
    });

    ////////////////

    const handleChange = (e) => {

        setVote(e.target.value),
        setName(showName(e))
     //   console.log(vote)
    }

function showName(e) {
    for (var i=0; i< candidats.length ; i++) {
        if(candidats[i].candidateID == e.target.value){
            console.log(name);
            return candidats[i].firstName + " " + candidats[i].lastName
        }
    }
}

/*function redirect (){
    if (aVoté == true){
      //  router.push('candidature.js')
      alert("vous avez bien voté");
    }
}*/

    async function  handleSubmit(e){
        
        let len = vote.length;
        console.log(len)
        if (len <=0) {
            alert("VEUILLEZ SELECTIONNER UN CANDIDAT");
            e.preventDefault();
            return false;
        } 
        else {
        
            e.preventDefault()

            const data = {
              candidateID: vote,
              userID: user.userID,
            }
        
            const JSONdata = JSON.stringify(data)
      
            const options = {
       
              method: 'POST',
            
              headers: {
                'Content-Type': 'application/json',
              },
              
              body: JSONdata,
            }
      
            const response = await fetch('/api/vote', options)
      
            const result = await response.json()
            console.log(result)
           // console.log('avant :' + aVoté )
            console.log("valeur : " + result.retour)
           // SetAVoté(result.retour);
            //console.log('après :' + aVoté )
            redirect();
            

        }

    }

    





    


    return (
    <>
    <div>
        <div auth={auth}>
            {message}
        </div>
        <div id="titre">
            <h1 className="centre"> Vous votez pour {name} </h1>
        </div>
        <center>
        <form onSubmit={handleSubmit}>
        <div id="vote_container" > 
            
                <div className="radio">
                <label htmlFor="macron">
                    <input 
                    type="radio"
                    name="vote"
                    value="7"
                    id="macron"
                    checked={vote === 'macron'}
                    onChange={handleChange}
             
                    />
      
                     <Avatar pointer='true'  className="photo_candidats" src={candidats[6].photo} size="xl"/>
                     <h5>Emmanuel Macron </h5>
                     </label>
                    
                </div>

                <div className="radio">
                <label htmlFor="mélenchon">
                <input 
                    type="radio"
                    name="vote"
                    value="8"
                    id="mélenchon"
                    onChange={handleChange}
                    checked={vote === 'mélenchon'} />
                    <Avatar pointer='true' className="photo_candidats"  src={candidats[7].photo} size="xl"  />
                    <h5>Jean-Luc Mélenchon</h5>
                   
               </label>
        
                </div>  
                <div className="radio">
                <label htmlFor="arthaud">
                <input 
                    type="radio"
                    name="vote"
                    value="1"
                    id="arthaud"
                    onChange={handleChange}
                    checked={vote === 'arthaud'} />
                    <Avatar pointer='true' size="xl" src={candidats[0].photo} className="photo_candidats" />
                <h5>Nathalie Arthaud</h5>
                
                </label>
                </div>  

                <div className="radio">
                <label htmlFor="dupontAignan">
                <input 
                    type="radio"
                    name="vote"
                    value="2"
                    id="dupontAignan"
                    onChange={handleChange}
                    checked={vote === 'dupontAignan'} />
                    <Avatar pointer='true' size="xl" src={candidats[1].photo} className="photo_candidats" />
                <h5>Nicolas Dupont-Aignan</h5>
                
                </label>
                </div>  

       

                <div className="radio">
                <label htmlFor="hidalgo">
                <input 
                    type="radio"
                    name="vote"
                    value="3"
                    id="hidalgo"
                    onChange={handleChange}
                    checked={vote === 'hidalgo'} />
                    <Avatar src={candidats[2].photo} size="xl" pointer="true" className="photo_candidats" />
                <h5>Anne Hidalgo</h5>
                     </label>
                </div>

                <div className="radio">
                <label htmlFor="jado">
                <input 
                    type="radio"
                    name="vote"
                    value="4"
                    id="jado"
                    onChange={handleChange}
                    checked={vote === 'jado'} />
   
                    <Avatar src={candidats[3].photo} size="xl" pointer="true" className="photo_candidats" />
                <h5>Tannick Jado</h5> 
                </label>
                </div>

                <div className="radio">
                <label htmlFor="lassalle">
                <input 
                    type="radio"
                    name="vote"
                    value="5"
                    id="lassalle"
                    onChange={handleChange}
                    checked={vote === 'lassalle'} />
                    <Avatar src={candidats[4].photo} size="xl" pointer="true" className="photo_candidats" />

                <h5>Jean Lassalle</h5>
                 </label>
                                    
                </div>
                <div className="radio">
                <label htmlFor="le_pen">
       
                <input 
                    type="radio"
                    name="vote"
                    value="6"
                    id="le_pen"
                    onChange={handleChange}
                    checked={vote === 'le_pen'}/>
                     <Avatar src={candidats[5].photo} size="xl" pointer="true" className="photo_candidats" />
                    <h5>Marine Le Pen </h5>
                    </label>
                    </div>
                    <div className="radio">
                    <label htmlFor="pécresse">
                <input 
                    type="radio"
                    name="vote"
                    value="9"
                    id="pécresse"
                    onChange={handleChange}
                    checked={vote === 'pécresse'} />
                    <Avatar src={candidats[8].photo} size="xl" pointer="true" className="photo_candidats" />
                   <h5> Valérie Précresse </h5>
                    </label>
                    </div>       
                    <div className="radio" >

           
                    <label htmlFor="poutou"> 

                <input 
                    type="radio"
                    name="vote"
                    value="10"
                    id="poutou"
                    onChange={handleChange}
                    checked={vote === 'poutou'} />
                    <Avatar src={candidats[9].photo} size="xl" pointer="true" className="photo_candidats" />
                   <h5> Philippe Poutou</h5>
                    </label>
                    </div>

                    <div className="radio">
                    <label htmlFor="roussel"> 
                    <input 
                    type="radio"
                    name="vote"
                     value="11"
                     id="roussel"
                     onChange={handleChange}
                     checked={vote === 'roussel'} />
                     <Avatar src={candidats[10].photo} size="xl" pointer="true" className="photo_candidats" />
                     <h5> Fabien Roussel</h5>
                      </label>
                      </div>

                      <div className="radio">
                    <label htmlFor="zemmour"> 
                    <input 
                    type="radio"
                    name="vote"
                     value="12"
                     id="zemmour"
                     onChange={handleChange}
                     checked={vote === 'zemmour'} />
                     <Avatar src={candidats[11].photo} size="xl" pointer="true" className="photo_candidats" />
                     <h5> Eric Zemmour</h5>
                      </label>
                      </div>
        </div>
        

        </form>
        </center>
    </div>
</>

    )
}

