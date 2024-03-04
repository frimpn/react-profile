import React from 'react'
 import './Project.css'

 
function Projects(props) {
   console.log(props)
  return (
    
       <div className="card"  >
    <img src={props.image} className="card-img-top" alt="..." />
     <div className="card-body">
      <h5 className="card-title text-danger">{props.title}</h5>
      <a href={props.github} target='_blank' className="btn btn-primary">Github page</a>
      <a href={props.page} target='_blank' className="btn btn-primary">Deplyod Page</a>
    </div>
  </div>
  
  )
}

export default Projects