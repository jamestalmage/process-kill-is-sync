'use strict';

var assert = require('assert');
var path = require('path').join(__dirname, 'worker-bee.js');
var ps = require('child_process').fork(path);

var messages = [];

ps.on('message', function(message) {
  messages.push(message);
  if (/delay/.test(message)) {
    ps.kill();

    assert.deepEqual(messages, [
      'child: start',
      'child: delay'
    ]);
    console.log('exit events do not fire synchronously');

    setImmediate(function() {
      assert.deepEqual(messages, [
        'child: start',
        'child: delay'
      ]);
      console.log('exit events do not fire on nextTick');
    });

    setTimeout(function() {
      assert.deepEqual(messages, [
        'child: start',
        'child: delay'
      ]);
      console.log('exit events do not fire after setTimeout(1000)');
    }, 1000);
  }
});

ps.on('exit', function() {
  messages.push('parent: exit');
  assert.deepEqual(messages, [
    'child: start',
    'child: delay',
    'child: exit',
    'parent: exit'
  ]);
  console.log('they do eventually fire');
});