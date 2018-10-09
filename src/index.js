import React from "react";
import ReactDOM from "react-dom";
import 'jquery'
import 'bootstrap'
import BlogPost from './blog-post'
import Blog from './blog'
import Modal from './modal'
import css1 from './css/bootstrap.min.css'
import css from './css/resume.css'
var $ = require('jquery');
window.jQuery = $;
window.$ = $;


jQuery('#index').hide();
ReactDOM.render(<Modal />,document.getElementById('login'));
ReactDOM.render( < Blog / > , document.getElementById("index"));