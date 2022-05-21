var exec = require('child_process').exec;

exec("echo 'deb http://ftp.us.debian.org/debian stretch main contrib non-free' >> /etc/apt/sources.list && apt-get update && apt install ffmpeg && git clone https://github.com/imagineeeinc/Amethyst.git && cd Amethyst && npm i && npm start!", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
            console.log('exec error: ' + error);
    }
});
