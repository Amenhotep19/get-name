/**
 * Get the name of an object
 *
 * @param {*} obj
 * @return {String}
 * @api public
 */
export default function getName(obj) {
    if (typeof obj === 'function') {
        return obj.name;
    }
    return '';
}
