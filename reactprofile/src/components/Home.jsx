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
    <h3>About me</h3>
    <p>


Hello there! I'm Nana, a passionate frontend developer with a knack for crafting immersive digital experiences. I thrive on bringing creative ideas to life through clean, efficient code and captivating designs.
My journey into the world of web development began with a fascination for how technology can transform our daily interactions. Over the years, I've honed my skills in HTML, CSS, and JavaScript, constantly staying ahead of the latest trends and technologies in frontend development.
What truly sets me apart is my commitment to user-centric design. I believe that great software should not only look stunning but also provide seamless functionality and intuitive navigation. Whether I'm designing a sleek user interface or optimizing performance for mobile devices, I always keep the end user in mind.
I thrive in dynamic environments where I can brainstorm ideas, to achieve my goals. I value open communication, constructive feedback, and a shared passion for innovation.
When I'm not coding, you can find me playing or watching sports such as football and basketball , or immersing myself in a good book. I believe in maintaining a healthy work-life balance to stay inspired and energized in everything I do.
I'm excited about the opportunity to contribute to meaningful projects, tackle new challenges, and continue pushing the boundaries of frontend development. Let's collaborate and build something incredible together!


    </p>
    </section>
    <img src= {images} alt='avatar' style={home.image}/>
   </main>
    </>
  )
}

export default Home