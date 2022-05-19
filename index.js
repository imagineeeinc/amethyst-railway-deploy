var exec = require('child_process').exec;

exec('git clone https://github.com/imagineeeinc/Amethyst.git && cd Amethyst && npm i', function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
            console.log('exec error: ' + error);
    }
});