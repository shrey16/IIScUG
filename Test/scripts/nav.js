// JavaScript Document
var navbutton = document.getElementById("nav-icon1");
var banner = document.getElementById("banner");
var hexcontainer = document.getElementById("hexcontainer");
navbutton.onclick = function(){
	'use strict';
	banner.classList.toggle('final');
	hexcontainer.classList.toggle('final');
	navbutton.classList.toggle('open');
};

