import React, {useState} from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { VscNotebook } from "react-icons/vsc";
import "./index.css";


function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
    const [count] = useState(1);

  return (
    <>
      {/* Add buttons and other fields here */}

      <div className="flex-grow: 1" style={{ marginLeft: "0px", marginTop: "20px", padding: "0px", overflow: "auto",  marginBottom: "10px"}}>
        <div className="button-container">

          <input type="text" placeholder="Search For Assignment" style={{ margin: "0 5px" }}/>

          <button className="btn btn-custom" style={{ margin: "0 5px" }}>+ Group</button>
          <button className="btn btn-custom-red">+ Assignment</button>
          <button className="btn btn-custom" style={{margin: "0 5px"}}>⋮</button>
        <button className="btn btn-custom float-end" style={{ margin: "0 5px" }}>Filter By Date</button>
        <button className="btn btn-custom float-end" style={{ margin: "0 5px" }}>Filter By Type</button>


        </div>
      </div>
      <hr></hr>

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
                <span> 40% of Total </span>
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment, index) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <VscNotebook className="green-icon" />
                &nbsp;
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{color: "black"}}> {}{}{'A'}{count + index} {'-'} {assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                  <div style={{marginLeft: "25px", color: "red"}}>
                  <span> Multiple Modules </span>
                  <span style={{color: "black"}}> | </span>
                  <span style={{color: "black"}}> Due </span>
                  <span style={{color: "black"}}> {assignment.duedate} </span>
                  <span style={{color: "black"}}> {'at'} </span>
                  <span style={{color: "black"}}> {assignment.duetime} </span>
                  <span style={{color: "black"}}> | </span>
                  <span style={{color: "black"}}> {assignment.points} </span>
                  <span style={{color: "black"}}> {'points'} </span>
                  </div>
                  
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;

