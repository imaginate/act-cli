/**
 * -----------------------------------------------------------------------------
 * LOCAL TASK: version
 * -----------------------------------------------------------------------------
 * @desc Updates the version in all files in the repo.
 * @use `node ./.task/version SEMVER'
 *
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2017 Adam A Smith <adam@imaginate.life> (https://imaginate.life)
 *
 * @see [JSDoc3](http://usejsdoc.org)
 * @see [Closure Compiler JSDoc](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

'use strict';

////////////////////////////////////////////////////////////////////////////////
// LOG HELPERS
////////////////////////////////////////////////////////////////////////////////

/**
 * @see [log-ocd](https://github.com/imaginate/log-ocd)
 * @private
 * @const {!Object<string, function>}
 */
var LOG = require('log-ocd')();

LOG.setFormat('all', {
  'linesBefore': 0,
  'linesAfter':  0,
  'lineLimit':   80
});

/**
 * @see [log-ocd](https://github.com/imaginate/log-ocd)
 * @private
 * @param {...*} vals
 * @return {boolean}
 */
var log = LOG.log;

/**
 * @see [log-ocd](https://github.com/imaginate/log-ocd)
 * @private
 * @param {...*} vals
 * @return {boolean}
 */
var err = LOG.error;

err.setConfig({
  'ocdmap': true,
  'throw':  false,
  'exit':   true
});

/**
 * @see [log-ocd](https://github.com/imaginate/log-ocd)
 * @private
 * @param {...*} vals
 * @return {boolean}
 */
var pass = LOG.pass;

////////////////////////////////////////////////////////////////////////////////
// PATH HELPERS
////////////////////////////////////////////////////////////////////////////////

/**
 * @see [node.js](https://nodejs.org/api/path.html)
 * @private
 * @const {!Object<string, function>}
 */
var PATH = require('path');

/**
 * @see [node.js](https://nodejs.org/api/process.html#process_process_cwd)
 * @private
 * @param {...string=} path
 * @return {string}
 */
var resolvePath = PATH.resolve;

////////////////////////////////////////////////////////////////////////////////
// VITALS HELPERS
////////////////////////////////////////////////////////////////////////////////

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki)
 * @private
 * @const {!Object<string, function>}
 */
var VITALS = require('node-vitals')('base', 'fs');

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki/vitals.copy)
 * @private
 * @param {*} val
 * @param {boolean=} deep
 * @return {*}
 */
var copy = VITALS.copy;

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki/vitals.cut)
 * @private
 * @param {!(Object|function|Array|string)} source
 * @param {...*} vals
 * @param {Object=} thisArg
 * @return {!(Object|function|Array|string)}
 */
var cut = VITALS.cut;

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki/vitals.each)
 * @private
 * @param {!(Object|function|Array|number|string)} source
 * @param {function(*=, (string|number)=, !(Object|function)=)} iteratee
 * @param {Object=} thisArg
 * @return {(Object|function|Array|undefined)}
 */
var each = VITALS.each;

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki/vitals.fill)
 * @private
 * @param {?(Array|Object|function|number)} source
 * @param {(!Array|string)=} keys
 * @param {*} val
 * @param {number=} start [default= 0]
 * @param {number=} end [default= source.length]
 * @return {?(Array|Object|function|string)}
 */
var fill = VITALS.fill;

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki/vitals.fuse)
 * @private
 * @param {!(Object|function|Array|string)} dest
 * @param {...*} vals
 * @return {!(Object|function|Array|string)}
 */
var fuse = VITALS.fuse;

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki/vitals.get)
 * @private
 * @param {!(Object|function|Array|string)} source - If no val param is
 * @param {*=} val - For a `RegExp` val and object/string source this method
 * @return {!Array}
 */
var get = VITALS.get;

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki/vitals.has)
 * @private
 * @param {?(Object|function|string|Array)} source
 * @param {*} val
 * @return {boolean}
 */
var has = VITALS.has;

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki/vitals.is)
 * @private
 * @param {string} types
 * @param {...*} val
 * @return {boolean}
 */
var is = VITALS.is;

/**
 * @private
 * @param {number} val1
 * @param {number} val2
 * @return {boolean}
 */
is.equal = function isEqual(val1, val2) {
  return is.num(val1, val2) && val1 === val2;
};
is.eq = is.equal;

/**
 * @private
 * @param {number} val1
 * @param {number} val2
 * @return {boolean}
 */
is.greater = function isGreater(val1, val2) {
  return is.num(val1, val2) && val1 > val2;
};
is.gt = is.greater;

/**
 * @private
 * @param {number} val1
 * @param {number} val2
 * @return {boolean}
 */
is.greaterEqual = function isGreaterEqual(val1, val2) {
  return is.num(val1, val2) && val1 >= val2;
};
is.ge = is.greaterEqual;

/**
 * @private
 * @param {number} val1
 * @param {number} val2
 * @return {boolean}
 */
is.less = function isLess(val1, val2) {
  return is.num(val1, val2) && val1 < val2;
};
is.lt = is.less;

