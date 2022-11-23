// GLOBALS - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// CommonJS, every file in node is a module (by default)
// Modules - Encapsulated Code (only share minimum)
// Only one file is run, the app.js, but code can be split into modules
const names = require('./names');
const sayHi = require('./utils');

require('./mind-grenade')
sayHi('General Kenobi');
sayHi(names.john);
sayHi(names.peter);