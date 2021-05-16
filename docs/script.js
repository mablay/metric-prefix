import metricPrefix from '../index.js'
const hero = document.getElementById('hero')
const code = document.getElementById('code')
const fields = ['unit', 'delimiter', 'precision', 'number']
const eFields = fields.map(name => document.getElementById(name))
const [unit, delimiter, precision, number] = eFields
delimiter.addEventListener('focus', () => { delimiter.select() })
eFields.forEach(el => el.addEventListener('input', () => updateHero()))
updateHero()

function safeFloat(x) {
  try {
    return parseFloat(x) || 0
  } catch (error) {
    return 0
  }
}

function updateHero () {
  const options = {
    unit: unit.value,
    delimiter: delimiter.value,
    precision: safeFloat(precision.value)
  }
  const prefix = metricPrefix(options)
  const val = safeFloat(number.value)
  hero.innerHTML = prefix(val)

  // code example
  let str = "const metricPrefix = require('metric-prefix')\n"
  str += 'const prefix = metricPrefix({'
  const strOpts = []
  if (options.unit !== '') strOpts.push(`  unit: '${options.unit}'`)
  if (options.precision !== 3) strOpts.push(`  precision: ${options.precision}`)
  if (options.delimiter !== ' ') strOpts.push(`  delimiter: '${options.delimiter}'`)
  if (strOpts.length) str += '\n' + strOpts.join(',\n') + '\n'
  str += `})\nconsole.log(prefix(${val}))`
  code.innerHTML = str
}

window.onload = function () {
  let i = 18
  const interval = setInterval(() => {
    if (i === 0) {
      clearInterval(interval)
      number.focus()
    }
    number.value = '' + Math.floor(1 + Math.random() * 9) + number.value
    updateHero()
    i--
  }, 100)
}
