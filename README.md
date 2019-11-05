# panorama.js: Projected Panoramic Image (DEPRICATED)

Displays a rotating projection of a panoramic image.

This limited proof of concept is depricated in favour of <a href="http://www.woollymittens.nl/default.php?url=useful-photocylinder"></a>.

Try the <a href="http://www.woollymittens.nl/default.php?url=useful-panorama">demo</a>.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/panorama.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="lib/gestures.js"></script>
<script src="js/panorama.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'lib/gestures.js',
	'js/panorama.js'
], function(Gestures, Panorama) {
	...
});
```

Or import into an MVC framework.

```js
var Gestures = require('lib/gestures.js');
var Panorama = require('js/panorama.js');
```

## How to start the script

```javascript
var zoom = new Panorama({
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

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens) and at [WoollyMittens.nl](https://www.woollymittens.nl/).
