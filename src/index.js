import React from "react";
import ReactDOM from "react-dom";
import 'jquery'
import 'bootstrap'
import BlogPost from './blog-post'
import Blog from './blog'

var $ = require('jquery');
window.jQuery = $;
window.$ = $;
  


ReactDOM.render(<Blog />, document.getElementById("index"));