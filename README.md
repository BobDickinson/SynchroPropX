# SynchroPropX - Synchro PropertyCross sample app

This app is intended to be installed into a [Synchro Server](https://synchro.io) environment using the [Synchro Command Line Interface](https://www.npmjs.com/package/synchro) tool.  

The Synchro PropertyCross app demonstrates our implementation of the [PropertyCross](http://propertycross.com/) application.

## Installing Synchro PropertyCross

To install in your Synchro Server environment using the Synchro CLI:
```
$ synchro install https://github.com/SynchroLabs/SynchroPropX/archive/master.zip
```

Alternatively, you may use Git to install this app and keep it up to date.  To do that, you will want to clone SynchroPropX (this repo) into the `synchro-apps` directory in your Synchro installation, then install Synchro PropertyCrosss into your configuration using the Synchro CLI:

```
$ synchro add SynchroPropX synchro-propx
```

## Updating Synchro PropertyCross

If you installed this app using `synchro install`, then you may update it (getting the most recent version) at any time by doing:

```
$ synchro install -u synchro-propx
```

Of course if you installed by cloning the repo, then you will use Git to update as appropriate.
