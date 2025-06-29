import {createContext, useContext,useState,useEffect} from  "react"
import {initializeApp} from 'firebase/app'
import {getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
onAuthStateChanged,} from 'firebase/auth'
import {getFirestore,collection,addDoc,getDocs} from 'firebase/firestore'

const FirebaseContext = createContext(null)

export const useFirebase =()=> useContext(FirebaseContext)

const firebaseConfig = {
  apiKey: "AIzaSyBGP2Q7e7wBuoG1wKYtYN9wliZCuv6IsJA",
  authDomain: "bookify-df090.firebaseapp.com",
  projectId: "bookify-df090",
  storageBucket: "bookify-df090.firebasestorage.app",
  messagingSenderId: "784934685664",
  appId: "1:784934685664:web:b7922006f0e68303f7f985"
};
const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const googleAuth = new GoogleAuthProvider()
const firestore = getFirestore(firebaseApp)

export const FirebaseProvider = (props)=>{

  const [user,setUser] = useState(null)

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth,(user)=>{
      console.log('User',user)
      if (user) setUser(user)
        else setUser(null)
    })
  },[])

  const signupUserWithEmailAndPassword = (email,password)=>{
    createUserWithEmailAndPassword(firebaseAuth,email,password)
  }

  const signinUserWithEmailAndPassword = (email,password)=>{
    signInWithEmailAndPassword(firebaseAuth,email,password)
  }

  const signinWithGoogle = ()=>signInWithPopup(firebaseAuth,googleAuth)

  const isLoggedIn = user ? true : false;

  const handleCreateNewListing = async (name,isbnNo,price)=>{
    return await addDoc(collection(firestore,'books'),{
      name,
      isbnNo,
      price,
      userId:user.uid,
      userEmail:user.email,
      displayName:user.displayName,
      photoUrl:user.photoURL
    })
  }

  const listAllBooks = ()=>{
    return getDocs(collection(firestore,'books'))
  }
  
    return(
    <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,signinUserWithEmailAndPassword,signinWithGoogle,isLoggedIn,handleCreateNewListing,listAllBooks}}>
        {props.children}
    </FirebaseContext.Provider>
    )
}