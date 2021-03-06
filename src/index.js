import React from "react";
import regeneratorRuntime from "regenerator-runtime";
import 'babel-polyfill';
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import 'jquery'
import 'bootstrap'
import Amplify from "aws-amplify";
import config from "./config/config";
import BlogPost from './components/blog-post'
import BlogEditor from './components/blog-editor';
import App from './App'
import bootstrapcss from './css/bootstrap.min.css'
import css from './css/resume.css'	

import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Saira Extra Condensed:500,700', 'Muli:400,400i,800,800i']
  },
    custom: {
    families: ['My Font'],
    urls: ['https://use.fontawesome.com/releases/v5.3.1/css/all.css']
  }
});



Amplify.configure({
  Auth: {
    mandatorySignIn: false, 
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

ReactDOM.render( <Router>
   < App / >
  </Router>, document.getElementById("appdom"));