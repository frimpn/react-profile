import React from 'react'
import { useState } from 'react'


function Contact() {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      message: ''
    })

    const handleInputChange = (e) => {
       const [name,value] = e.target

       setFormData({
        ...formData,
        [name]: value
       })
    }

    const handleFormSubmit = (e) =>{
      e.preventDefault()
      alert(` Hello ${formData.fullName} your message has been sent`)
      setFormData({
        fullName: '',
      email: '',
      message: ''
      })
    }
  return (
    <>
    <h1>My contact details: </h1>
    <p> Email: frimpongnana8@gmail.com </p>
    <p> Github: <a href='https://github.com/frimpn'>frimpn</a> </p>
    <p> Linkedin: <a href='https://www.linkedin.com/in/nana-amankwah-82787b200/'> Nana Linkedin</a> </p>
    <p> My CV: <a href='https://docs.google.com/document/d/1R5ZzC_Xo64kPe4sLOLussA3KWF3sB6Fa/edit?usp=sharing&ouid=101628047014905093722&rtpof=true&sd=true'>CV</a></p>
  

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
  
  
  
  
    </>
  )
}

export default Contact