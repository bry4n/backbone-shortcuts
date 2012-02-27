(function() {
  var KEYS, Keypress, TestApp, keydown, keyup,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  keydown = function(code, el) {
    var event;
    event = document.createEvent('Event');
    event.initEvent('keydown', true, true);
    event.keyCode = code;
    return (el || document).dispatchEvent(event);
  };

  keyup = function(code, el) {
    var event;
    event = document.createEvent('Event');
    event.initEvent('keyup', true, true);
    event.keyCode = code;
    return (el || document).dispatchEvent(event);
  };

  KEYS = {
    ctrl: 17,
    shift: 16,
    a: 65
  };

  Keypress = {
    ctrl_a: function() {
      keydown(KEYS.ctrl);
      keydown(KEYS.a);
      keyup(KEYS.a);
      return keyup(KEYS.ctrl);
    },
    shift_a: function() {
      keydown(KEYS.shift);
      keydown(KEYS.a);
      keyup(KEYS.a);
      return keyup(KEYS.shift);
    }
  };

  TestApp = (function(_super) {

    __extends(TestApp, _super);

    function TestApp() {
      this.decCount = __bind(this.decCount, this);
      this.incCount = __bind(this.incCount, this);
      TestApp.__super__.constructor.apply(this, arguments);
    }

    TestApp.prototype.initialize = function() {
      return this.count = 0;
    };

    TestApp.prototype.shortcuts = {
      "ctrl+a": "incCount",
      "shift+a": "decCount"
    };

    TestApp.prototype.incCount = function() {
      return this.count++;
    };

    TestApp.prototype.decCount = function() {
      return this.count--;
    };

    TestApp.prototype.count = function() {
      return this.count;
    };

    return TestApp;

  })(Backbone.Shortcuts);

  suite('Backbone.Shortcuts', function() {
    test("quick shortcut test - Ctrl+A", function() {
      var cntCtrlA;
      cntCtrlA = 0;
      key('ctrl+a', function() {
        return cntCtrlA++;
      });
      Keypress.ctrl_a();
      return assert.equal(1, cntCtrlA);
    });
    test("should match the 'incCount' function for 'ctrl+a' event ", function() {
      var app;
      app = new TestApp;
      assert.equal("incCount", app.shortcuts["ctrl+a"]);
      return assert.equal(0, app.count);
    });
    test("should match the 'decCount' function for 'shift+a' event ", function() {
      var app;
      app = new TestApp;
      assert.equal("decCount", app.shortcuts["shift+a"]);
      return assert.equal(0, app.count);
    });
    test("should increase the value of 'count' (= 1)", function() {
      var app;
      app = new TestApp;
      assert.equal(0, app.count);
      Keypress.ctrl_a();
      return assert.equal(1, app.count);
    });
    test("should decrease the value of 'count' (= -1)", function() {
      var app;
      app = new TestApp;
      assert.equal(0, app.count);
      Keypress.shift_a();
      return assert.equal(-1, app.count);
    });
    return test("increase (3x) and decrease (1x) the value of count (= 2)", function() {
      var app;
      app = new TestApp;
      assert.equal(0, app.count);
      Keypress.ctrl_a();
      Keypress.ctrl_a();
      Keypress.ctrl_a();
      assert.equal(3, app.count);
      Keypress.shift_a();
      return assert.equal(2, app.count);
    });
  });

}).call(this);
