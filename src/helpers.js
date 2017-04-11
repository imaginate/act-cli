/**
 * -----------------------------------------------------------------------------
 * ACT CLI: HELPERS
 * -----------------------------------------------------------------------------
 * @version 1.0.0
 * @see [act-cli](https://github.com/imaginate/act-cli)
 *
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2017 Adam A Smith <adam@imaginate.life> (https://imaginate.life)
 *
 * @see [JSDoc3](http://usejsdoc.org)
 * @see [Closure Compiler JSDoc](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

/**
 * @see [node.js](https://nodejs.org/api/process.html#process_process_cwd)
 * @private
 * @param {...string=} path
 * @return {string}
 */
var resolvePath = PATH.resolve;

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
 * @param {string} cmd
 * @return {boolean}
 */
is.actCmd = (function _new_isActCmd() {

  /**
   * @private
   * @const {!RegExp}
   */
  var ACT = /^["']?(?:.+[\/\\])?act(?:-cli)?(?:\.js)?["']?$/;

  return function isActCmd(cmd) {
    return !!cmd && has(cmd, ACT);
  };
})();

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
 * @private
 * @param {string} cmd
 * @return {boolean}
 */
is.nodeCmd = (function _new_isNodeCmd() {

  /**
   * @private
   * @const {!RegExp}
   */
  var NODE = /^["']?(?:.+[\/\\])?node(?:js)?(?:\.[a-zA-Z]+)?["']?$/;

  function isNodeCmd(cmd) {
    return !!cmd && has(cmd, NODE);
  };
})();

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

LOG.setFormat('all', {
  'lineLimit': 80
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

pass.setFormat({
  'linesAfter': 0
});

