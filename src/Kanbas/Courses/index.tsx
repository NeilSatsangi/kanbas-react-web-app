import { courses } from "../../Kanbas/Database";
import { useParams, Navigate, Route, Routes, Link, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import { FaGlasses } from "react-icons/fa";
import Home from "./Home";
import Assignments from "./Assignments";




function Courses() {
 const { courseId } = useParams();
 const course = courses.find((course) => course._id === courseId);
 const location = useLocation();
 const fullPath = location.pathname.substring(1);
 const fullPathArr = fullPath.split("/");
 const tinyPath = fullPathArr[fullPathArr.length - 1].trim();
 return (
   <div>


       {/*}
    <p style={{ marginLeft: "20px", marginTop: "10px", color: "red" }}><HiMiniBars3 /> {course?.number} {course?.name} </p>
 */}
 <div style={{ marginLeft: "20px", marginTop: "10px", color: "red" }}>
       <HiMiniBars3 />
       <Link to={`/courses/${courseId}`} style={{marginLeft: "10px", color: "red"}}>
         {course?.number} {course?.name}
       </Link >
       <span style={{ color: "black" }}>&nbsp;&gt;</span>
       <Link to="/" style={{color: "black", "marginLeft": "5px"}} >{tinyPath}</Link>
     </div>
             {/* Student View Button */}
     <div style={{ position: "absolute", top: "10px", right: "20px" }}>
       <button className="text-end"><FaGlasses/>&nbsp;Student View</button>
     </div>


   <hr></hr>
     <CourseNavigation />
     <div>
       <div
         className="overflow-y-scroll position-fixed bottom-0 end-0"
         style={{ left: "320px", top: "50px" }} >
         <Routes>
           <Route path="/" element={<Navigate to="Home" />} />
           <Route path="Home" element={<Home/>} />
           <Route path="Modules" element={<Modules/>} />
           <Route path="Piazza" element={<h1>Piazza</h1>} />
           <Route path="Assignments" element={<Assignments/>} />
           <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
           <Route path="Grades" element={<h1>Grades</h1>} />
           <Route path="Zoom-Meetings" element={<h1>Zoom-Meetings</h1>} />
           <Route path="Quizzes" element={<h1>Quizzes</h1>} />
           <Route path="People" element={<h1>People</h1>} />
           <Route path="Panopto Video" element={<h1>Panopto-Video</h1>} />
         </Routes>
       </div>
     </div>


   </div>
 );
}
export default Courses;

