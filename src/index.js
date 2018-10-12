import React from "react";
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import 'jquery'
import 'bootstrap'
import BlogPost from './blog-post'
import App from './App'
import Modal from './modal'
import css1 from './css/bootstrap.min.css'

import css from './css/resume.css'	
import Amplify from "aws-amplify";
import BlogEditor from './blog-editor';
import regeneratorRuntime from "regenerator-runtime";

import config from "./config";


Amplify.configure({
  Auth: {
    mandatorySignIn: true, 
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
     endpoint: 'https://auth.adithyaneelavara.info',
  },
  API: {
    endpoints: [
      {
        name: "notes",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});
var $ = require('jquery');
window.jQuery = $;
window.$ = $;


jQuery('#index').hide();

ReactDOM.render( <Router>
   < App / >
  </Router>, document.getElementById("appdom"));