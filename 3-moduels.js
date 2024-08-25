// CommonJS, every file is module (by default)
// Modules - encapsulated code (only share minimum)
// module.exports used to define the public interface of a module so that other files can import and use the module through the require function.
const names = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
