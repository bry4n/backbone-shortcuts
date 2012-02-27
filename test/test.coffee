keydown = (code, el) ->
  event = document.createEvent('Event')
  event.initEvent('keydown', true, true)
  event.keyCode = code
  (el || document).dispatchEvent(event)

keyup = (code, el)  ->
  event = document.createEvent('Event')
  event.initEvent('keyup', true, true)
  event.keyCode = code
  (el || document).dispatchEvent(event)


KEYS =
  ctrl: 17
  shift: 16
  a: 65

Keypress =
  ctrl_a: ->
    keydown KEYS.ctrl
    keydown KEYS.a
    keyup KEYS.a
    keyup KEYS.ctrl
  shift_a: ->
    keydown KEYS.shift
    keydown KEYS.a
    keyup KEYS.a
    keyup KEYS.shift

class TestApp extends Backbone.Shortcuts
  initialize: ->
    @count = 0
  shortcuts:
    "ctrl+a" : "incCount"
    "shift+a" : "decCount"
  incCount: => @count++
  decCount: => @count--
  count: -> @count

suite 'Backbone.Shortcuts', ->
  test "quick shortcut test - Ctrl+A", ->
    cntCtrlA = 0
    key 'ctrl+a', -> cntCtrlA++
    Keypress.ctrl_a()
    assert.equal 1, cntCtrlA

  test "should match the 'incCount' function for 'ctrl+a' event ", ->
    app = new TestApp
    assert.equal "incCount", app.shortcuts["ctrl+a"]
    assert.equal 0, app.count
  
  test "should match the 'decCount' function for 'shift+a' event ", ->
    app = new TestApp
    assert.equal "decCount", app.shortcuts["shift+a"]
    assert.equal 0, app.count

  test "should increase the value of 'count' (= 1)", ->
    app = new TestApp
    assert.equal 0, app.count
    Keypress.ctrl_a()
    assert.equal 1, app.count

  test "should decrease the value of 'count' (= -1)", ->
    app = new TestApp
    assert.equal 0, app.count
    Keypress.shift_a()
    assert.equal -1, app.count

  test "increase (3x) and decrease (1x) the value of count (= 2)", ->
    app = new TestApp
    assert.equal 0, app.count
    Keypress.ctrl_a()
    Keypress.ctrl_a()
    Keypress.ctrl_a()
    assert.equal 3, app.count
    Keypress.shift_a()
    assert.equal 2, app.count
