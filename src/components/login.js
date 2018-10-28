import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Auth } from "aws-amplify";
import regeneratorRuntime from "regenerator-runtime";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  async handleSubmit(event)  {
    
  event.preventDefault();

  try {
    await Auth.signIn(this.state.email, this.state.password);
    this.props.childProps.userHasAuthenticated(true);
   await Auth.currentSession().then(function(response) {
            console.log(response);
            this.props.childProps.setIdToken(response);
        })
        .catch(function(error) {
            console.log(error);
        });;
    
    this.props.history.push("/");

  } catch (e) {
    alert(e.message);
  }		
  }

  render() {
    return (
      <div className="col-md-5 top-nav">
      <h3>Login</h3>
      <div className="Login resume-section ">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </Button>
        </form>
      </div>
      </div>
    );
  }
}
