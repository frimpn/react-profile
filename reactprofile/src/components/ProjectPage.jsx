import React from 'react'
import Projects from './Projects'
import projectData from '../projectData.json'



function ProjectPage() {

  return (
    <>    
       

     { projectData.map((projectObj) =>(
        <Projects

        id = {projectObj.id}     
        title = {projectObj.title}     
        image = {projectObj.img}    
         github = {projectObj.github}     
         page = {projectObj.page}
        />

     ))
     }
         









      
</>

    
  )
}

export default ProjectPage