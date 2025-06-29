import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';

const List = () => {
    const firebase = useFirebase()
    const [name,setName] = useState('')
    const [isbnNo,setIsbnNo] = useState('')
    const [price,setPrice] = useState('')
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        await firebase.handleCreateNewListing(name,isbnNo,price)
    }

  return (
    <div className='container mt-5'>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Book Name</Form.Label>
        <Form.Control type="text" placeholder="Enter book name" onChange={e=>setName(e.target.value)} value={name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter ISBN Number</Form.Label>
        <Form.Control type="text" placeholder="Enter ISBN No" onChange={e=>setIsbnNo(e.target.value)} value={isbnNo}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="text" placeholder="Enter book price" onChange={e=>setPrice(e.target.value)} value={price}/>
      </Form.Group>

      <Button variant="primary" type="submit">
       Create
      </Button>
    </Form>
    
    </div>
  )
}

export default List