import ModuleList from "../Modules/List";
import { TbFileArrowRight } from "react-icons/tb";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaBullseye, FaChartSimple, FaBullhorn } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import {Link } from "react-router-dom";



function Home() {
  return (
    <div style={{ display: "flex"}}>
      <div style={{ flex: 1 }}>
        <ModuleList />
      </div>
      <div style={{ flex: 1, paddingLeft: "20px", paddingTop: "25px" }}>
        <button style={{ marginBottom: "5px" }}>  <TbFileArrowRight/> Import Existing Content</button>
        <br />
        <button style={{ marginBottom: "5px" }}> <FaArrowCircleRight />  Import From Commons</button>
        <br/>
        <button style={{ marginBottom: "5px" }}> <FaBullseye />  Choose Home Page</button>
        <br/>
        <button style={{ marginBottom: "5px" }}> <FaChartSimple />  View Course Stream</button>
        <br/>
        <button style={{ marginBottom: "5px" }}> <FaBullhorn/>  New Announcement</button>
        <br/>
        <button style={{ marginBottom: "5px" }}> <FaChartSimple />  New Analytics</button>
        <br/>
        <button style={{ marginBottom: "15px" }}> <IoIosNotificationsOutline />  View Course Notifications</button>

        <h2>To Do</h2>
        <hr style={{width: "250px"}}></hr>
        <Link to="/Kanbas/Courses/Home/screen.html" style={{color: "red"}}>View Calendar</Link>
                <ul>
                    <li><Link to="/Kanbas/Courses/Home/screen.html" style={{color: "red"}}>Lecture CS 4550 Apr 24 4:25</Link></li>
                    <li><Link to="/Kanbas/Courses/Home/screen.html" style={{color: "red"}}>Lecture CS 4550 Apr 31 4:25</Link></li>
                    <li><Link to="/Kanbas/Courses/Home/screen.html" style={{color: "red"}}>Lecture CS 4550 May 7 4:25</Link></li>
                    <li><Link to="/Kanbas/Courses/Home/screen.html" style={{color: "red"}}>Lecture CS 4550 May 14 4:25</Link></li>
                    <li><Link to="/Kanbas/Courses/Home/screen.html" style={{color: "red"}}>Lecture CS 4550 May 21 4:25</Link></li>
                    <li><Link to="/Kanbas/Courses/Home/screen.html" style={{color: "red"}}>Lecture CS 4550 May 28 4:25</Link></li>
                </ul>


      </div>
      
    </div>
  );
}

export default Home;
