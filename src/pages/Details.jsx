import React, {useEffect, useState}from 'react'
import {useParams} from 'react-router-dom'
import { useFirebase } from '../context/Firebase'
import { Button } from 'react-bootstrap'

const Details = () => {
    const params = useParams()
    const firebase = useFirebase()

    const [data,setData] = useState(null)

    useEffect(()=>{
        firebase.getBookById(params.bookId).then(value=>setData(value.data()))
    },[])

    if(data == null) return <h1>Loading</h1>

  return (
    <div className='container mt-5'>
        <h1>{data.name}</h1>
        <h1>Details</h1>
        <h4>ISBN No: {data.isbnNo}</h4>
        <h4>Price: Rs.{data.price}</h4>
        <h1>Owner details</h1>
        <p>Email: {data.userEmail}</p>
    </div>
  )
}

export default Details