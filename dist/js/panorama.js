/*
	Source:
	van Creij, Maurice (2018). "panorama.js: Projected Panoramic Image", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var Panorama = function (config) {

		this.only = function (config) {
			// start an instance of the script
			return new this.Main(config, this);
		};

		this.each = function (config) {
			var _config, _context = this, instances = [];
			// for all element
			for (var a = 0, b = config.elements.length; a < b; a += 1) {
				// clone the configuration
				_config = Object.create(config);
				// insert the current element
				_config.element = config.elements[a];
				// start a new instance of the object
				instances[a] = new this.Main(_config, _context);
			}
			// return the instances
			return instances;
		};

		return (config.elements) ? this.each(config) : this.only(config);

};

// return as a require.js module
if (typeof define != 'undefined') define([], function () { return Panorama });
if (typeof module != 'undefined') module.exports = Panorama;

// extend the class
Panorama.prototype.Main = function (config, context) {

	// PROPERTIES

	this.config = config;
	this.context = context;

	// OBJECTS

	// METHODS

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

	// EVENTS

	this.construct();
	this.controls();

};
