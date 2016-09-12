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
    if (getType(obj) === 'Function') {
        return obj.name;
    }
    return '';
}
