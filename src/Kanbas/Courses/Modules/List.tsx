import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
 const { courseId } = useParams();
 const modulesList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);





 return (
   <>
     {/* <!-- Add buttons here --> */}


     <div className="flex-grow: 1" style={{ marginLeft: "0px", marginTop: "20px", padding: "0px", overflow: "auto",  marginBottom: "10px"}}>
     <div className="button-container">
         <button className="btn btn-custom" style={{ margin: "0 5px" }}>Collapse All</button>
         <button className="btn btn-custom" style={{ margin: "0 5px" }}>View Progress</button>
         <select className="btn btn-custom" style={{ margin: "0 5px" }}>
             <option>Publish All </option>
             <option>Publish All Modules and Items</option>
             <option>Publish Modules only</option>
             <option>Unpublish All Modules</option>
         </select>
         <button className="btn btn-custom-red" style={{ margin: "0 5px" }}>+ Module</button>
         <button className="btn btn-custom">⋮</button>
     </div>
     </div>
    <hr></hr>


     <ul className="list-group wd-modules">
     <li className="list-group-item" style={{ display: "flex", alignItems: "center" }}>
     <button 
onClick={() => dispatch(addModule({ ...module, course: courseId }))}     style={{ backgroundColor: "green", color: "white", borderRadius: "5px", padding: "5px 10px", border: "none", cursor: "pointer" }}>
    Add
</button>

<button 
onClick={() => dispatch(updateModule(module))}
style={{ backgroundColor: "lightblue", color: "white", borderRadius: "5px", padding: "5px 10px", border: "none", cursor: "pointer" }}>
  Update
</button>




  <input 
    value={module.name}
    onChange={(e) => 
      dispatch(setModule({ ...module, name: e.target.value }))}
    style={{ 
      marginLeft: "10px", 
      marginRight: "10px",
      padding: "5px",
      borderRadius: "5px",
      border: "1px solid #ccc"
    }}
  />

  <input
    value={module.description}
    onChange={(e) => 
      dispatch(setModule({ ...module, description: e.target.value }))}
    style={{ 
      marginLeft: "10px",
      padding: "5px",
      borderRadius: "5px",
      border: "1px solid #ccc"
    }}
  />
</li>



       {modulesList
       .filter((module) => module.course === courseId)
       .map((module, index) => (
         <li key={index}
           className="list-group-item"
           onClick={() => setSelectedModule(module)}>
           <div>
           

             <FaEllipsisV className="me-2" />
             {module.name} - {module._id}
             <span className="float-end">
               <FaCheckCircle className="text-success" />
               <FaPlusCircle className="ms-2" />
               <FaEllipsisV className="ms-2" />


               <button
              onClick={() => dispatch(setModule(module))}
              style={{
                backgroundColor: "#ADD8E6",
                color: "black",
                fontSize: "0.7em",
                marginRight: "3px"
              }}>
              Edit
            </button>

               <button
  onClick={() => dispatch(deleteModule(module._id))}
  style={{
    backgroundColor: "red",
    color: "white",
    fontSize: "0.7em"
  }}
>
  Delete <FaTrash style={{ marginLeft: "5px" }} />
</button>



             </span>
           </div>
           <p>{module.description}</p> 
           
           {selectedModule._id === module._id && (
             <ul className="list-group">
               {module.lessons?.map((lesson: any, index: any) => (
                 <li className="list-group-item" key={index}>
                   <FaEllipsisV className="me-2" />
                   {lesson.name}
                   <span className="float-end">
                     <FaCheckCircle className="text-success" />
                     <FaEllipsisV className="ms-2" />
                   </span>
                   <p>{lesson.description}</p> 
                   
                 </li>

               ))}
             </ul>
           )}
         </li>
       ))}
     </ul>
   </>
 );
}
export default ModuleList





