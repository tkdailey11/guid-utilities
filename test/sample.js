var fs = require('fs');

const regex = /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/ig;

fs.readFile('sampleText.txt', 'utf8', function(err, data) {
    if (err) throw err

    console.log(data.replace(regex, 'ferret'));
});