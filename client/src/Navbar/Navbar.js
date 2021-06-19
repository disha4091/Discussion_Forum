import React, {useState} from "react";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [showlinks, setShowLinks] = useState(false) ;
  return (

    <div className="nav">
    
    <button onClick={()=>setShowLinks(!showlinks)} className="menuIcon"><i class="align justify icon"></i></button>
  
      <NavLink to="/" className="nav-link" activeClassName="currentpage" id={showlinks ? "hidden" : ""}  onClick={()=>setShowLinks(!showlinks)}>
         Home
      </NavLink>
  
     <div class="ui dropdown" id={showlinks ? "hidden" : ""} >
     <div class="ui dropdown" id={showlinks ? "hidden" : ""}>
        <div class="ui simple dropdown item"  id={showlinks ? "hidden" : ""}>Domains
          <i class="dropdown icon"></i>
          <div class="menu">
                  <Link to="/mlposts" class="item"  onClick={()=>setShowLinks(!showlinks)}>Machine Learning</Link>
                  <Link to="/webposts" class="item"  onClick={()=>setShowLinks(!showlinks)}>Web Development</Link>          
                  <Link to="/aiposts" class="item"  onClick={()=>setShowLinks(!showlinks)}>Artificial Intelligence</Link>
              </div>
        </div>
      </div>
     </div>
      
      


      <div className="rightSide">
      <NavLink
        to="/login"
        className="nav-link"
        activeClassName="currentpage"
        id={showlinks?"hidden" : ""}
        onClick={()=>setShowLinks(!showlinks)}
        >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="nav-link"
            activeClassName="currentpage"
            id={showlinks?"hidden" : ""}
            onClick={()=>setShowLinks(!showlinks)}
          >
            Signup
          </NavLink>
        </div>
      </div>
   
        
  );
};

export default Navbar;