/**
 * @private
 * @param {number} val1
 * @param {number} val2
 * @return {boolean}
 */
is.lessEqual = function isLessEqual(val1, val2) {
  return is.num(val1, val2) && val1 <= val2;
};
is.le = is.lessEqual;

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki/vitals.remap)
 * @private
 * @param {!(Object|function|Array|string)} source
 * @param {*} iteratee
 * @param {*=} replacement
 * @param {Object=} thisArg
 * @return {!(Object|function|Array|string)}
 */
var remap = VITALS.remap;

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki/vitals.roll)
 * @private
 * @param {*=} base
 * @param {!(Object|function|Array|number)} source
 * @param {function(*=, *=, (string|number)=, !(Object|function)=)} iteratee
 * @param {Object=} thisArg
 * @return {*}
 */
var roll = VITALS.roll;

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki/vitals.same)
 * @private
 * @param {*} val1
 * @param {*} val2
 * @return {boolean}
 */
var same = VITALS.same;

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki/vitals.slice)
 * @private
 * @param {?(Object|Array|function|string)} source
 * @param {number=} start [default= 0]
 * @param {number=} end [default= source.length]
 * @return {?(Array|string)}
 */
var slice = VITALS.slice;

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki/vitals.to)
 * @private
 * @type {!Object<string, function>}
 */
var to = VITALS.to;

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki/vitals.until)
 * @private
 * @param {*} end
 * @param {!(Object|function|Array|number|string)=} source
 * @param {function(*=, (string|number)=, (!Object|function)=)} iteratee
 * @param {Object=} thisArg
 * @return {boolean}
 */
var until = VITALS.until;

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @const {string}
 */
var REPODIR = resolvePath(__dirname, '..');

/**
 * @private
 * @const {!RegExp}
 */
var SEMVER = /^[0-9]+\.[0-9]+\.[0-9]+(?:-[a-z]+\.?[0-9]*)?$/;

/**
 * @private
 * @const {!RegExp}
 */
var BDGVER = /(badge\/npm-)[0-9]+\.[0-9]+\.[0-9]+(?:--[a-z]+\.?[0-9]*)?/;

/**
 * @private
 * @const {!RegExp}
 */
var SRCVER = /(@version[ \t]+v?)[0-9]+\.[0-9]+\.[0-9]+(?:-[a-z]+\.?[0-9]*)?\b/g;

/**
 * @private
 * @const {!RegExp}
 */
var PKGVER = /("version": ")[0-9]+\.[0-9]+\.[0-9]+(?:-[a-z]+\.?[0-9]*)?/;

////////////////////////////////////////////////////////////////////////////////
// MAIN METHODS
////////////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @param {string} version
 */
function updateAllVersion(version) {

  /** @type {!Array<string>} */
  var filepaths;
  /** @type {!Error} */
  var error;

  if ( !isSemVersion(version) ) {
    error = new Error('invalid `version` (must be a semantic version)');
    err('Failed `version` Task', error, { version: version });
    throw error;
  }

  filepaths = get.filepaths(REPODIR, {
    basepath:    true,
    recursive:   true,
    validExts:   'js',
    invalidDirs: '.*|node_modules|tmp'
  });
  insertVersions(filepaths, version);

  updateNPMVersion(version);
}

/**
 * @private
 * @param {string} version
 */
function updateNPMVersion(version) {

  /** @type {string} */
  var filepath;
  /** @type {string} */
  var content;
  /** @type {!Error} */
  var error;

  if ( !isSemVersion(version) ) {
    error = new Error('invalid `version` (must be a semantic version)');
    err('Failed `version` Task', error, { version: version });
    throw error;
  }

  filepath = resolvePath(REPODIR, 'package.json');
  content  = get.file(filepath);
  version  = fuse('$1', version);
  content  = remap(content, PKGVER, version);
  to.file(content, filepath);

  filepath = resolvePath(REPODIR, 'README.md');
  content  = get.file(filepath);
  version  = remap(version, /-/, '--');
  content  = remap(content, BDGVER, version);
  to.file(content, filepath);
}

////////////////////////////////////////////////////////////////////////////////
// HELPER METHODS
////////////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @param {string} version
 * @return {boolean}
 */
function isSemVersion(version) {
  return !!version && has(version, SEMVER);
}

/**
 * @private
 * @param {!Array<string>} filepaths
 * @param {string} version
 */
function insertVersions(filepaths, version) {
  version = fuse('$1', version);
  each(filepaths, function(filepath) {
    insertVersion(filepath, version);
  });
}

/**
 * @private
 * @param {string} filepath
 * @param {string} version
 */
function insertVersion(filepath, version) {

  /** @type {string} */
  var content;

  content = get.file(filepath);
  content = remap(content, SRCVER, version);
  to.file(content, filepath);
}

////////////////////////////////////////////////////////////////////////////////
// UPDATE VERSIONS
////////////////////////////////////////////////////////////////////////////////

updateAllVersion(process.argv[2]);
pass('Completed `version` Task');

