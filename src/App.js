import React from 'react';
import { Auth } from "aws-amplify";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import regeneratorRuntime from "regenerator-runtime";
import Blog from './components/blog';
import About from './components/about';
import Certifications from './components/certifications';
import Education from './components/education';
import Skills from './components/skills';
import Navigation from './components/navigation';
import Login from './components/login';
import BlogEditor from './components/blog-editor';
import ReactGA from 'react-ga';
import { withAuthenticator } from 'aws-amplify-react';

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
	ReactGA.initialize('UA-128182609-1');
 	ReactGA.pageview(window.location.pathname + window.location.search);

		super(props);
		let accessToken ='';
		this.state={
			isAuthenticated:false,
			isAuthenticating: true,
			idToken:'',
		};
		this.userHasAuthenticated =this.userHasAuthenticated.bind(this);
		this.handleLogout =this.handleLogout.bind(this);
		this.setIdToken=this.setIdToken.bind(this);
	};
	async componentDidMount() {
	  try {
	    let session = await Auth.currentSession();
	    this.userHasAuthenticated(true);
	    this.setIdToken(session);
	  }
	  catch(e) {
	    if (e !== 'No current user') {
	      alert(e);
	    }
	  }

	  this.setState({ isAuthenticating: false });
	}

	async setIdToken(response){
		if(response){
			this.setState({idToken:response.idToken});
		}else{
			if(this.props.isAuthenticated){
				let session = await Auth.currentSession();
				if(session){
					this.setState({idToken:session.idToken});
				}
			}
		}
	}
	async handleLogout(){
		await Auth.signOut();
		this.setState({isAuthenticated:false});
	}
	userHasAuthenticated(authenticated){
		this.setState({isAuthenticated:authenticated});
	}
	render(){
		const childProps={
			isAuthenticated:this.state.isAuthenticated,
			idToken:this.state.idToken,
			userHasAuthenticated:this.userHasAuthenticated,
			handleLogout:this.handleLogout,
			setIdToken:this.setIdToken,
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