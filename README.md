Setup and Run

```sh
$ git clone git@github.com:jamestalmage/process-kill-is-sync.git
$ cd process-kill-is-sync
$ npm install
$ npm test

# you should see this output:

exit events do not fire synchronously
exit events do not fire on nextTick
exit events do not fire after setTimeout(1000)
they do eventually fire

```

See: https://github.com/sindresorhus/ava/pull/120
