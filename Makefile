# npm install uglify-js -g
defaults:
				coffee -o . src/
				uglifyjs -o backbone.shortcuts.min.js backbone.shortcuts.js
