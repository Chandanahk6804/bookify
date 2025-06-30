import React ,{useEffect,useState}from 'react'
import { useFirebase } from '../context/Firebase'
import BookCard from '../components/Card'
import { CardGroup } from 'react-bootstrap';

const Home = () => {
    const firebase = useFirebase()
    const [books,setBooks] = useState([])

    useEffect(()=>{
        firebase.listAllBooks().then((books)=>setBooks(books.docs))
    },[])
    console.log(books)
  return (
    <div className='container'>
      <CardGroup>
        {books.map(book => (
          
          <BookCard key={book.id} {...book.data()} id={book.id}/>
        ))}
        </CardGroup>
    </div>
  )
}

export default Home