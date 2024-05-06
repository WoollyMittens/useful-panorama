# panorama.js: Projected Panoramic Image

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

Displays a rotating projection of a panoramic image.

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

Or use imported as a component in existing projects.

```js
@import {Gestures = require('lib/gestures.js";
@import {Panorama} from "js/panorama.js";
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

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
