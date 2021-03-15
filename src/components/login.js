import React, { useState/* , useEffect  */ } from 'react';
import firebase from "../secret/firebase";
import "firebase/auth";

export const Login = (props) => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMessage] = useState("");



    const signUp = (email, password) => {
        console.log("fire signUp!!")
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log("weeeeepy!");
                console.log(JSON.stringify(user));
                setMessage("success! "+ JSON.stringify(user));
                // ...
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
                setMessage(errorMessage);
                // ..
            });
    }

    const logIn = (email, password) => {
        console.log("fire login!!")
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log("success!!")
                setMessage("success! "+ JSON.stringify(user));
                // ...
            })
            .catch((error) => {
                var errorMessage = error.message;
                setMessage(errorMessage);
            });
    }

    const submitForm = (e, option) => { //logIn \ SignUp
        e.preventDefault();
        if (name !== "" && password!== "") {
            if (option === "SignUp")
            signUp(name, password);
            if (option === "logIn")
            logIn(name, password);
        }
        setName('');
        setPassword('');
        
    }




    return (
        <span>

<form style={{ textAlign: 'left' }}>
                <div>
                    <label>
                        <input
                            type="text"
                            maxLength="25"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="enter email"
                        />
                    </label>
                </div>  <div>
                    <label>
                        <input
                            type="text"
                            maxLength="25"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="enter password"
                        />
                    </label>
                </div>
                <button onClick={(e) => submitForm(e,"SignUp")}>Sign Up</button>
                <button onClick={(e) => submitForm(e,"logIn")}>Log In</button>
                    </form><br />

                    <span className="">
                        {msg}
                    </span>

    </span>
);


}

