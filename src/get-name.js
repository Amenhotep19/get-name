const toString = {}.toString;

/**
 * Get the internal [[Class]] of an
 * object
 *
 * @param {*} obj
 * @return {String}
 * @api public
 */
function getType(obj) {
    return toString.call(obj).slice(8, -1);
}

/**
 * Get the name of a function
 *
 * @param {Function} fn
 * @return {String}
 * @api public
 */
function getFunctionName(fn) {
    return fn.name || '';
}

/**
 * Get the name of an object
 *
 * @param {*} obj
 * @return {String}
 * @api public
 */
export default function getName(obj) {
    if (obj === null) {
        return 'null';
    }
    if (obj === undefined) {
        return 'undefined';
    }
    const type = getType(obj);
    if (type === 'Function') {
        return getFunctionName(obj);
    }
    if (type === 'Object') {
        return getFunctionName(obj.constructor);
    }
    return type;
}
