var figlet = require('figlet');

const data = figlet.textSync('Frontend Bootcamp!', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default'
});

module.exports = data;

