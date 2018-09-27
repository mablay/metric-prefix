# Metric Prefix

Format numbers using only significant digits and a [metric prefix](https://en.wikipedia.org/wiki/Metric_prefix).  

    prefix(1234567890)
    // => '1.23 G'

## Install

    npm i metric-prefix

#### basic example

    const { prefix } = require('metric-prefix')

    prefix(0.123456789)
    // => '123 m'

#### with options

    prefix(123456, { unit: 'Hz' })
    // => '123 kHz'

    prefix(123456, { delimiter: '' })
    // => '123k'

    prefix(123.456, { precision: 4 })
    // => '123.4'

#### cure bulky options with factory pattern

    const prefix = require('metric-prefix')({
      unit: 'W',
      precision: 4,
      delimiter: ''
    })

    prefix(0.0321) // => '32.10mW'

#### supported value types

Due to [big.js](https://github.com/MikeMcl/big.js)
being used internally, all compatible data types can
be used.

    prefix("100000000000000000000000000")
    // => 100 Y

    prefix(Big(1e26))
    // => 100 Y

## Additional Notes

#### Range
Numbers from 1e-33 to 1e35 can be prefixed. Including non standard prefixes *X*, *W*, *V*. Beyond that a `?` will replace the prefix.

#### Rounding
Prefix *floors* positive and *ceils* negative numbers.

#### Floating Point Arithmetic
In JavaScripts you might encounter situations like

    0.3 - 0.1 = 0.19999999999999998

that lead to

    prefix(0.3 - 0.1) // => '199 m'

and can be fixed with

    prefix(Big(0.3).minus(0.1)) // => '200 m'
