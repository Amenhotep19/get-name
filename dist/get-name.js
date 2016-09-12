/*! get-name v0.1.0 | https://github.com/ryanmorr/get-name */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.getName = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getName;
/**
 * Common variables
 */
var toString = {}.toString;
var functionNameRe = /function ([^\(]+)?\(/;

/**
 * Get the name of a function
 *
 * @param {Function} fn
 * @return {String}
 * @api private
 */
function getFunctionName(fn) {
    // Support the non-standard `displayName`
    // property if it exists
    if (fn.displayName) {
        return fn.displayName;
    }
    if (fn.name) {
        return fn.name;
    }
    var match = functionNameRe.exec(fn.toString());
    if (match && match[1]) {
        return match[1];
    }
    return '';
}

/**
 * Get the name of an object
 *
 * @param {*} obj
 * @return {String}
 * @api public
 */
function getName(obj) {
    var type = toString.call(obj).slice(8, -1);
    switch (type) {
        case 'Null':
        case 'Undefined':
            return type.toLowerCase();
        case 'Function':
            return getFunctionName(obj);
        default:
            return getFunctionName(obj.constructor);
    }
}
module.exports = exports['default'];

},{}]},{},[1])(1)
});

