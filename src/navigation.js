import React from 'react';
import Modal from './modal';

import { Link } from "react-router-dom";

class Navigation extends React.Component{

constructor(props){
	super(props);
	console.log(props);
}

	render(){

		return (

			<nav className="col-md-12 navbar navbar-expand-lg navbar-dark bg-primary " >
		      <a className="navbar-brand js-scroll-trigger" href="#page-top">
		        <span className="d-block d-lg-none">Adithya Neelavara</span>
		        <span className="d-none d-lg-block">
		          <img className="img-pr" src="images/logo.png" alt="" />
		        </span>
		      </a>
		      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		        <span className="navbar-toggler-icon"></span>
		      </button>
		      <div className="collapse navbar-collapse" id="navbarSupportedContent">
		        <ul className="navbar-nav">
		          <li className="nav-item">
		             <Link className="nav-link" to="/">About</Link>
		          </li>
		          <li className="nav-item">
		           <Link className="nav-link" to="/experience">Experience</Link>
		          </li>
		          <li className="nav-item">
		           <Link className="nav-link" to="/education">Education</Link>
		          </li>
		          <li className="nav-item">
		           <Link className="nav-link" to="/skills">Skills</Link>
		          </li>
		          <li className="nav-item">
		           <Link className="nav-link" 	to="/certifications">Certifications</Link>
		          </li>
		          <li className="nav-item ">
		             <Link className="nav-link" to="/blog">Blog</Link>
		          </li>
		          <li id="login111	topics" >
		         {this.props.props.isAuthenticated ? <Link className="nav-link" to="/blogeditor">Publish</Link>:<div></div>}
		         </li>
		         <li id="login111	topics" >
		         {this.props.props.isAuthenticated ? <a className="nav-link" onClick={this.props.props.handleLogout}>Logout</a> : <Link className="nav-link" to="/login">Login</Link>}
		         </li>

		        
		        </ul>
		      </div>
    		</nav>
    		);
		}
	}

export default Navigation;