import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./firebase/firebase.init";

const auth = getAuth(app);

function App() {

  const provider = new GoogleAuthProvider();

  const handleSigIn = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user);
  }).catch((error) => {
    console.error(error);
  });
  };

  return (
    <div>
      <button onClick={handleSigIn}>Google sign In</button>
    </div>
  );
}

export default App;
