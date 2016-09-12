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
    if (typeof obj === 'function') {
        return obj.name;
    }
    return '';
}
