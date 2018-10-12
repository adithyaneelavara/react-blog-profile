import React from 'react';
import Blog from './blog';
import About from './about';
import Certifications from './certifications';
import Education from './education';
import Skills from './skills';
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Navigation from './navigation';
import Login from './login';
import BlogEditor from './blog-editor';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}
const PrivateRoute = ({ component, redirectTo, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return rest.childProps.isAuthenticated ? (
        renderMergedProps(component, routeProps, rest)
      ) : (
        <Redirect to={{
          pathname: redirectTo,
          state: { from: routeProps.location }
        }}/>
      );
    }}/>
  );
};

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

class App extends React.Component{
	constructor(props){


		super(props);
		this.state={
			isAuthenticated:false
		};
		this.userHasAuthenticated =this.userHasAuthenticated.bind(this);
		this.handleLogout =this.handleLogout.bind(this);
	};

	handleLogout(){
		this.setState({isAuthenticated:false});
	}
	userHasAuthenticated(authenticated){
		this.setState({isAuthenticated:authenticated});
	}
	render(){
		const childProps={
			isAuthenticated:this.state.isAuthenticated,
			userHasAuthenticated:this.userHasAuthenticated,
			handleLogout:this.handleLogout,
		};
		return (
				<div >
					<div className="fixed-top">
						<Navigation props={childProps}/>
	    			 </div>
	 				 <Route props={childProps} exact path="/" component={About}/>
	 				 <Route  props={childProps} path="/experience" component={Education}/>
	 				 <Route props={childProps} path="/education" component={Education}/>
	 				 <Route  props={childProps} path="/skills" component={Skills}/>	 				
	 				 <Route  props={childProps} path="/certifications" component={Certifications}/>
	 				 <Route  props={childProps} path="/blog" component={Blog}/>
	 				 <PrivateRoute  childProps={childProps} path="/blogeditor"  redirectTo="/login" component={BlogEditor}/>
	 				<PropsRoute  childProps={childProps} path="/login" component={Login}  />

	 				</div>
				
			)
	}
}

export default App;