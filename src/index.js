/**
  * MAIN APP SCRIPTS ENTRY POINT
  */

// extract text from webpack to bundled output file
require("./main.scss");

// imports from vendors
import jquery from "jquery";
window.$ = window.jQuery = jquery;
import "popper.js";
import "bootstrap";

// components
require("./components/header/header.js");
require("./components/sidebar/sidebar.js");

//import MobileMenu from './MobileMenu';
//import Modal from './Modal';

//var mobileMenu = new MobileMenu();
//var modal = new Modal();
