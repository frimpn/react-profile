import React from 'react'
import images from '../images/834.jpg'
const home = {
    split:{
    display:'flex',
    },
    section:{
        
        
        width: '50%',
        height: '100vh'
    },

    image:{
        height: '40%',
        width:'50%'
    }
}
function Home() {
  return (
    <>
    <main  style={home.split}>
    <section style={home.section}>
    <h1>Hello, my name is Nana Amankwah</h1>
    <p>Welcome to my portfolio I am a front-end developer</p>
    </section>
    <img src= {images} alt='avatar' style={home.image}/>
   </main>
    </>
  )
}

export default Home