import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFirebase} from '../context/Firebase'
import {useNavigate} from 'react-router-dom'

const Register = () => {

  const firebase = useFirebase();
  const navigate = useNavigate()

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  useEffect(()=>{
        if(firebase.isLoggedIn){
            //Navigate to Home page
            navigate('/')
        }
    },[firebase,navigate])   

  const handleSubmit = async (e)=>{
    e.preventDefault(); // To avoid refreshing form on submit
    await firebase.signupUserWithEmailAndPassword(email,password)
    //window.alert("SignUp successful")
  }

  return (
    <div className='container mt-5'>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} value={email}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} value={password}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Account
      </Button>
    </Form>
    </div>
  )
}

export default Register