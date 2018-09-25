const test = require('tape')
const metric = require('../')
const unit = 'Hz' // some example unit

test('big', t => {
  t.equal(metric(7), '7.00', 'no conversion')
  t.equal(metric(12, {unit}), '12.0 Hz', 'custom unit')
  t.equal(metric(999), '999', 'no conversion')
  t.equal(metric(1001, {precision: 4}), '1.001 k', 'custom precision')
  t.equal(metric(1009, {delimiter: ''}), '1.00k', 'custom delimiter')
  t.equal(metric(12345), '12.3 k', 'kilo converstion')
  t.equal(metric(999999), '999 k', 'floor result')
  t.equal(metric(1e6), '1.00 M', 'mega converstion')
  t.equal(metric(1e6 + 9, {unit, precision: 7}), '1.000009 MHz', 'mega converstion')
  t.equal(metric(1e6 + 9, {unit, precision: 6}), '1.00000 MHz', 'mega converstion')
  t.equal(metric(1.1e9), '1.10 G', 'giga converstion')
  t.equal(metric(10.9e9), '10.9 G', 'giga converstion')
  t.equal(metric(100e15), '100 P', 'peta converstion')
  t.equal(metric('100000000000000000000000000'), '100 Y', 'yotta conversion')
  t.equal(metric(1e35), '100 V', 'veca conversion')
  t.end()
})

test('small', t => {
  t.equal(metric(0.7), '700 m', 'milli conversion')
  t.equal(metric(0.01), '10.0 m', 'milli conversion')
  t.equal(metric(0.001), '1.00 m', 'milli conversion')
  t.equal(metric(0.001239), '1.23 m', 'milli conversion')
  t.equal(metric(0.0001), '100 µ', 'mycro conversion')
  t.equal(metric(0.00099999), '999 µ', 'mycro conversion')
  t.equal(metric('0.000000000000000000000000000000001'), '1.00 v', 'vocta conversion')
  t.equal(metric(0.000000000000000000000000000000001), '1.00 v', 'vocta conversion')
  t.end()
})
