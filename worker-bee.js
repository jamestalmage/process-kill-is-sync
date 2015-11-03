'use strict';

var onExit = require('signal-exit');

process.send('child: start');

onExit(function() {
  var start = Date.now();
  while (Date.now() - start < 2000) {
    // kill time (synchronously)
  }
  process.send('child: exit');
}, {alwaysLast: true});

setTimeout(function () {
  process.send('child: delay');
});