import React from 'react'
import Projects from './Projects'
import projectData from '../projectData.json'

let projectPage ={
  h1: {
    color: 'white',
    fontSize: 60,
    textAlign: 'center'
  },
  pageBody: {
    display : 'flex',
    flexWrap : 'wrap',
    
  }
  
}


function ProjectPage() {

  return (
    <>    
       <h1 style={projectPage.h1}>My Projects</h1>
       <div style={projectPage.pageBody}>
 
     { projectData.map((projectObj,i) =>(
        <Projects

          key = {i}
        title = {projectObj.title}     
        image = {projectObj.img}    
         github = {projectObj.github}     
         page = {projectObj.page}
        />

     ))
     }
         



</div>





      
</>

    
  )
}

export default ProjectPage