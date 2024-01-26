const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Ugrasenan V.')

fs.appendFileSync('notes.txt', ' I live in Chennai.')
