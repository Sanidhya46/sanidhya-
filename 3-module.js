//CommonJs File is module
//Modules - Encapsulated code (ony shares minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./alternative-flavour')
require('./7-mind-grenade')

console.log(data)



sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)