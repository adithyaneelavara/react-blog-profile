import React from 'react'
import Blog from './blog'
import About from './about'
import Certifications from './certifications'
import Education from './education'
import Skills from './skills'
import { Route } from "react-router-dom";
import Navigation from './navigation'

class App extends React.Component{

	render(){

		return (
				<div >
					<div className="fixed-top">
						<Navigation />
	    			 </div>
	    			 <div className="top-nav">
	    			 <div className="container-fluid p-0" id="about">
	   				 </div>
	    			 <hr className="m-0" />
					<div id="experience">
	    
					</div>
					<hr className="m-0" />
					<div id="education">
					    
					</div>
	    			  <hr className="m-0" / >
					<div id="skills">
					  <hr className="m-0" />
					 
					</div>
					<div id="awards">
					      <hr className="m-0" />
					     
					 </div>
					 <div className="container-fluid p-0" id="index">
					
	 				 </div>
	 				 </div>
	 				 <Route exact path="/" component={About}/>
	 				 <Route  path="/experience" component={Education}/>
	 				 <Route  path="/education" component={Education}/>
	 				 <Route  path="/skills" component={Skills}/>	 				
	 				 <Route  path="/certifications" component={Certifications}/>
	 				 <Route  path="/blog" component={Blog}/>

	 				</div>
				
			)
	}
}

export default App;