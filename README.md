# Metric Prefix

Stringify numbers using only few significant digits and a [metric prefix](https://en.wikipedia.org/wiki/Metric_prefix).

## Install

    npm i metric-prefix

## Eample Usage

    const metric = require('metric-prefix')

    metric(1234567890) => 1.23G

## Use with big.js
`metric` uses [big.js](https://github.com/MikeMcl/big.js)
internally and accepts any compatible data type.

    metric("100000000000000000000000000") // => 100Y
