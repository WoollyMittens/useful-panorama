/*
	Source:
	van Creij, Maurice (2014). "useful.panorama.js: Projected Panoramic Image", version 20141127, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// create the constructor if needed
var useful = useful || {};
useful.Panorama = useful.Panorama || function () {};

// extend the constructor
useful.Panorama.prototype.Main = function (config, context) {

	// PROPERTIES

	"use strict";
	this.config = config;
	this.context = context;

	// OBJECTS

	// METHODS

	this.init = function () {
		// construct the markup
		this.construct();
		// add the controls
		this.controls();
		// return the object
		return this;
	};

	this.construct = function () {
		var obj, row, col;
		// create the object
		obj = document.createElement('div');
		obj.className = 'pano-object';
		// create the row
		row = document.createElement('div');
		row.className = 'pano-row';
		obj.appendChild(row);
		// create the columns
		// TODO: needs to be smart about the total angle if less than 360
		for (var a = 0, b = 20; a < b; a += 1) {
			// create the col
			col = document.createElement('div');
			// apply the classname
			col.className = 'pano-col pano-col-' + (a * 18);
			// apply the background
			col.style.backgroundImage = 'url(' + this.config.element.getAttribute('data-src') + ')';
			// add the col to the row
			row.appendChild(col);
		}
		// add the object to the figure
		this.config.element.appendChild(obj);
	};

	this.controls = function () {
		// TODO: apply the controls
	};

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = useful.Panorama.Main;
}
