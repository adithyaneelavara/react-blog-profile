import React from "react";
import ReactDOM from "react-dom";
import 'jquery'
import 'bootstrap'
import BlogPost from './blog-post'
var $ = require('jquery');
window.jQuery = $;
window.$ = $;
  


ReactDOM.render(<BlogPost />, document.getElementById("index"));