const Big = require('big.js')

const prefixes = ['', ...'kMGTPEZYXWV'.split('')]

/**
 * Stringify a (big) number
 * using only a few digits
 * and a metric prefix.
 * @param {number|Big} number to be stringified
 * @param {number} [precision = 3] of significant digits
 * @param {boolean} [floor = true] or round insignificant digits
 */
function metric (number, unit = '', precision = 3, floor = true, delimiter = ' ') {
  const N = (number instanceof Big) ? number : new Big(number)
  const prefix = prefixes[Math.floor(N.e / 3)]
  N.e = N.e % 3
  if (floor) N.c = N.c.slice(0, precision)
  const dl = (prefix === '' && unit === '') ? '' : delimiter
  return `${N.toPrecision(precision)}${dl}${prefix}${unit}`
}

module.exports = metric
