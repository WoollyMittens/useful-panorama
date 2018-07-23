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
