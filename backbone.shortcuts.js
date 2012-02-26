(function() {
  var Shortcuts;

  Shortcuts = function(options) {
    this.cid = _.uniqueId("backbone.shortcuts");
    this.initialize.apply(this, arguments);
    return this.delegateShortcuts();
  };

  _.extend(Shortcuts.prototype, Backbone.Events, {
    initialize: function() {},
    delegateShortcuts: function() {
      var callback, match, method, scope, shortcut, shortcutKey, _ref;
      console.log('delegate shortcuts');
      if (!this.shortcuts) return;
      _ref = this.shortcuts;
      for (shortcut in _ref) {
        callback = _ref[shortcut];
        if (!_.isFunction(callback)) method = this[callback];
        if (!method) throw new Error("Method " + callback + " does not exist");
        match = shortcut.match(/^(\S+)\s*(.*)$/);
        shortcutKey = match[1];
        scope = match[2] === "" ? "all" : match[2];
        return key(shortcutKey, scope, method);
      }
    }
  });

  Backbone.Shortcuts = Shortcuts;

  Backbone.Shortcuts.extend = Backbone.View.extend;

}).call(this);
