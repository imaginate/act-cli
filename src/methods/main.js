/**
 * -----------------------------------------------------------------------------
 * ACT CLI: RUN ACT CLI
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

/// @include ./parse-args.js
/// @include ./parse-tasks.js
/// @include ./get-act-path.js

/**
 * @public
 * @param {(...string|!Array<string>)} cmd
 * @return {boolean}
 */
function runActCli(cmd) {

  /** @type {string} */
  var $cwd;

  /// @include ./parse-opts.js
  /// @include ./get-pkg-config.js

  /** @type {!Tasks} */
  var tasks;
  /** @type {!TypeError} */
  var error;
  /** @type {!Array<string>} */
  var args;
  /** @type {!Options} */
  var opts;

  if ( is.gt(arguments.length, 1) )
    cmd = slice(arguments);

  if ( !is('!strings|string', cmd) ) {
    error = new TypeError(
      'invalid `cmd` param (must be one array of strings or a string)'
    );
    err('Failed `act` command', error, { cmd: cmd });
    return false;
  }

  $cwd = process.cwd();
  $cwd = resolvePath($cwd);

  args = parseArgs(cmd);
  opts = parseOpts(args);
  tasks = parseTasks(args);
  opts.pkg = getPkgConfig();
  opts.act = getActPath($cwd);
  opts.cwd = $cwd;
  return require(opts.act)(opts, tasks);
}

