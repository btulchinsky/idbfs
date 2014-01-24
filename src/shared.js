define(function(require) {

  require("crypto-js/rollups/sha256"); var Crypto = CryptoJS;

  function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    }).toUpperCase();
  }

  function hash(string) {
    return Crypto.SHA256(string).toString(Crypto.enc.hex);
  }

  function nop() {}

  /*
   * toUnixTimestamp (modified)
   * Taken from https://github.com/joyent/node/blob/master/lib/fs.js#L854-L863
   */
  function toUnixTimestamp(time) {
    if (isNumber(time) && time >= 0) {
      return time;
    }
    if (isDate(time)) {
      // convert to 123.456 UNIX timestamp
      return time.getTime() / 1000;
    }
    // throw new Error('Cannot parse time: ' + time);
    return null;
  }

  /*
   * isNumber
   * Taken from https://github.com/joyent/node/blob/master/lib/util.js#L469-L471
   */
  function isNumber(arg) {
    return typeof arg === 'number';
  }

  /*
   * isDate
   * Taken from https://github.com/joyent/node/blob/master/lib/util.js#L499-L501
   */
  function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
  }

  /*
   * isObject
   * Taken from https://github.com/joyent/node/blob/master/lib/util.js#L494-L496
   */
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }

  /*
   * objectToString
   * Taken from https://github.com/joyent/node/blob/master/lib/util.js#L530-L532
   */

  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }

  return {
    guid: guid,
    hash: hash,
    nop: nop,
    toUnixTimestamp: toUnixTimestamp,
    isDate: isDate,
    isNumber: isNumber
  };

});
