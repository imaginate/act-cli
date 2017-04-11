/**
 * -----------------------------------------------------------------------------
 * ACT CLI: PARSE ARGS
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
 * @private
 * @param {(!Array<string>|string)} cmd
 * @return {!Array<string>}
 */
function parseArgs(cmd) {

  /** @type {!Array<string>} */
  var args;

  if ( is.str(cmd) ) {
    cmd = remap(cmd, /[ \t]+/g,  ' ');
    cmd = cut(cmd, /^ +/, / +$/);
    cmd = to.arr(cmd, ' ');
  }

  return is.nodeCmd(cmd[0]) && is.actCmd(cmd[1])
    ? slice(cmd, 2)
    : is.actCmd(cmd[0])
      ? slice(cmd, 1)
      : slice(cmd);
}

