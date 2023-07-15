import React from "react"
import {useRef, useState, useEffect} from 'react';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register'; 

function register () {
    const userRegRef = useRef();
    const errRef = useRef();


    const [userReg, setUserReg] = useState('');
    const [mailReg, setMailReg] = useState('');
    const [success, setSuccess] = useState(false);

    const [pwdReg, setPwdReg] = useState('')
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
 
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');

   

   
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwdReg));
        setValidMatch(pwdReg === matchPwd);
    }, [pwdReg, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [userReg, pwdReg, matchPwd])



    const handleSubmit = async () => {
        console.log(userReg, mailReg, pwdReg);
        
        const v2 = PWD_REGEX.test(pwdReg);
        if (!v2) {
            setErrMsg("Champ invalide");
            return;
        }

        const update = {
            userID: userReg,
            email: mailReg,
            password: pwdReg
            };
    
    
            
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
            },
           body: JSON.stringify(update),
            };
       
            fetch('http://localhost:3000/api/reg', options).then(data => {
                 if (!data.ok) {

                     throw Error(data.status);
                 }
                 return data.json();
                 
             }).then(update => {
                console.log(update);
            
          }).catch(e => {
          console.log(e);
          });
    
        setSuccess(true);
    }
    return (
        <>
        {success ? (
                <section className="centre">
                    <h1>Vous êtes inscrite!</h1>
                    <br />
                    <p>
                    <button type="button" className="btn"><a href="/login"> Connectez vous! </a></button> 
                    </p>
                </section>
            ) : (
             <div>
                <main className="form-signin w-100 m-auto">
                    <div className="container-md">
                        
                            <h1 className="h3 mb-3 fw-normal">Veillez vous inscrire</h1>
                            
                            <div className="container-sm">
                                <div className="form-floating ">
                                    <div>
                                    <label htmlFor="floatingInput">Identifiant</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="floatingInput" 
                                        placeholder="identifiant"
                                        ref={userRegRef}
                                        autoComplete="off"
                                        onChange={(e) => setUserReg(e.target.value)} 
                                        value={userReg}
                                        required
                                       
                                       
                                    />
                                     
                                    
                                    </div>
                                    <br />

                                    <div>
                                    <label htmlFor="floatingEmail">Adresse mail</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="floatingEmail" 
                                        placeholder="email"
                                        autoComplete="off"
                                        onChange={(e) => setMailReg(e.target.value)} 
                                        value={mailReg}
                                        required
                                       
                                    />
                                    <br/>
                                    
                                    <div>
                                    
                                   
                                    <label htmlFor="floatingPassword">
                                        Mot de passe
                                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validPwd || !pwdReg ? "hide" : "invalid"} />
                                    </label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="floatingPassword" 
                                        placeholder="Password"
                                        autoComplete="off"
                                        onChange={(e) => setPwdReg(e.target.value)} 
                                        value={pwdReg}
                                        required
                                        aria-invalid={validPwd ? "false" : "true"}
                                        aria-describedby="pwdnote"
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)}
                                       
                                    />
                                     <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                     <FontAwesomeIcon icon={faInfoCircle} />
                                     8 à 24 charactères.<br />
                                     Doit inclure des lettres majuscules et minuscules, un chiffre et un caractère spécial.<br />
                                     Caractères spéciaux autorisés : <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                    </p>
                                    </div>
                                    <br/>
                                    <div>
                                    <label htmlFor="floatingPassword">
                                        Confirmation de Mot de passe:
                                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                        
                                    </label>
                                    <input 
                                        type="password"
                                        className="form-control" 
                                        id="floatingPassword" 
                                        placeholder="Password"
                                        autoComplete="off"
                                        onChange={(e) => setMatchPwd(e.target.value)}
                                        value={matchPwd}
                                        required
                                        aria-invalid={validMatch ? "false" : "true"}
                                        aria-describedby="confirmnote"
                                        onFocus={() => setMatchFocus(true)}
                                        onBlur={() => setMatchFocus(false)}
                                       
                                    />
                                     <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                     <FontAwesomeIcon icon={faInfoCircle} />
                                     Doit correspondre au premier champ de saisie du mot de passe.
                                     </p>

                                    </div>
                                </div>
                                    
                                    
                                       
                                 </div>
                            </div>
                            <br/>
                                <button className="w-10 btn btn-lg btn-primary" type="submit" disabled={!validPwd || !validMatch ? true : false} onClick={handleSubmit} >S'inscrire</button>
                                <p className="mt-5 mb-3 text-muted">© 2022–2023</p>
                            
                    </div>


                </main>
         </div>
            )}
        </>
  
    )
}
export default register