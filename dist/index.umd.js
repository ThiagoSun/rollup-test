(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.rtRollupUtils = {}, global.React));
}(this, (function (exports, React) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Built-in value references. */
  var Symbol = root.Symbol;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag$1 && symToStringTag$1 in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && baseGetTag(value) == symbolTag);
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return root.Date.now();
  };

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          timeWaiting = wait - timeSinceLastCall;

      return maxing
        ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
        : timeWaiting;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT$1 = 'Expected a function';

  /**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */
  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }

  var index = 42;

  const f0 = () => {
    return index;
  };

  const f2 = () => {
    return 2;
  };

  const f3 = () => {
    return 3;
  };

  const f4 = () => {
    return f3() + 1;
  };

  var index$1 = {
    f0,
    f2,
    f4
  };

  var styles = {"btn":"index-module_btn__1rK5U"};

  function Button(props) {
    const [clicked, setClicked] = React.useState(false);

    const handleClick = () => {
      setClicked(true);

      if (typeof props.onClick === 'function') {
        props.onClick();
      }
    };

    return /*#__PURE__*/React__default.createElement("button", {
      onClick: handleClick,
      className: styles.btn
    }, props.text);
  }

  var index$2 = /*#__PURE__*/React__default.memo(Button);

  var maoImg = "data:image/jpeg;base64,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";

  class ImgTest extends React__default.Component {
    render() {
      return /*#__PURE__*/React__default.createElement("img", {
        src: maoImg,
        className: "mao-img"
      });
    }

  }

  exports.Button = index$2;
  exports.ImgTest = ImgTest;
  exports.theAnswer = index$1;
  exports.throttle = throttle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
