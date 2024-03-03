import React from 'react'




function Projects(props) {
   console.log(props)
  return (
    
       <div className="card" key = {props.id} >
    <img src={props.image} className="card-img-top" alt="..."/>
     <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <a href={props.github} className="btn btn-primary">Github</a>
      <a href={props.page} className="btn btn-primary">Page</a>
    </div>
  </div>
  
  )
}

export default Projects