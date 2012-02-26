# Backbone.Shortcuts

Defines and dispatches the keyboard shortcuts

### Dependencies
* [Underscore.js](http://underscorejs.org/)
* [Backbone.js](http://backbonejs.org/)
* [Keymaster.js](https://github.com/madrobby/keymaster/)

# Usage

**Javascript**

```javascript
var ShortcutKeys = Backbone.Shortcuts.extend({
  shortcuts: {
    "ctrl+r" : "reloadPage"
  },
  reloadPage: function() {
    alert("Reloaded!!");
  }
});

var shortcuts = new ShortcutKeys;
```

**CoffeeScript**

```coffeescript
class ShortcutKeys extends Backbone.Shortcuts
  shortcuts:
    "ctrl+r" : "reloadPage"
  reloadPage: -> alert "Reload!!!"

shortcuts = new ShortcutKeys
```
