# act-cli [![build status](https://travis-ci.org/imaginate/act-cli.svg?branch=master)](https://travis-ci.org/imaginate/act-cli) [![npm version](https://img.shields.io/badge/npm-1.0.0-red.svg?style=flat)](https://www.npmjs.com/package/node-act-cli)
### Act Quickly
The command line interface utility for [act](https://github.com/imaginate/act). It supports [Posix](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html#tag_12_02) and [GNU](https://www.gnu.org/prep/standards/html_node/Command_002dLine-Interfaces.html) style options for all platforms.

### WARNING
**v1.0.0 is not yet complete. This is not officially launched.**

## Install
```bash
npm install -g node-act-cli
```

## Use
```bash

  act [...OPTION] [...TASK [...TASK_OPTION]]

  Options:
    -c|--cd|--chdir=DIR  Change to the directory before looking for `package.json'.
    -h|-?|--help         Print the local help info and exit.
    -v|--version         Print the local version info and exit.

  Values:
    DIR   Must be a valid absolute or relative directory path.
    TASK  Must be a valid task or alias name for the local project.

  Exit Codes:
    0  PASS
    *  FAIL

```

## Other Details
**contributing:** [see contributing guideline](https://github.com/imaginate/act-cli/blob/master/CONTRIBUTING.md)<br>
**bugs/improvements:** [open an issue](https://github.com/imaginate/act-cli/issues)<br>
**questions:** <adam@imaginate.life>
