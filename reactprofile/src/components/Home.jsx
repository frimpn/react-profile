import React from 'react'
import images from '../images/834.jpg'
import './Home.css'

function Home() {
  return (
    <>
    <main  className='home-main'>
    <section className='home-section'>
    <h1>Hello, my name is Nana Amankwah</h1>
    <p>Welcome to my portfolio I am a front-end developer</p>
    <h3>About me</h3>
    
    <p>
  Hi there! I'm Nana, a passionate frontend developer on a mission to create captivating 
  digital experiences. My journey into web development was ignited by a fascination with technology's transformative power. 
  With expertise in HTML, CSS, and JavaScript, I specialize in crafting elegant and intuitive user interfaces. 
  I thrive in dynamic environments, where collaboration and innovation drive success. Outside of coding, you'll find me immersed in sports, books, and seeking inspiration from the world around me. 
  Let's connect and bring your ideas to life!
</p>

    </section>
    <img src= {images} alt='avatar' className='home-image'/>
   </main>
    </>
  )
}

export default Home


