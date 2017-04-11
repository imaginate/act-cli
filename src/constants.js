/**
 * -----------------------------------------------------------------------------
 * ACT CLI: CONSTANTS
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
 * @see [log-ocd](https://github.com/imaginate/log-ocd)
 * @private
 * @const {!Object<string, function>}
 */
var LOG = require('log-ocd')();

/**
 * @see [node.js](https://nodejs.org/api/path.html)
 * @private
 * @const {!Object<string, function>}
 */
var PATH = require('path');

/**
 * @see [vitals](https://github.com/imaginate/vitals/wiki)
 * @private
 * @const {!Object<string, function>}
 */
var VITALS = require('node-vitals')('base', 'fs');

