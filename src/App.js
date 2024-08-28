import { useState } from "react"

function App()
{
  let [todo,updatetodo]=useState([{
     "task":"hello java"
  },
{
  "task":"hello python"
}])
function Addnew()
{
  let a=document.getElementById("data").value 
  let newtodo=[
    ...todo,
    {
      "task":a
    }
  ]
  updatetodo(newtodo)
}
function Deletetodo(value1)
{
   let freshtodo=todo.filter((v)=>
  {
    return(
      v.task!==value1
    )
  })
  updatetodo(freshtodo)
}
return(
  <div className="container mt-5 w-50">
       <div className="input-group">
        <input type="text" className="form-control" id="data"></input>
        <button className="btn btn-primary"onClick={()=>{Addnew()}}>Addme</button>
       </div>
       <ul className="list-group mt-3">
              {
                todo.map((e)=>
                {
                  return(
                    <li className="list-group-item">
                    <p>{e.task}</p>
                    <button className="btn btn-danger"onClick={()=>{Deletetodo(e.task)}}>clearme</button>
                  </li>
                  )
                })
              }
       </ul>
  </div>
)
}
export default App