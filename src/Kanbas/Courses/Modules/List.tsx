import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
 const { courseId } = useParams();
 const modulesList = modules.filter((module) => module.course === courseId);
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
       {modulesList.map((module, index) => (
         <li key={index}
           className="list-group-item"
           onClick={() => setSelectedModule(module)}>
           <div>
             <FaEllipsisV className="me-2" />
             {module.name}
             <span className="float-end">
               <FaCheckCircle className="text-success" />
               <FaPlusCircle className="ms-2" />
               <FaEllipsisV className="ms-2" />
             </span>
           </div>
           {selectedModule._id === module._id && (
             <ul className="list-group">
               {module.lessons?.map((lesson, index) => (
                 <li className="list-group-item" key={index}>
                   <FaEllipsisV className="me-2" />
                   {lesson.name}
                   <span className="float-end">
                     <FaCheckCircle className="text-success" />
                     <FaEllipsisV className="ms-2" />
                   </span>
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





