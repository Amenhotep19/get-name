# getName

[![GitHub version](https://badge.fury.io/gh/ryanmorr%2Fget-name.svg)](https://badge.fury.io/gh/ryanmorr%2Fget-name) [![Build Status](https://travis-ci.org/ryanmorr/get-name.svg)](https://travis-ci.org/ryanmorr/get-name) ![Size](https://badge-size.herokuapp.com/ryanmorr/get-name/master/src/get-name.js.svg?color=blue&label=file%20size)

> Get the name of an object

## Usage

Get the name of a function, class, or constructor:

``` javascript
function foo() {}
class Bar {}

getName(foo); // "foo"
getName(Bar); // "Bar"
getName(Array); // "Array"
```

Get the name of an instance's constructor:

``` javascript
function Foo() {}
class Bar {}

getName(new Foo()); // "Foo"
getName(new Bar()); // "Bar"
getName(new Array()); // "Array"
```

Support's the `displayName` property:

``` javascript
function foo() {}
foo.displayName = 'bar';

getName(foo); // "bar"
```

Anonymous functions and arrow functions return an empty string:

``` javascript
getName(function() {})); // ""
getName(() => {})); // ""
```

## Beware

If you're using a JavaScript compressor such as [UglifyJS](https://github.com/mishoo/UglifyJS), **function names will be changed**, resulting in unexpected behavior. You can disable this feature in UglifyJS by setting the `mangle` option to false.

## Installation

getName is [CommonJS](http://www.commonjs.org/) and [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) compatible with no dependencies. You can download the [development](http://github.com/ryanmorr/get-name/raw/master/dist/get-name.js) or [minified](http://github.com/ryanmorr/get-name/raw/master/dist/get-name.min.js) version, or install it in one of the following ways:

``` sh
npm install ryanmorr/get-name

bower install ryanmorr/get-name
```

## Tests

Run unit tests in the command line by issuing the following commands:

``` sh
npm install
npm install -g gulp
gulp test
```

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).