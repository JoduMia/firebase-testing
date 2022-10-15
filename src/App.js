import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import app from "./firebase/firebase.init";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSigIn = (g) => {
    const a = g ? githubProvider: googleProvider;
    console.log(a);
    signInWithPopup(auth, a)
  .then((result) => {
    const user = result.user;
    setUser(user);
    console.log(user);
  }).catch((error) => {
    console.error(error);
  });
  };

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      setUser({});
      console.log('got out signed');
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };


  return (
    <div>
      {
      !(user.uid) ?
      <div>
        <button onClick={() => handleSigIn()}>Google sign In</button>
        <button onClick={() =>handleSigIn(true)}>Github sign In</button>
      </div> :

      <button onClick={handleSignOut}>sign Out</button>

      }

      {
        user.uid && <h1>userName: {user.email}</h1>
      }
    </div>
  );
}

export default App;
