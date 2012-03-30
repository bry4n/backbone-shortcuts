# Backbone.Shortcuts

*Backbone.js + Keymaster.js = Backbone.Shortcuts.*

## Downloads

  * [Development Version](https://raw.github.com/bry4n/backbone-shortcuts/master/backbone.shortcuts.js) 1.031 kb, full source code
  * [Production Version](https://raw.github.com/bry4n/backbone-shortcuts/master/backbone.shortcuts.min.js) 0.577 kb, packed and gzipped

## Dependencies

* [Underscore.js ~> 1.3.1](http://underscorejs.org/) for `_.extend()` function
* [Backbone.js ~> 0.9.1](http://backbonejs.org/) for `Backbone` class
* [Keymaster.js ~> 1.0.2](https://github.com/madrobby/keymaster/) for keyboard shortcuts functionality

## Usage

**HTML**

Place snippets inside of the `<head>...</head>` tags.

```html
<script src="underscore.min.js"></script>
<script src="backbone.min.js"></script>
<script src="keymaster.min.js"></script>
<script src="backbone.shortcuts.min.js"></script>
```

**JavaScript**

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

Finally, you can press `Ctrl + r` to execute `reloadPage()` function to see the alert message.

### Use Backbone.Shortcuts as Delegation for your Backbone.View

You have to `_.extend` the `this` as **desination** and `new Backbone.Shortcuts` as **source** then finally call the delegate function `this.delegateShortcuts();`.

See [My jsFiddle Example](http://jsfiddle.net/bry4n/FAT7V/)

## Author

Bryan Goines, [@bryangoines](http://twitter.com/bryangoines)

## License

Backbone.Shortcuts is licensed under MIT license.