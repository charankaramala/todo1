import { useState } from "react"

function App()
{
  let [todo,updatetodo]=useState([
    {
      'id':1,
       "task":"i want to learn java"
    },
  {
    'id':2,
       "task":"i want to learn python"
  }])
  function Addme()
  {
    let data1=document.getElementById('data').value 
    console.log(data1)
    updatetodo([
      ...todo,
      {
      "task":data1
    }
    ])
  }
  function Delete(id)
  {
    console.log(id)
    let data2=todo.filter((e)=>{
      if(e.task!=id)
      {
        return e.task
      }
    })
    updatetodo(data2)
  }
  return(
    <div  className="container w-50 mt-5">
        <div className="input-group">
          <input className="form-control" type="text"id="data"></input>
          <button className="btn btn-primary"onClick={()=>{Addme()}}>Add</button>
        </div>
      <ul class="list-group mt-4">
        {
          todo.map((e)=>
          {
            return(
            <li class="list-group-item">
              <p>{e.task}</p>
              <button onClick={()=>{Delete(e.task)}}>del</button>
            </li>
          )})
        }
       
  </ul>
    
   </div>
  )
}
export default App