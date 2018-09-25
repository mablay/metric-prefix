const Big = require('big.js')

const prefixes = ['', ...'kMGTPEZY'.split('')]

/**
 * Stringify a (big) number
 * using only a few digits
 * and a metric prefix.
 * @param: number {number|Big} to be stringified
 * @param: precision {number} significant digits
 * @param: round {boolean} floor or round insignificant digits
 */
function metric (number, precision = 3, round = false) {
  const N = new Big(number)
  const prefix = prefixes[Math.floor(N.e / 3)]
  N.e = N.e % 3
  if (!round) N.c = N.c.slice(0, precision)
  return N.toPrecision(precision).concat(prefix)
}

module.exports = metric
