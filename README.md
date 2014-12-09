# useful.panorama.js: Projected Panoramic Image

Displays a rotation projection of a panoramic image.

For now, this is a very limited proof of concept.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=useful-panorama">demo</a>.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="./css/useful-panorama.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful-panorama.js"></script>
```

## How to start the script

```javascript
var zoom = new useful.Panorama().init({
	'elements' : document.querySelectorAll('.useful-panorama')
});
```

**elements : {array of DOM nodes}** - A collection of DOM nodes to be processed into panoramic displays.

## To do

+ Support for panoramic images that do not span the full 360 degrees.
+ Controls for panning and zooming.
+ API calls for zooming in on specific locations.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses grunt.js from http://gruntjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `grunt import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `grunt dev` - Builds the project for development purposes.
+ `grunt prod` - Builds the project for deployment purposes.
+ `grunt watch` - Continuously recompiles updated files during development sessions.
+ `grunt serve` - Serves the project on a temporary web server at http://localhost:8000/ .

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
