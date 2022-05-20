var exec = require('child_process').exec;

exec('apt install g++ && git clone https://github.com/imagineeeinc/Amethyst.git && cd Amethyst && npm i && npm start ', function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
            console.log('exec error: ' + error);
    }
});
