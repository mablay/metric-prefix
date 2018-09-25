const Big = require('big.js')

const prefixes = ['', ...'kMGTPEZYXWV'.split('')]

/**
 * Format a number using an SI prefix and only significant digits.
 * @param  {number|Big} number      to be formated
 * @param  {String} [unit='']       E.g.: 'Hz', 'Watt', 'V'
 * @param  {Number} [precision=3]   significant digits
 * @param  {String} [delimiter=' '] between number and prefix
 * @return {String}                 formatted number
 */
function metric (number, { unit = '', precision = 3, delimiter = ' ' } = {}) {
  const N = (number instanceof Big) ? number : new Big(number)
  const prefix = prefixes[Math.floor(N.e / 3)]
  N.e = N.e % 3
  N.c = N.c.slice(0, precision)
  const dl = (prefix === '' && unit === '') ? '' : delimiter
  return `${N.toPrecision(precision)}${dl}${prefix}${unit}`
}

module.exports = metric
