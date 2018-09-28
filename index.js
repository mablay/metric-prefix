const Big = require('big.js')

const ZIDX = 11
const prefixes = 'vwxyzafpnµmkMGTPEZYXWV'.split('')
prefixes.splice(ZIDX, 0, '') // insert neutral prefix

function prefix (number, {
  unit = '',
  precision = 3,
  delimiter = ' '
} = {}) {
  const N = (number instanceof Big) ? number : new Big(number)
  let prefix = prefixes[ZIDX + Math.floor(N.e / 3)]
  if (prefix === undefined) prefix = '?'
  N.c = N.c.slice(0, precision)
  N.e = (N.e >= 0) ? N.e % 3 : 2 + ((N.e + 1) % 3)
  const dl = (prefix === '' && unit === '') ? '' : delimiter
  return `${N.toPrecision(precision)}${dl}${prefix}${unit}`
}

const prefixFactory = (defaults) =>
  (number, options) =>
    prefix(number, { ...defaults, ...options })

prefixFactory.prefix = prefix

module.exports = prefixFactory
