import React,{useState} from 'react'

import './App.css'


function App(){
  
var [a,b] = useState('')
var [c,d] = useState([])
var [e,f] = useState(null)
var [i,updateID] = useState(0)


 function add(){
    if(e==null){
    d([...c,{id:i,task:a}])
    b('')
    updateID(i+1)
   }else if(e!==null){
   var update = c.map((v)=>{
          if(v.id===e){
          return {...v,task:a}
          }
         return v
       })
      d(update)
      f(null)
      b('')
   } 
}

console.log(c)

function Delete(id){
  var u = c.filter((v)=>{
        return v.id!==id
       })
      d(u)
  }

return (
  <>

<div className="container mt-5 w-60"> 
  
  <h3 className="text-primary text-center">Todo App</h3>
  
  <div className="form-group">
 
  <div className="input-group"> 
  <input type="text" className="form-control" value={a} onChange={(e)=>{
    b(e.target.value)
  }}/>
  <button className="btn btn-primary" onClick={()=>{
    add()
  }}>Add</button>
  </div>
 
 
  
  <ul className="list-group-items" >{c.map((value,index)=>{
        return (
          
          
          <li className='list-group-item'>
           <p>{value.task}</p>
           
           <div className="btn"> 
           <button className="btn btn-danger" onClick={()=>{
             Delete(value.id)
           }}>X</button>
 
           <button className="btn btn-warning" onClick={()=>{
              f(value.id)
              b(value.task)
           }}>Edit</button>  
        </div>
        </li>
        ) 
  })
  }</ul>
  </div>
</div>
  </>
   )
}

export default App