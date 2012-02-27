# npm install uglify-js -g
defaults:
				coffee -o . src/
				coffee -o test/ test/
				uglifyjs -o backbone.shortcuts.min.js backbone.shortcuts.js
