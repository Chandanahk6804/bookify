import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';


const BookCard = (props) => {
    const firebase = useFirebase()
    const navigate = useNavigate()
  return (
    <div>
    <Card style={{ width: '18rem' ,marginTop:'10px',marginRight:'15px'}}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          The title of the book is "{props.name}" and it costs Rs.{props.price}
        </Card.Text>
        <Button variant="primary" onClick={e=> navigate(`/book/view/${props.id}`)}>View</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default BookCard
