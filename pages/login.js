import React, {SyntheticEvent, useState} from 'react';
import Head from "next/head";
import {useRouter} from "next/router";
import Link from 'next/link'
import { hasCookie, setCookie } from 'cookies-next'

export default function Login() {



    const router = useRouter()

    if (hasCookie('userToken')) {
      router.push('/voter')
    }

    const jwt = require('jsonwebtoken');

    const [userID, setUserID] = useState(0)
    const [password, setPassword] = useState("")


    const handleSubmit = async (e) => {

        e.preventDefault()

        const credentials = {userID, password}
      
          const JSONdata = JSON.stringify(credentials)
    
          const options = {
    
            method: 'POST',
    
            headers: {
              'Content-Type': 'application/json',
            },
            
            body: JSONdata,
          }
    
          const response = await fetch('/api/connect', options)

          const result = await response.json()

          if (result.length === 1) {
                const user = result[0]
                const payload = {
                    userID: user.userID,
                    //hasVoted: user.hasVoted
                  };
                const userToken = jwt.sign(payload, 'ABCD', { expiresIn: '1d'} )
                console.log(user)
                setCookie("userToken", userToken)
                await router.push('/voter')
          }
          else {
            alert("Vos identifiants sont incorrects")
          }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <input type="number" 
                    className="form-control" 
                    placeholder="Numéro d'électeur" 
                    required
                    onChange={(e) => setUserID(e.target.value)}/>

                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    required
                    onChange={(e) => setPassword(e.target.value)}/>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>

            <h2 className='center'>Pas de compte?</h2>
            <p><Link href='/register'><a> Inscrivez-vous</a></Link></p>
        </div>
    );
};
