import { Container } from "@mui/material";
import React,{useContext} from "react";
import { NavLink } from "../base/NavLink";
import { AuthContext } from "@/context/AuthContext";
export default function Header() {
  const {user} = useContext(AuthContext);
  return (
    <Container maxWidth="100%" sx={{px:'0 !important'}}>
      <nav>
        <ul>
          <li>
            <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
          </li>
          <li>
            <NavLink href="/blog" className="nav-item nav-link">Blogs</NavLink>
          </li>
          <li>
            <NavLink href="/contact" className="nav-item nav-link">Contact</NavLink>
          </li>
          {
            !user ? (
              <li style={{ float: "right" }}>
                <NavLink href="/auth/login" className="nav-item nav-link">Login</NavLink>
              </li>  
            ) : <>
            <li style={{ float: "right" }}> 
                <NavLink href="/auth/logout" className="nav-item nav-link">Logout</NavLink>
            </li>
            <li style={{ float: "right" }}> 
                <NavLink href="/dashboard" className="nav-item nav-link">Dashboard</NavLink>
            </li>
            </>
            
          }
          
        </ul>
      </nav>
    </Container>
  );
}
