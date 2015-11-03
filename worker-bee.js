'use strict';

process.send('child: start');

process.on('exit', function () {
  process.send('child: exit');
});

setTimeout(function () {
  process.send('child: delay');
});