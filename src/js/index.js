/**
  * MAIN APP SCRIPTS ENTRY POINT
  */

// extract text from webpack to bundled output file
require("../scss/style.scss");

import jquery from "jquery";
window.$ = window.jQuery = jquery;
import "popper.js";
import "bootstrap";

//import MobileMenu from './MobileMenu';
//import Modal from './Modal';

//var mobileMenu = new MobileMenu();
//var modal = new Modal();