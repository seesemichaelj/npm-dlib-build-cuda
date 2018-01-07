const fs = require('fs')
const { dlibLocalLib } = require('../constants')

if (!fs.existsSync(dlibLocalLib)) {
  throw new Error(`lib not found: ${dlibLocalLib}`)
}