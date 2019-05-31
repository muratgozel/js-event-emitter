# Javascript Event Emitter Object

A simple event emitter object that you can plug into your javascript libraries.

API is very similar to [the node.js events][305ab206].

  [305ab206]: https://nodejs.org/api/events.html "node.js events api"

## Install

```sh
npm install event-emitter-object
```

## Import

This package exports multiple builds. Developer has the responsibility to choose the one that best fits to her/his needs.

1. **Minified (default)**

This is basically the source code itself but minified. There are no compilation and polyfills inside. Use it if you already have a compiler (like babel) and polyfills in your project. (which is mostly is the case.)

```js
const EventEmitter = require('event-emitter-object')
```

2. **Polyfilled and minified**

The source code compiled with babel (with the configuration that can be found inside `babel.config.js` file) and minified. This build contains also polyfills which increases the size of the package dramatically. Polyfills added by the configuration that can be found inside the `.browserlistrc` file.

```js
const EventEmitter = require('event-emitter-object/polyfilled')
```

3. **Bundle for browsers**

The source code bundled with `browserify` to generate a `UMD` bundle. This bundle can be imported by html script tag. No compilation and polyfills.

```html
<script src="https://unpkg.com/event-emitter-object@0/dist/browser.js" type="text/javascript"></script>
```

4. **Polyfilled bundle for browsers**

The source code compiled with babel and bundled with `browserify` to generate a `UMD` bundle. This bundle can be imported by html script tag.

```html
<script src="https://unpkg.com/event-emitter-object@0/dist/browser.polyfilled.js" type="text/javascript"></script>
```

## Use

Let's say you have a state manager object to control the state of your app.

```js
function StateManager() {}
StateManager.prototype.updateState = function updateState(payload) {
  // update state
  // ...
  // and inform listeners that the state has just updated
  this.emit('update')
}
module.exports = StateManager
```

To plug event emitter into your state manager:

```js
StateManager.prototype = Object.assign({}, StateManager.prototype, EventEmitter.prototype)
```

Now, you can listen and emit events within your state manager:

```js
const state = new StateManager()
state.on('update', function() {
  console.log('State updated!')
})
```

## API

### on(eventName, callback, opts)

Registers a new listener for a certain event.

```js
emitter.on('someEvent', function() {
  console.log('Some event happened in some emitter.')
}, {
  once: true // default is false
})
```

### once(eventName, callback)

This is a shortcut for the `on` method with `{once: true}`:

```js
// instead of doin this:
emitter.on('someEvent', function(){}, {once: true})
// you can do this:
emitter.once('someEvent', function(){})
```

### emit(eventName, args)

Emits a certain event with arguments.

```js
emitter.emit('someEvent')

// or with arguments
emitter.on('anotherEvent', function(arg1, arg2) {
  console.log('Another event emitted with arguments: ', arg1, arg2)
})
emitter.emit('anotherEvent', ['hello', 'world'])
```

### removeListeners(eventName)

Removes all listeners that belong to a certain event.

```js
emitter.removeListeners('someEvent')
```

### flush()

Removes all events and listeners.

```js
emitter.flush()
```

## Babel Polyfills Report

This module uses the following polyfills in its polyfilled builds.

1. `es.array.splice `
2. `es.date.to-string`
3. `es.object.to-string`
4. `es.regexp.to-string`
