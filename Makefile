# npm install -g uglify-js

defaults:
				coffee -o . src/
				uglifyjs -o backbone.shortcuts.min.js backbone.shortcuts.js

test:
				coffee -o test/ test/
				open test/index.html
