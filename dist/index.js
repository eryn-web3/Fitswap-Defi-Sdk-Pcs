
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sdk-pcs.cjs.production.min.js')
} else {
  module.exports = require('./sdk-pcs.cjs.development.js')
}
