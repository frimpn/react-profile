import React from 'react'
import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      message: ''
    })

    const handleInputChange = (e) => {
       const {name,value} = e.target

       setFormData({
        ...formData,
        [name]: value
       })
    }

    const handleFormSubmit = (e) =>{
      e.preventDefault()
      if(!formData.fullName || !formData.email){
        alert('Please fill out email or name')
        return
      }else{
      alert(` Hello ${formData.fullName} your message has been sent`)
      }

      setFormData({
        fullName: '',
      email: '',
      message: ''
      })
    }
  return (
    <div className='contact-container'>
    <h1>My contact details: </h1>
    <div className='contact-details' >
    <p> Email: <a href='mailto:frimpongnana8@gmail.com'> frimpongnana8@gmail.com </a></p>
    <p> Github: <a href='https://github.com/frimpn' target='_blank'>frimpn</a> </p>
    <p> Linkedin: <a href='https://www.linkedin.com/in/nana-amankwah-82787b200/'  target='_blank'> Nana Linkedin</a> </p>
    <p> My CV: <a href='https://docs.google.com/document/d/1R5ZzC_Xo64kPe4sLOLussA3KWF3sB6Fa/edit?usp=sharing&ouid=101628047014905093722&rtpof=true&sd=true'  target='_blank'>CV</a></p>
  </div>

  <h2>Contact form</h2>
  <form className='form'>
    <input 
    value={formData.fullName}
    name="fullName"
    onChange={handleInputChange}
    type='text'
    placeholder='Please enter you fullname'




    />


    <input 
    value={formData.email}
    name='email'
    onChange={handleInputChange}
    type='text'
    placeholder='Please enter your email'

    />

    <textarea
    value={formData.message}
    name='message'
    onChange={handleInputChange}
    rows ="4"
    cols="50"
    placeholder='please enter message'

    
    
    ></textarea>


<button
type='button'
onClick={handleFormSubmit}
>
Submit
</button>



  </form>
  
  
  </div>
  
    
  )
}

export default Contact