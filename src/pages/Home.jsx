import React ,{useEffect,useState}from 'react'
import { useFirebase } from '../context/Firebase'

const Home = () => {
    const firebase = useFirebase()
    const [books,setBooks] = useState([])

    useEffect(()=>{
        firebase.listAllBooks().then((books)=>setBooks(books.docs))
    },[])
    console.log(books)
  return (
    <div className='container'>
        {books.map(book => <li>{book.data().name}</li>)}
    </div>
  )
}

export default Home