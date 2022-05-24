var exec = require('child_process').exec;
/*
exec("curl https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz -L -o ffmpeg.tar.gz && mkdir ~/bin && tar -xf ffmpeg.tar.gz -C ~/bin && echo 'export PATH=$PATH:bin/ffmpeg-5.0.1-amd64-static' >> ~/.bashrc", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
            console.log('exec error: ' + error);
    }
});*/
exec("git clone https://github.com/imagineeeinc/Amethyst.git && cd Amethyst && npm i && npm i ffmpeg-static && npm start", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
            console.log('exec error: ' + error);
    }
});
