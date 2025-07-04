import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'  
import '../styles/Contact.scss'

export const Contact = () => {
  const navigate = useNavigate() 

  const [data, setData] = useState({
    name: '',
    email: '',
  })

  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleInputChange = (event) => {
    if (data.name.length + 1 < 3) {
      setMessage('Name must be at least 3 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`sending data… ${data.name} ${data.email}`)
    clearState()


    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  const initialState = {
    name: '',
    email: '',
  }

  const clearState = () => {
    setData({ ...initialState })
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        value={data.name}
        onChange={handleInputChange}
        name="name"
      />
      <input
        type="email"
        placeholder="email"
        value={data.email}
        onChange={handleInputChange}
        name="email"
      />

      <button type="submit" disabled={btnDisabled}>Enviar</button>
      <p>{message}</p>
    </form>
  )
}

export default Contact
