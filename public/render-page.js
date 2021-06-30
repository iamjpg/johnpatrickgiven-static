/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./.cache/_this_is_virtual_fs_path_/$virtual/ssr-sync-requires":
/*!*********************************************************************!*\
  !*** ./.cache/_this_is_virtual_fs_path_/$virtual/ssr-sync-requires ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


  // prefer default export if available
  const preferDefault = m => (m && m.default) || m
  

exports.ssrComponents = {
  "component---cache-dev-404-page-js": preferDefault(__webpack_require__(/*! ./.cache/dev-404-page.js */ "./.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js"))
  }



/***/ }),

/***/ "./.cache/redirects.json":
/*!*******************************!*\
  !*** ./.cache/redirects.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = [];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/lib/history.js":
/*!***************************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/lib/history.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalHistory": () => (/* binding */ globalHistory),
/* harmony export */   "navigate": () => (/* binding */ navigate),
/* harmony export */   "createHistory": () => (/* binding */ createHistory),
/* harmony export */   "createMemorySource": () => (/* binding */ createMemorySource)
/* harmony export */ });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;


  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, { key: Date.now() + "" });
        // try...catch iOS Safari limits to 100 pushState calls
        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search.length ? "?" + search : search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////



/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/lib/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/lib/utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startsWith": () => (/* binding */ startsWith),
/* harmony export */   "pick": () => (/* binding */ pick),
/* harmony export */   "match": () => (/* binding */ match),
/* harmony export */   "resolve": () => (/* binding */ resolve),
/* harmony export */   "insertParams": () => (/* binding */ insertParams),
/* harmony export */   "validateRedirect": () => (/* binding */ validateRedirect),
/* harmony export */   "shallowCompare": () => (/* binding */ shallowCompare)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);


////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : 0 : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/lib/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/lib/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  true ? (0, _invariant2.default)(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : 0 : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;
exports.shallowCompare = shallowCompare;

/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/filter-obj/index.js":
/*!******************************************!*\
  !*** ./node_modules/filter-obj/index.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";

module.exports = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};


/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");

var _utils = __webpack_require__(/*! @gatsbyjs/reach-router/lib/utils */ "./node_modules/@gatsbyjs/reach-router/lib/utils.js");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

var isAbsolutePath = function isAbsolutePath(path) {
  return path === null || path === void 0 ? void 0 : path.startsWith("/");
};

function withPrefix(path, prefix) {
  var _ref, _prefix;

  if (prefix === void 0) {
    prefix = getGlobalBasePrefix();
  }

  if (!isLocalLink(path)) {
    return path;
  }

  if (path.startsWith("./") || path.startsWith("../")) {
    return path;
  }

  var base = (_ref = (_prefix = prefix) !== null && _prefix !== void 0 ? _prefix : getGlobalPathPrefix()) !== null && _ref !== void 0 ? _ref : "/";
  return "" + (base !== null && base !== void 0 && base.endsWith("/") ? base.slice(0, -1) : base) + (path.startsWith("/") ? path : "/" + path);
} // These global values are wrapped in typeof clauses to ensure the values exist.
// This is especially problematic in unit testing of this component.


var getGlobalPathPrefix = function getGlobalPathPrefix() {
  return  true ?  true ? "" : 0 : 0;
};

var getGlobalBasePrefix = function getGlobalBasePrefix() {
  return  true ?  true ? "" : 0 : 0;
};

var isLocalLink = function isLocalLink(path) {
  return path && !path.startsWith("http://") && !path.startsWith("https://") && !path.startsWith("//");
};

function withAssetPrefix(path) {
  return withPrefix(path, getGlobalPathPrefix());
}

function absolutify(path, current) {
  // If it's already absolute, return as-is
  if (isAbsolutePath(path)) {
    return path;
  }

  return (0, _utils.resolve)(path, current);
}

var rewriteLinkPath = function rewriteLinkPath(path, relativeTo) {
  if (typeof path === "number") {
    return path;
  }

  if (!isLocalLink(path)) {
    return path;
  }

  return isAbsolutePath(path) ? withPrefix(path) : absolutify(path, relativeTo);
};

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

function GatsbyLinkLocationWrapper(props) {
  return /*#__PURE__*/_react.default.createElement(_reachRouter.Location, null, function (_ref2) {
    var location = _ref2.location;
    return /*#__PURE__*/_react.default.createElement(GatsbyLink, (0, _extends2.default)({}, props, {
      _location: location
    }));
  });
}

var GatsbyLink = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    _this.defaultGetProps = function (_ref3) {
      var isPartiallyCurrent = _ref3.isPartiallyCurrent,
          isCurrent = _ref3.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    };

    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto._prefetch = function _prefetch() {
    var currentPath = window.location.pathname; // reach router should have the correct state

    if (this.props._location && this.props._location.pathname) {
      currentPath = this.props._location.pathname;
    }

    var rewrittenPath = rewriteLinkPath(this.props.to, currentPath);
    var newPathName = (0, _parsePath.parsePath)(rewrittenPath).pathname; // Prefech is used to speed up next navigations. When you use it on the current navigation,
    // there could be a race-condition where Chrome uses the stale data instead of waiting for the network to complete

    if (currentPath !== newPathName) {
      ___loader.enqueue(newPathName);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      this._prefetch();
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      this._prefetch();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;
    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function () {
        _this2._prefetch();
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        _location = _this$props._location,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace", "_location"]);

    if ( true && !isLocalLink(to)) {
      console.warn("External link " + to + " was detected in a Link component. Use the Link component only for internal links. See: https://gatsby.dev/internal-links");
    }

    var prefixedTo = rewriteLinkPath(to, _location.pathname);

    if (!isLocalLink(prefixedTo)) {
      return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
        href: prefixedTo
      }, rest));
    }

    return /*#__PURE__*/_react.default.createElement(_reachRouter.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(prefixedTo).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault();
          var shouldReplace = replace;

          var isCurrent = encodeURI(prefixedTo) === _location.pathname;

          if (typeof replace !== "boolean" && isCurrent) {
            shouldReplace = true;
          } // Make sure the necessary scripts and data are
          // loaded before continuing.


          window.___navigate(prefixedTo, {
            state: state,
            replace: shouldReplace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool,
  state: _propTypes.default.object
});

var _default = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(GatsbyLinkLocationWrapper, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(rewriteLinkPath(to, window.location.pathname), options);
};

exports.navigate = navigate;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = exports.ScrollContext = void 0;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

exports.ScrollContext = _scrollHandler.ScrollHandler;

var _useScrollRestoration = __webpack_require__(/*! ./use-scroll-restoration */ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js");

exports.useScrollRestoration = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-handler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-handler.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./node_modules/gatsby-react-router-scroll/session-storage.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";

var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);

  function ScrollHandler() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();
    _this._isTicking = false;
    _this._latestKnownScrollY = 0;

    _this.scrollListener = function () {
      _this._latestKnownScrollY = window.scrollY;

      if (!_this._isTicking) {
        _this._isTicking = true;
        requestAnimationFrame(_this._saveScroll.bind((0, _assertThisInitialized2.default)(_this)));
      }
    };

    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };

    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));

      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };

    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing this._stateStorage.


      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };

    return _this;
  }

  var _proto = ScrollHandler.prototype;

  _proto._saveScroll = function _saveScroll() {
    var key = this.props.location.key || null;

    if (key) {
      this._stateStorage.save(this.props.location, key, this._latestKnownScrollY);
    }

    this._isTicking = false;
  };

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
        key = _this$props$location.key,
        hash = _this$props$location.hash;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    } else if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
        hash = _this$props$location2.hash,
        key = _this$props$location2.key;
    var scrollPosition;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }
    /**  There are two pieces of state: the browser url and
     * history state which keeps track of scroll position
     * Native behaviour prescribes that we ought to restore scroll position
     * when a user navigates back in their browser (this is the `POP` action)
     * Currently, reach router has a bug that prevents this at https://github.com/reach/router/issues/228
     * So we _always_ stick to the url as a source of truth — if the url
     * contains a hash, we scroll to it
     */


    if (hash) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };

  return ScrollHandler;
}(React.Component);

exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/session-storage.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/session-storage.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to access sessionStorage; sessionStorage is not available.");
      }

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return 0;
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to save state in sessionStorage; sessionStorage is not available.");
      }
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports.SessionStorage = SessionStorage;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js":
/*!***************************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

var _react = __webpack_require__(/*! react */ "react");

var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");

function useScrollRestoration(identifier) {
  var location = (0, _reachRouter.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, [location.key]);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var plugins = [{
  name: 'gatsby-plugin-react-helmet',
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    try {
      const result = plugin.plugin[api](args, plugin.options);

      if (result && argTransform) {
        args = argTransform({
          args,
          result
        });
      }

      return result;
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`;
      }

      throw e;
    }
  }); // Filter out undefined results.

  results = results.filter(result => typeof result !== `undefined`);

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {ReactNode} $0.bodyComponent The React element to be rendered as the page body
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // Import React so that you can use JSX in HeadComponents
 * const React = require("react")
 *
 * const HtmlAttributes = {
 *   lang: "en"
 * }
 *
 * const HeadComponents = [
 *   <script key="my-script" src="https://gatsby.dev/my-script" />
 * ]
 *
 * const BodyAttributes = {
 *   "data-theme": "dark"
 * }
 *
 * exports.onRenderBody = ({
 *   setHeadComponents,
 *   setHtmlAttributes,
 *   setBodyAttributes
 * }, pluginOptions) => {
 *   setHtmlAttributes(HtmlAttributes)
 *   setHeadComponents(HeadComponents)
 *   setBodyAttributes(BodyAttributes)
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTML)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", props.htmlAttributes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", props.bodyAttributes, props.preBodyComponents, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: `body`,
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  headComponents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  bodyAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  preBodyComponents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  body: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  postBodyComponents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};

/***/ }),

/***/ "./.cache/dev-404-page.js":
/*!********************************!*\
  !*** ./.cache/dev-404-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");





class Dev404Page extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    const {
      data,
      location
    } = this.props;
    const pagePaths = data.allSitePage.nodes.map(node => node.path);
    const urlState = query_string__WEBPACK_IMPORTED_MODULE_3__.parse(location.search);
    const initialPagePathSearchTerms = urlState.filter ? urlState.filter : ``;
    this.state = {
      hasMounted: false,
      showCustom404: false,
      initPagePaths: pagePaths,
      pagePathSearchTerms: initialPagePathSearchTerms,
      pagePaths: this.getFilteredPagePaths(pagePaths, initialPagePathSearchTerms)
    };
    this.showCustom404 = this.showCustom404.bind(this);
    this.handlePagePathSearch = this.handlePagePathSearch.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      hasMounted: true
    });
  }

  showCustom404() {
    this.setState({
      showCustom404: true
    });
  }

  handleSearchTermChange(event) {
    const searchValue = event.target.value;
    this.setSearchUrl(searchValue);
    this.setState({
      pagePathSearchTerms: searchValue
    });
  }

  handlePagePathSearch(event) {
    event.preventDefault();
    const allPagePaths = [...this.state.initPagePaths];
    this.setState({
      pagePaths: this.getFilteredPagePaths(allPagePaths, this.state.pagePathSearchTerms)
    });
  }

  getFilteredPagePaths(allPagePaths, pagePathSearchTerms) {
    const searchTerm = new RegExp(`${pagePathSearchTerms}`);
    return allPagePaths.filter(pagePath => searchTerm.test(pagePath));
  }

  setSearchUrl(searchValue) {
    const {
      location: {
        pathname,
        search
      }
    } = this.props;
    const searchMap = query_string__WEBPACK_IMPORTED_MODULE_3__.parse(search);
    searchMap.filter = searchValue;
    const newSearch = query_string__WEBPACK_IMPORTED_MODULE_3__.stringify(searchMap);

    if (search !== `?${newSearch}`) {
      (0,gatsby__WEBPACK_IMPORTED_MODULE_2__.navigate)(`${pathname}?${newSearch}`, {
        replace: true
      });
    }
  }

  render() {
    var _this$props$data$allS;

    if (!this.state.hasMounted) {
      return null;
    } // Detect when the query returns the default function node that's added when functions
    // are *not* enabled. That seems the simplest way to communicate whether
    // functions are enabled or not to this page.
    // TODO remove when functions are shipped.


    const functionsEnabled = !(((_this$props$data$allS = this.props.data.allSiteFunction.nodes[0]) === null || _this$props$data$allS === void 0 ? void 0 : _this$props$data$allS.functionRoute) === `FAKE`);
    const {
      pathname
    } = this.props.location;
    let newFilePath;
    let newAPIPath;

    if (pathname === `/`) {
      newFilePath = `src/pages/index.js`;
    } else if (functionsEnabled && pathname.slice(0, 4) === `/api`) {
      newAPIPath = `src${pathname}.js`;
    } else if (pathname.slice(-1) === `/`) {
      newFilePath = `src/pages${pathname.slice(0, -1)}.js`;
    } else {
      newFilePath = `src/pages${pathname}.js`;
    }

    return this.state.showCustom404 ? this.props.custom404 : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Gatsby.js development 404 page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, `There's not a page ${functionsEnabled ? `or function ` : ``}yet at `, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, pathname)), this.props.custom404 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: this.showCustom404
    }, "Preview custom 404 page")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, `A custom 404 page wasn't detected - if you would like to add one, create a component in your site directory at `, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "src/pages/404.js"), "."), newFilePath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Create a page at this url"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Create a React.js component like the following in your site directory at", ` `, "\"", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, newFilePath), "\"", ` `, "and then refresh to show the new page component you created."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", {
      style: {
        border: `1px solid lightgray`,
        padding: `8px`,
        maxWidth: `80ch`,
        background: `#f3f3f3`
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
      dangerouslySetInnerHTML: {
        __html: `import * as React from "react"

export default function Component () {
  return "Hello world"
}`
      }
    }))), newAPIPath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Create an API function at this url"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Create a javascript file like the following in your site directory at", ` `, "\"", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, newAPIPath), "\"", ` `, "and refresh to execute the new API function you created."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", {
      style: {
        border: `1px solid lightgray`,
        padding: `8px`,
        maxWidth: `80ch`,
        background: `#f3f3f3`
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
      dangerouslySetInnerHTML: {
        __html: `
export default function API (req, res) {
  res.json({ hello: "world" })
}`
      }
    }))), this.state.initPagePaths.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If you were trying to reach another page", functionsEnabled ? ` or function` : ``, ", perhaps you can find it below."), functionsEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Functions (", this.props.data.allSiteFunction.nodes.length, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, this.props.data.allSiteFunction.nodes.map(node => {
      const functionRoute = `/api/${node.functionRoute}`;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: functionRoute
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: functionRoute
      }, functionRoute));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Pages (", this.state.pagePaths.length != this.state.initPagePaths.length ? `${this.state.pagePaths.length}/${this.state.initPagePaths.length}` : this.state.initPagePaths.length, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
      onSubmit: this.handlePagePathSearch
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Search:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      id: "search",
      placeholder: "Search pages...",
      value: this.state.pagePathSearchTerms,
      onChange: this.handleSearchTermChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "submit",
      value: "Submit"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, this.state.pagePaths.map((pagePath, index) => index < 100 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: pagePath
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: pagePath
    }, pagePath))), this.state.pagePaths.length > 100 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontWeight: `bold`
      }
    }, "... and ", this.state.pagePaths.length - 100, " more."))));
  }

}

Dev404Page.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  custom404: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dev404Page);
const pagesQuery = "2704779569";

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");

const emitter = (0,mitt__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMatchPaths": () => (/* binding */ setMatchPaths),
/* harmony export */   "findMatchPath": () => (/* binding */ findMatchPath),
/* harmony export */   "grabMatchParams": () => (/* binding */ grabMatchParams),
/* harmony export */   "findPath": () => (/* binding */ findPath),
/* harmony export */   "cleanPath": () => (/* binding */ cleanPath)
/* harmony export */ });
/* harmony import */ var _gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gatsbyjs/reach-router/lib/utils */ "./node_modules/@gatsbyjs/reach-router/lib/utils.js");
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
/* harmony import */ var _redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect-utils.js */ "./.cache/redirect-utils.js");




const pathCache = new Map();
let matchPaths = [];

const trimPathname = rawPathname => {
  const pathname = decodeURIComponent(rawPathname); // Remove the pathPrefix from the pathname.

  const trimmedPathname = (0,_strip_prefix__WEBPACK_IMPORTED_MODULE_1__.default)(pathname, decodeURIComponent("")) // Remove any hashfragment
  .split(`#`)[0] // Remove search query
  .split(`?`)[0];
  return trimmedPathname;
};

function absolutify(path) {
  // If it's already absolute, return as-is
  if (path.startsWith(`/`) || path.startsWith(`https://`) || path.startsWith(`http://`)) {
    return path;
  } // Calculate path relative to current location, adding a trailing slash to
  // match behavior of @reach/router


  return new URL(path, window.location.href + (window.location.href.endsWith(`/`) ? `` : `/`)).pathname;
}
/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */


const setMatchPaths = value => {
  matchPaths = value;
};
/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */

const findMatchPath = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);

  if (path) {
    return (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__.default)(path.route.originalPath);
  }

  return null;
};
/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */

const grabMatchParams = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);

  if (path) {
    return path.params;
  }

  return {};
}; // Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`

const findPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));

  if (pathCache.has(trimmedPathname)) {
    return pathCache.get(trimmedPathname);
  }

  const redirect = (0,_redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__.maybeGetBrowserRedirect)(rawPathname);

  if (redirect) {
    return findPath(redirect.toPath);
  }

  let foundPath = findMatchPath(trimmedPathname);

  if (!foundPath) {
    foundPath = cleanPath(rawPathname);
  }

  pathCache.set(trimmedPathname, foundPath);
  return foundPath;
};
/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */

const cleanPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));
  let foundPath = trimmedPathname;

  if (foundPath === `/index.html`) {
    foundPath = `/`;
  }

  foundPath = (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__.default)(foundPath);
  return foundPath;
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "withAssetPrefix": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.withAssetPrefix),
/* harmony export */   "withPrefix": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.withPrefix),
/* harmony export */   "graphql": () => (/* binding */ graphql),
/* harmony export */   "parsePath": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.parsePath),
/* harmony export */   "navigate": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.navigate),
/* harmony export */   "useScrollRestoration": () => (/* reexport safe */ gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__.useScrollRestoration),
/* harmony export */   "StaticQueryContext": () => (/* binding */ StaticQueryContext),
/* harmony export */   "StaticQuery": () => (/* binding */ StaticQuery),
/* harmony export */   "PageRenderer": () => (/* reexport default from dynamic */ _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default.a),
/* harmony export */   "useStaticQuery": () => (/* binding */ useStaticQuery),
/* harmony export */   "prefetchPathname": () => (/* binding */ prefetchPathname)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-react-router-scroll */ "./node_modules/gatsby-react-router-scroll/index.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");






const prefetchPathname = _loader__WEBPACK_IMPORTED_MODULE_5__.default.enqueue;
const StaticQueryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});

function StaticQueryDataRenderer({
  staticQueryData,
  data,
  query,
  render
}) {
  const finalData = data ? data.data : staticQueryData[query] && staticQueryData[query].data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, finalData && render(finalData), !finalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading (StaticQuery)"));
}

const StaticQuery = props => {
  const {
    data,
    query,
    render,
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryContext.Consumer, null, staticQueryData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryDataRenderer, {
    data: data,
    query: query,
    render: render || children,
    staticQueryData: staticQueryData
  }));
};

const useStaticQuery = query => {
  var _context$query;

  if (typeof (react__WEBPACK_IMPORTED_MODULE_0___default().useContext) !== `function` && "development" === `development`) {
    throw new Error(`You're likely using a version of React that doesn't support Hooks\n` + `Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);
  }

  const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(StaticQueryContext); // query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
  // to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
  // catch the misuse of the API and give proper direction

  if (isNaN(Number(query))) {
    throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);
  }

  if ((_context$query = context[query]) !== null && _context$query !== void 0 && _context$query.data) {
    return context[query].data;
  } else {
    throw new Error(`The result of this StaticQuery could not be fetched.\n\n` + `This is likely a bug in Gatsby and if refreshing the page does not fix it, ` + `please open an issue in https://github.com/gatsbyjs/gatsby/issues`);
  }
};

StaticQuery.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  render: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

function graphql() {
  throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` + `are supposed to only be evaluated at compile time, and then compiled away. ` + `Unfortunately, something went wrong and the query was left in the compiled code.\n\n` + `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);
}



/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageResourceStatus": () => (/* binding */ PageResourceStatus),
/* harmony export */   "BaseLoader": () => (/* binding */ BaseLoader),
/* harmony export */   "ProdLoader": () => (/* binding */ ProdLoader),
/* harmony export */   "setLoader": () => (/* binding */ setLoader),
/* harmony export */   "publicLoader": () => (/* binding */ publicLoader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticQueryResults": () => (/* binding */ getStaticQueryResults)
/* harmony export */ });
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");



/**
 * Available resource loading statuses
 */

const PageResourceStatus = {
  /**
   * At least one of critical resources failed to load
   */
  Error: `error`,

  /**
   * Resources loaded successfully
   */
  Success: `success`
};

const preferDefault = m => m && m.default || m;

const stripSurroundingSlashes = s => {
  s = s[0] === `/` ? s.slice(1) : s;
  s = s.endsWith(`/`) ? s.slice(0, -1) : s;
  return s;
};

const createPageDataUrl = path => {
  const fixedPath = path === `/` ? `index` : stripSurroundingSlashes(path);
  return `${""}/page-data/${fixedPath}/page-data.json`;
};

function doFetch(url, method = `GET`) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(method, url, true);

    req.onreadystatechange = () => {
      if (req.readyState == 4) {
        resolve(req);
      }
    };

    req.send(null);
  });
}

const doesConnectionSupportPrefetch = () => {
  if (`connection` in navigator && typeof navigator.connection !== `undefined`) {
    if ((navigator.connection.effectiveType || ``).includes(`2g`)) {
      return false;
    }

    if (navigator.connection.saveData) {
      return false;
    }
  }

  return true;
};

const toPageResources = (pageData, component = null) => {
  const page = {
    componentChunkName: pageData.componentChunkName,
    path: pageData.path,
    webpackCompilationHash: pageData.webpackCompilationHash,
    matchPath: pageData.matchPath,
    staticQueryHashes: pageData.staticQueryHashes
  };
  return {
    component,
    json: pageData.result,
    page
  };
};

class BaseLoader {
  constructor(loadComponent, matchPaths) {
    this.inFlightNetworkRequests = new Map();
    // Map of pagePath -> Page. Where Page is an object with: {
    //   status: PageResourceStatus.Success || PageResourceStatus.Error,
    //   payload: PageResources, // undefined if PageResourceStatus.Error
    // }
    // PageResources is {
    //   component,
    //   json: pageData.result,
    //   page: {
    //     componentChunkName,
    //     path,
    //     webpackCompilationHash,
    //     staticQueryHashes
    //   },
    //   staticQueryResults
    // }
    this.pageDb = new Map();
    this.inFlightDb = new Map();
    this.staticQueryDb = {};
    this.pageDataDb = new Map();
    this.prefetchTriggered = new Set();
    this.prefetchCompleted = new Set();
    this.loadComponent = loadComponent;
    (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.setMatchPaths)(matchPaths);
  }

  memoizedGet(url) {
    let inFlightPromise = this.inFlightNetworkRequests.get(url);

    if (!inFlightPromise) {
      inFlightPromise = doFetch(url, `GET`);
      this.inFlightNetworkRequests.set(url, inFlightPromise);
    } // Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox


    return inFlightPromise.then(response => {
      this.inFlightNetworkRequests.delete(url);
      return response;
    }).catch(err => {
      this.inFlightNetworkRequests.delete(url);
      throw err;
    });
  }

  setApiRunner(apiRunner) {
    this.apiRunner = apiRunner;
    this.prefetchDisabled = apiRunner(`disableCorePrefetching`).some(a => a);
  }

  fetchPageDataJson(loadObj) {
    const {
      pagePath,
      retries = 0
    } = loadObj;
    const url = createPageDataUrl(pagePath);
    return this.memoizedGet(url).then(req => {
      const {
        status,
        responseText
      } = req; // Handle 200

      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);

          if (jsonPayload.path === undefined) {
            throw new Error(`not a valid pageData response`);
          }

          return Object.assign(loadObj, {
            status: PageResourceStatus.Success,
            payload: jsonPayload
          });
        } catch (err) {// continue regardless of error
        }
      } // Handle 404


      if (status === 404 || status === 200) {
        // If the request was for a 404 page and it doesn't exist, we're done
        if (pagePath === `/404.html`) {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Error
          });
        } // Need some code here to cache the 404 request. In case
        // multiple loadPageDataJsons result in 404s


        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/404.html`,
          notFound: true
        }));
      } // handle 500 response (Unrecoverable)


      if (status === 500) {
        return Object.assign(loadObj, {
          status: PageResourceStatus.Error
        });
      } // Handle everything else, including status === 0, and 503s. Should retry


      if (retries < 3) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          retries: retries + 1
        }));
      } // Retried 3 times already, result is an error.


      return Object.assign(loadObj, {
        status: PageResourceStatus.Error
      });
    });
  }

  loadPageDataJson(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDataDb.has(pagePath)) {
      const pageData = this.pageDataDb.get(pagePath);

      if (true) {
        return Promise.resolve(pageData);
      }
    }

    return this.fetchPageDataJson({
      pagePath
    }).then(pageData => {
      this.pageDataDb.set(pagePath, pageData);
      return pageData;
    });
  }

  findMatchPath(rawPath) {
    return (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findMatchPath)(rawPath);
  } // TODO check all uses of this and whether they use undefined for page resources not exist


  loadPage(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDb.has(pagePath)) {
      const page = this.pageDb.get(pagePath);

      if (true) {
        if (page.error) {
          return {
            error: page.error,
            status: page.status
          };
        }

        return Promise.resolve(page.payload);
      }
    }

    if (this.inFlightDb.has(pagePath)) {
      return this.inFlightDb.get(pagePath);
    }

    const inFlightPromise = Promise.all([this.loadAppData(), this.loadPageDataJson(pagePath)]).then(allData => {
      const result = allData[1];

      if (result.status === PageResourceStatus.Error) {
        return {
          status: PageResourceStatus.Error
        };
      }

      let pageData = result.payload;
      const {
        componentChunkName,
        staticQueryHashes = []
      } = pageData;
      const finalResult = {};
      const componentChunkPromise = this.loadComponent(componentChunkName).then(component => {
        finalResult.createdAt = new Date();
        let pageResources;

        if (!component || component instanceof Error) {
          finalResult.status = PageResourceStatus.Error;
          finalResult.error = component;
        } else {
          finalResult.status = PageResourceStatus.Success;

          if (result.notFound === true) {
            finalResult.notFound = true;
          }

          pageData = Object.assign(pageData, {
            webpackCompilationHash: allData[0] ? allData[0].webpackCompilationHash : ``
          });
          pageResources = toPageResources(pageData, component);
        } // undefined if final result is an error


        return pageResources;
      });
      const staticQueryBatchPromise = Promise.all(staticQueryHashes.map(staticQueryHash => {
        // Check for cache in case this static query result has already been loaded
        if (this.staticQueryDb[staticQueryHash]) {
          const jsonPayload = this.staticQueryDb[staticQueryHash];
          return {
            staticQueryHash,
            jsonPayload
          };
        }

        return this.memoizedGet(`${""}/page-data/sq/d/${staticQueryHash}.json`).then(req => {
          const jsonPayload = JSON.parse(req.responseText);
          return {
            staticQueryHash,
            jsonPayload
          };
        }).catch(() => {
          throw new Error(`We couldn't load "${""}/page-data/sq/d/${staticQueryHash}.json"`);
        });
      })).then(staticQueryResults => {
        const staticQueryResultsMap = {};
        staticQueryResults.forEach(({
          staticQueryHash,
          jsonPayload
        }) => {
          staticQueryResultsMap[staticQueryHash] = jsonPayload;
          this.staticQueryDb[staticQueryHash] = jsonPayload;
        });
        return staticQueryResultsMap;
      });
      return Promise.all([componentChunkPromise, staticQueryBatchPromise]).then(([pageResources, staticQueryResults]) => {
        let payload;

        if (pageResources) {
          payload = { ...pageResources,
            staticQueryResults
          };
          finalResult.payload = payload;
          _emitter__WEBPACK_IMPORTED_MODULE_1__.default.emit(`onPostLoadPageResources`, {
            page: payload,
            pageResources: payload
          });
        }

        this.pageDb.set(pagePath, finalResult);

        if (finalResult.error) {
          return {
            error: finalResult.error,
            status: finalResult.status
          };
        }

        return payload;
      }) // when static-query fail to load we throw a better error
      .catch(err => {
        return {
          error: err,
          status: PageResourceStatus.Error
        };
      });
    });
    inFlightPromise.then(() => {
      this.inFlightDb.delete(pagePath);
    }).catch(error => {
      this.inFlightDb.delete(pagePath);
      throw error;
    });
    this.inFlightDb.set(pagePath, inFlightPromise);
    return inFlightPromise;
  } // returns undefined if the page does not exists in cache


  loadPageSync(rawPath, options = {}) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDb.has(pagePath)) {
      const pageData = this.pageDb.get(pagePath);

      if (pageData.payload) {
        return pageData.payload;
      }

      if (options !== null && options !== void 0 && options.withErrorDetails) {
        return {
          error: pageData.error,
          status: pageData.status
        };
      }
    }

    return undefined;
  }

  shouldPrefetch(pagePath) {
    // Skip prefetching if we know user is on slow or constrained connection
    if (!doesConnectionSupportPrefetch()) {
      return false;
    } // Check if the page exists.


    if (this.pageDb.has(pagePath)) {
      return false;
    }

    return true;
  }

  prefetch(pagePath) {
    if (!this.shouldPrefetch(pagePath)) {
      return false;
    } // Tell plugins with custom prefetching logic that they should start
    // prefetching this path.


    if (!this.prefetchTriggered.has(pagePath)) {
      this.apiRunner(`onPrefetchPathname`, {
        pathname: pagePath
      });
      this.prefetchTriggered.add(pagePath);
    } // If a plugin has disabled core prefetching, stop now.


    if (this.prefetchDisabled) {
      return false;
    }

    const realPath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(pagePath); // Todo make doPrefetch logic cacheable
    // eslint-disable-next-line consistent-return

    this.doPrefetch(realPath).then(() => {
      if (!this.prefetchCompleted.has(pagePath)) {
        this.apiRunner(`onPostPrefetchPathname`, {
          pathname: pagePath
        });
        this.prefetchCompleted.add(pagePath);
      }
    });
    return true;
  }

  doPrefetch(pagePath) {
    const pageDataUrl = createPageDataUrl(pagePath);
    return (0,_prefetch__WEBPACK_IMPORTED_MODULE_0__.default)(pageDataUrl, {
      crossOrigin: `anonymous`,
      as: `fetch`
    }).then(() => // This was just prefetched, so will return a response from
    // the cache instead of making another request to the server
    this.loadPageDataJson(pagePath));
  }

  hovering(rawPath) {
    this.loadPage(rawPath);
  }

  getResourceURLsForPathname(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);
    const page = this.pageDataDb.get(pagePath);

    if (page) {
      const pageResources = toPageResources(page.payload);
      return [...createComponentUrls(pageResources.page.componentChunkName), createPageDataUrl(pagePath)];
    } else {
      return null;
    }
  }

  isPageNotFound(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);
    const page = this.pageDb.get(pagePath);
    return !page || page.notFound;
  }

  loadAppData(retries = 0) {
    return this.memoizedGet(`${""}/page-data/app-data.json`).then(req => {
      const {
        status,
        responseText
      } = req;
      let appData;

      if (status !== 200 && retries < 3) {
        // Retry 3 times incase of non-200 responses
        return this.loadAppData(retries + 1);
      } // Handle 200


      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);

          if (jsonPayload.webpackCompilationHash === undefined) {
            throw new Error(`not a valid app-data response`);
          }

          appData = jsonPayload;
        } catch (err) {// continue regardless of error
        }
      }

      return appData;
    });
  }

}

const createComponentUrls = componentChunkName => (window.___chunkMapping[componentChunkName] || []).map(chunk => "" + chunk);

class ProdLoader extends BaseLoader {
  constructor(asyncRequires, matchPaths) {
    const loadComponent = chunkName => {
      if (!asyncRequires.components[chunkName]) {
        throw new Error(`We couldn't find the correct component chunk with the name ${chunkName}`);
      }

      return asyncRequires.components[chunkName]().then(preferDefault) // loader will handle the case when component is error
      .catch(err => err);
    };

    super(loadComponent, matchPaths);
  }

  doPrefetch(pagePath) {
    return super.doPrefetch(pagePath).then(result => {
      if (result.status !== PageResourceStatus.Success) {
        return Promise.resolve();
      }

      const pageData = result.payload;
      const chunkName = pageData.componentChunkName;
      const componentUrls = createComponentUrls(chunkName);
      return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_0__.default)).then(() => pageData);
    });
  }

  loadPageDataJson(rawPath) {
    return super.loadPageDataJson(rawPath).then(data => {
      if (data.notFound) {
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, `HEAD`).then(req => {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error
            };
          } // if HEAD request wasn't 200, return notFound result
          // and show 404 page


          return data;
        });
      }

      return data;
    });
  }

}
let instance;
const setLoader = _loader => {
  instance = _loader;
};
const publicLoader = {
  enqueue: rawPath => instance.prefetch(rawPath),
  // Real methods
  getResourceURLsForPathname: rawPath => instance.getResourceURLsForPathname(rawPath),
  loadPage: rawPath => instance.loadPage(rawPath),
  // TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
  loadPageSync: (rawPath, options = {}) => instance.loadPageSync(rawPath, options),
  prefetch: rawPath => instance.prefetch(rawPath),
  isPageNotFound: rawPath => instance.isPageNotFound(rawPath),
  hovering: rawPath => instance.hovering(rawPath),
  loadAppData: () => instance.loadAppData()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (publicLoader);
function getStaticQueryResults() {
  if (instance) {
    return instance.staticQueryDb;
  } else {
    return {};
  }
}

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (path => {
  if (path === undefined) {
    return path;
  }

  if (path === `/`) {
    return `/`;
  }

  if (path.charAt(path.length - 1) === `/`) {
    return path.slice(0, -1);
  }

  return path;
});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const support = function (feature) {
  if (typeof document === `undefined`) {
    return false;
  }

  const fakeLink = document.createElement(`link`);

  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === `function`) {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }

  return false;
};

const linkPrefetchStrategy = function (url, options) {
  return new Promise((resolve, reject) => {
    if (typeof document === `undefined`) {
      reject();
      return;
    }

    const link = document.createElement(`link`);
    link.setAttribute(`rel`, `prefetch`);
    link.setAttribute(`href`, url);
    Object.keys(options).forEach(key => {
      link.setAttribute(key, options[key]);
    });
    link.onload = resolve;
    link.onerror = reject;
    const parentElement = document.getElementsByTagName(`head`)[0] || document.getElementsByName(`script`)[0].parentNode;
    parentElement.appendChild(link);
  });
};

const xhrPrefetchStrategy = function (url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(`GET`, url, true);

    req.onload = () => {
      if (req.status === 200) {
        resolve();
      } else {
        reject();
      }
    };

    req.send(null);
  });
};

const supportedPrefetchStrategy = support(`prefetch`) ? linkPrefetchStrategy : xhrPrefetchStrategy;
const preFetched = {};

const prefetch = function (url, options) {
  return new Promise(resolve => {
    if (preFetched[url]) {
      resolve();
      return;
    }

    supportedPrefetchStrategy(url, options).then(() => {
      resolve();
      preFetched[url] = true;
    }).catch(() => {}); // 404s are logged to the console anyway
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/***/ ((module) => {

const preferDefault = m => m && m.default || m;

if (false) {} else if (false) {} else {
  module.exports = () => null;
}

/***/ }),

/***/ "./.cache/react-lifecycles-compat.js":
/*!*******************************************!*\
  !*** ./.cache/react-lifecycles-compat.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.polyfill = Component => Component;

/***/ }),

/***/ "./.cache/redirect-utils.js":
/*!**********************************!*\
  !*** ./.cache/redirect-utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybeGetBrowserRedirect": () => (/* binding */ maybeGetBrowserRedirect)
/* harmony export */ });
/* harmony import */ var _redirects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirects.json */ "./.cache/redirects.json");
 // Convert to a map for faster lookup in maybeRedirect()

const redirectMap = new Map();
const redirectIgnoreCaseMap = new Map();
_redirects_json__WEBPACK_IMPORTED_MODULE_0__.forEach(redirect => {
  if (redirect.ignoreCase) {
    redirectIgnoreCaseMap.set(redirect.fromPath, redirect);
  } else {
    redirectMap.set(redirect.fromPath, redirect);
  }
});
function maybeGetBrowserRedirect(pathname) {
  let redirect = redirectMap.get(pathname);

  if (!redirect) {
    redirect = redirectIgnoreCaseMap.get(pathname.toLowerCase());
  }

  return redirect;
}

/***/ }),

/***/ "./.cache/route-announcer-props.js":
/*!*****************************************!*\
  !*** ./.cache/route-announcer-props.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteAnnouncerProps": () => (/* binding */ RouteAnnouncerProps)
/* harmony export */ });
// This is extracted to separate module because it's shared
// between browser and SSR code
const RouteAnnouncerProps = {
  id: `gatsby-announcer`,
  style: {
    position: `absolute`,
    top: 0,
    width: 1,
    height: 1,
    padding: 0,
    overflow: `hidden`,
    clip: `rect(0, 0, 0, 0)`,
    whiteSpace: `nowrap`,
    border: 0
  },
  "aria-live": `assertive`,
  "aria-atomic": `true`
};

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stripPrefix)
/* harmony export */ });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */
function stripPrefix(str, prefix = ``) {
  if (!prefix) {
    return str;
  }

  if (str === prefix) {
    return `/`;
  }

  if (str.startsWith(`${prefix}/`)) {
    return str.slice(prefix.length);
  }

  return str;
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.onRenderBody = void 0;

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent(), helmet.base.toComponent()]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./src/components/layouts/footer.js":
/*!******************************************!*\
  !*** ./src/components/layouts/footer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_svg_twitter_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/svg/twitter.svg */ "./src/assets/svg/twitter.svg");
/* harmony import */ var _assets_svg_twitter_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_twitter_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_svg_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/svg/linkedin.svg */ "./src/assets/svg/linkedin.svg");
/* harmony import */ var _assets_svg_linkedin_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__);



function Footer(props) {
  const {
    klass
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: klass
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "http://twitter.com/iamjpg",
    target: "_blank",
    rel: "noreferrer",
    className: "nomarker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_assets_svg_twitter_svg__WEBPACK_IMPORTED_MODULE_1___default()), {
    width: 16,
    fill: "#e5e5e5"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.linkedin.com/in/given/",
    target: "_blank",
    rel: "noreferrer",
    className: "nomarker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_assets_svg_linkedin_svg__WEBPACK_IMPORTED_MODULE_2___default()), {
    width: 16,
    fill: "#e5e5e5"
  }))));
}

/***/ }),

/***/ "./src/components/layouts/main.js":
/*!****************************************!*\
  !*** ./src/components/layouts/main.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _layouts_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/footer */ "./src/components/layouts/footer.js");



function Layout({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "John Patrick Given is a Javascript Developer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Hello, my name is JP."), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_footer__WEBPACK_IMPORTED_MODULE_2__.default, null)));
}

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "returnRandomArrayItem": () => (/* binding */ returnRandomArrayItem)
/* harmony export */ });
const returnRandomArrayItem = items => items[Math.floor(Math.random() * items.length)];

/***/ }),

/***/ "./src/helpers/quotes.js":
/*!*******************************!*\
  !*** ./src/helpers/quotes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialQuotes)
/* harmony export */ });
function initialQuotes() {
  return [{
    _id: '5a6ce86e2af929789500e7e4',
    sr: 'Računarska nauka se tiče računara koliko i astronomija teleskopa.',
    en: 'Computer Science is no more about computers than astronomy is about telescopes.',
    author: 'Edsger W. Dijkstra',
    source: null,
    numberOfVotes: 16,
    rating: 4.2,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86e2af929789500e7e4'
  }, {
    _id: '5a6ce86e2af929789500e7d7',
    sr: 'Jednostavnost je preduslov za pouzdanost.',
    en: 'Simplicity is prerequisite for reliability.',
    author: 'Edsger W. Dijkstra',
    source: null,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86e2af929789500e7d7'
  }, {
    _id: '5a6ce86d2af929789500e7ca',
    sr: 'Najveći izazov za programera je da se ne zbuni pred kompleksnošću sopstvene tvorevine.',
    en: 'The computing scientist’s main challenge is not to get confused by the complexities of his own making.',
    author: 'Edsger W. Dijkstra',
    source: '',
    numberOfVotes: 8,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86d2af929789500e7ca'
  }, {
    _id: '5a6ce86f2af929789500e7f3',
    sr: 'Ako je debagovanje proces uklanjanja bagova, onda programiranje mora biti proces njihovog umetanja.',
    en: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
    author: 'Edsger W. Dijkstra',
    source: null,
    numberOfVotes: 5,
    rating: 4.7,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e7f3'
  }, {
    _id: '5a6ce86e2af929789500e7d9',
    sr: 'Program je kao pesma: ne možete napisati pesmu bez pisanja. Ipak, ljudi govore o programiranju kao procesu proizvodnje i mere „programersku produktivnost“ u terminima „broja proizvedenih linija koda“. Na taj način oni su na pogrešnoj strani knjige: Mi uvek gledamo „broj ušteđenih linija koda“.',
    en: 'A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure „programmer productivity“ in terms of „number of lines of code produced“. In so doing they book that number on the wrong side of the ledger: We should always refer to „the number of lines of code spent“.',
    author: 'Edsger W. Dijkstra',
    source: '',
    numberOfVotes: 1,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86e2af929789500e7d9'
  }, {
    _id: '5a6ce86f2af929789500e7f8',
    sr: 'Postoje dva načina izgradnje softvera: Jedan je napraviti ga toliko prostim da očigledno nema nedostaka, a drugi je napraviti ga toliko komplikovanim da nema očiglednih nedostataka. Prva metoda je puno teža.',
    en: 'There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.',
    author: 'Tony Hoare',
    source: '',
    numberOfVotes: 5,
    rating: 4.1,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e7f8'
  }, {
    _id: '5a6ce86f2af929789500e807',
    sr: 'Najbolji umovi moje generacije misle o tome kako naterati ljude da klikću reklame.',
    en: 'The best minds of my generation are thinking about how to make people click ads.',
    author: 'Jeff Hammerbacher',
    source: null,
    numberOfVotes: 6,
    rating: 4.1,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e807'
  }, {
    _id: '5a6ce86f2af929789500e7f9',
    sr: 'Alati koje koristimo imaju veliki uticaj na naše navike u razmišljanju, a samim tim i na našu sposobnost razmišljanja uopšte.',
    en: 'The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities.',
    author: 'Edsger W. Dijkstra',
    source: '',
    numberOfVotes: 4,
    rating: 4.9,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e7f9'
  }, {
    _id: '5a6ce86f2af929789500e7f5',
    sr: 'Kako ubediti ljude da u programiranju jednostavnost i jasnoća — što matematičari zovu "elegancija" — nisu nepriuštiv luksuz, već ključna stvar koja odlučuje između uspeha i propasti? ',
    en: 'How do we convince people that in programming simplicity and clarity — in short: what mathematicians call "elegance" — are not a dispensable luxury, but a crucial matter that decides between success and failure?',
    author: 'Edsger W. Dijkstra',
    source: null,
    numberOfVotes: 4,
    rating: 3.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e7f5'
  }, {
    _id: '5a6ce86f2af929789500e80b',
    sr: 'Dodavanje ljudstva na projekat koji kasni dovodi do još većeg kašnjenja.',
    en: 'Adding manpower to a late software project makes it later.',
    author: 'Fred Brooks',
    source: '',
    numberOfVotes: 4,
    rating: 4.9,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e80b'
  }, {
    _id: '5a6ce86f2af929789500e809',
    sr: 'Ponekad postoji srebrni metak softverske produktivnosti. Ali treba da upucate pravu osobu.',
    en: 'Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person.',
    author: 'Michael Stal',
    source: null,
    numberOfVotes: 3,
    rating: 3.4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e809'
  }, {
    _id: '5a6ce86f2af929789500e815',
    sr: 'Devet žena ne može roditi bebu za mesec dana.',
    en: "Nine women can't make a baby in one month.",
    author: 'Fred Brooks',
    source: 'Frederick P. Brooks Jr., The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e815'
  }, {
    _id: '5a6ce86f2af929789500e81a',
    sr: 'Izbrisan kod je debagovan kod.',
    en: 'Deleted code is debugged code.',
    author: 'Jeff Sickel',
    source: '',
    numberOfVotes: 3,
    rating: 4.9,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e81a'
  }, {
    _id: '5a6ce86f2af929789500e826',
    sr: 'Kada si u dvojbi, koristi brutalnu silu.',
    en: 'When in doubt, use brute force.',
    author: 'Ken Thompson',
    source: '',
    numberOfVotes: 3,
    rating: 4.2,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e826'
  }, {
    _id: '5a6ce86f2af929789500e814',
    sr: 'Kada zadatak ne može biti podeljen zbog sekvencijalnih ograničenja, primena većeg napora nema uticaja na rokove. Nošenje trudnoće traje devet meseci, bez obzira koliko žena dodali.',
    en: 'When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 4,
    rating: 3.7,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e814'
  }, {
    _id: '5a6ce86f2af929789500e816',
    sr: 'Ako svaki zadatak mora biti zasebno koordiniran sa svakim drugim, napor komunikacije raste n(n-1)/2. Tri radnika zahtevaju trostruko više međusobne komunikacije nego dva; četiri zahtevaju šestostruko više nego dva.',
    en: 'If each part of the task must be separately coordinated with each other part, the effort increases as n(n-1)/2. Three workers require three times as much pairwise intercommunication as two; four require six times as much as two.',
    author: 'Fred Brooks',
    source: 'Frederick P. Brooks Jr., The Mythical Man-Month',
    numberOfVotes: 3,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e816'
  }, {
    _id: '5a6ce86f2af929789500e818',
    sr: 'Imati sistemskog arhitektu je najvažniji korak ka konceptualnom integritetu. Nakon držanja laboratorija softverskog inženjerstva više od 20 puta, počeo sam da insistiram da mali studentski timovi, već od četvoro ljudi, izaberu menadžera i arhitektu.',
    en: 'Having a system architect is the most important single step toward conceptual integrity. After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect.',
    author: 'Fred Brooks',
    source: 'Frederick P. Brooks Jr., The Mythical Man-Month',
    numberOfVotes: 3,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e818'
  }, {
    _id: '5a6ce86f2af929789500e80f',
    sr: 'Programer, poput pesnika, radi tek neznatno udaljen od čiste misli. On gradi dvorce u vazduhu, od vazduha, stvarajući naporom mašte. Retki mediji stvaranja su tako gipki, tako jednostavni za poliranje i preradu, tako podesni za realizaciju veličanstvene konceptualne tvorevine.',
    en: 'The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures.',
    author: 'Fred Brooks',
    source: 'Frederick P. Brooks Jr., The Mythical Man-Month',
    numberOfVotes: 3,
    rating: 3.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e80f'
  }, {
    _id: '5a6ce86f2af929789500e821',
    sr: 'Prva lažna pretpostavka koja podriva rokove razvoja softvera je da će sve proći dobro, tj. da će svaki zadatak trajati samo koliko "treba" da traje. Veliki programerski projekti se, pak, sastoje od mnogo zadataka, od kojih su neki ulančani od početka do kraja. Verovatnoća da će sve proći dobro postaje nestvarno mala.',
    en: 'The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it "ought" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small.',
    author: 'Fred Brooks',
    source: 'Frederick P. Brooks Jr., The Mythical Man-Month',
    numberOfVotes: 3,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e821'
  }, {
    _id: '5a6ce86f2af929789500e81e',
    sr: 'Treba da zaboravimo na male učinkovitosti, recimo u oko 97% slučajeva: prerana optimizacija je koren svih zala. Međutim, ne smemo propustiti priliku u tih kritičnih 3%.',
    en: 'We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%.',
    author: 'Donald Knuth',
    source: 'Donald Knuth, Structured Programming with go to Statements, JACM Computing Surveys, Vol 6, No. 4, Dec. 1974, p.268',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e81e'
  }, {
    _id: '5a6ce86f2af929789500e824',
    sr: 'Jedan od mojih najproduktivnijih dana je bio kada sam bacio 1000 linija koda.',
    en: 'One of my most productive days was throwing away 1,000 lines of code.',
    author: 'Ken Thompson',
    source: '',
    numberOfVotes: 10,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e824'
  }, {
    _id: '5a6ce86f2af929789500e825',
    sr: 'Jedno precizno merenje vredi više od hiljadu ekspertskih mišljenja.',
    en: 'One accurate measurement is worth more than a thousand expert opinions.',
    author: 'Grace Hopper',
    source: null,
    numberOfVotes: 1,
    rating: 3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e825'
  }, {
    _id: '5a6ce86f2af929789500e80d',
    sr: 'Ono što jedan programer može uraditi za mesec dana, dva programera mogu uraditi za dva meseca.',
    en: 'What one programmer can do in one month, two programmers can do in two months.',
    author: 'Fred Brooks',
    source: null,
    numberOfVotes: 3,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e80d'
  }, {
    _id: '5a6ce86f2af929789500e82e',
    sr: 'Uvek kodiraj kao da će momak koji nasledi tvoj kod biti nasilni psihopata koji zna gde živiš.',
    en: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    author: 'Rick Osborne',
    source: null,
    numberOfVotes: 6,
    rating: 2.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e82e'
  }, {
    _id: '5a6ce86f2af929789500e830',
    sr: 'Program koji dvostruko brže daje netačan rezultat je beskonačno sporiji.',
    en: 'A program that produces incorrect results twice as fast is infinitely slower.',
    author: 'John Ousterhout',
    source: '',
    numberOfVotes: 4,
    rating: 3.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e830'
  }, {
    _id: '5a6ce86f2af929789500e828',
    sr: 'Još nisam video problem, ma kako zamršen, koji kad se osmotri na pravi način, ne postoje još zamršeniji.',
    en: 'I have yet to see any problem, however complicated, which when looked at in the right way, did not become more complicated.',
    author: 'Poul Anderson',
    source: null,
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e828'
  }, {
    _id: '5a6ce86f2af929789500e82a',
    sr: 'Čišćenje koda ne uzima vreme. Ne čišćenje koda uzima vreme.',
    en: 'Cleaning code does NOT take time. NOT cleaning code does take time.',
    author: 'Robert C. Martin',
    source: null,
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e82a'
  }, {
    _id: '5a6ce86f2af929789500e837',
    sr: 'Lepota je važnija u računarstvu nego igde drugde u tehnologiji, zato što je softver tako složen. Lepota je ultimativna odbrana od složenosti.',
    en: 'Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defense against complexity.',
    author: 'David Gelernter',
    source: '',
    numberOfVotes: 5,
    rating: 3.4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e837'
  }, {
    _id: '5a6ce86f2af929789500e833',
    sr: 'Hodanje po vodi i razvijanje softvera po specifikaciji su lakši kad je zaleđena.',
    en: 'Walking on water and developing software from a specification are easy if both are frozen.',
    author: 'Edward V. Berard',
    source: null,
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e833'
  }, {
    _id: '5a6ce86f2af929789500e836',
    sr: 'Debagovanje je dvostruko teže od pisanja koda. Ako si napisao kod najpametnije što možeš, onda, po definiciji, nisi dovoljno pametan da ga debaguješ.',
    en: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    author: 'Brian Kernighan',
    source: 'Brian Kernighan and P.J. Plauger, The Elements of Programming Style',
    numberOfVotes: 3,
    rating: 4.7,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e836'
  }, {
    _id: '5a6ce86f2af929789500e838',
    sr: 'Kontrola kompleksnosti je suština kompjuterskog programiranja.',
    en: 'Controlling complexity is the essence of computer programming.',
    author: 'Brian Kernighan',
    source: '',
    numberOfVotes: 4,
    rating: 3.6,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e838'
  }, {
    _id: '5a6ce86f2af929789500e83f',
    sr: 'Vreme debagovanje se povećava kvadratno u odnosu na veličinu programa.',
    en: 'Debugging time increases as a square of the program’s size.',
    author: 'Chris Wenham',
    source: '',
    numberOfVotes: 2,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e83f'
  }, {
    _id: '5a6ce86f2af929789500e82c',
    sr: 'Nevolja sa programerima je što nikad ne možeš znati šta rade dok ne bude prekasno.',
    en: 'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.',
    author: 'Seymour Cray',
    source: null,
    numberOfVotes: 2,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e82c'
  }, {
    _id: '5a6ce86f2af929789500e843',
    sr: 'Kod nikada ne laže, komentari nekad lažu.',
    en: 'Code never lies, comments sometimes do.',
    author: 'Ron Jeffries',
    source: '',
    numberOfVotes: 2,
    rating: 3.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e843'
  }, {
    _id: '5a6ce86f2af929789500e845',
    sr: 'Neki problemi su toliko kompleksni da morate biti visoko inteligentni i dobro informisani samo da biste bili neodlučni oko njih.',
    en: 'Some problems are so complex that you have to be highly intelligent and well informed just to be undecided about them.',
    author: 'Laurence J. Peter',
    source: '',
    numberOfVotes: 2,
    rating: 3.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e845'
  }, {
    _id: '5a6ce86f2af929789500e841',
    sr: 'Napravi procenu, udvostruči broj, a onda pređi na narednu jedinicu vremena. Ovo pravilo skalira zadatke na veoma interesantan način: jednominutni zadatak eksplodira stepenom od 120 da uzme dva časa. Jednočasovni zadatak eksplodira "samo" stepenom 48 na dva dana, dok jednodnevni posao poraste stepenom od 14 na dve sedmice.',
    en: 'Make a guess, double the number, and then move to the next larger unit of time. This rule scales tasks in a very interesting way: a one-minute task explodes by a factor of 120 to take two hours. A one-hour job explodes by "only" a factor 48 to take two days, while a one-day job grows by a factor of 14 to take two weeks.',
    author: 'Poul-Henning Kamp',
    source: 'Poul-Henning Kamp, The hyperdimensional tar pit',
    numberOfVotes: 4,
    rating: 3.9,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e841'
  }, {
    _id: '5a6ce86f2af929789500e847',
    sr: 'Ja nemam neke posebne talente. Samo sam jako radoznao.',
    en: 'I have no special talent. I am only passionately curious.',
    author: 'Albert Einstein',
    source: 'Pismo Carlu Seeligu (11. ožujka 1952.), zabilježeno u Einstein Archives 39-013',
    numberOfVotes: 7,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e847'
  }, {
    _id: '5a6ce86f2af929789500e849',
    sr: 'Odgovarajuća upotreba komentara je kompenzacija za naš neuspeh da se izrazimo u kodu.',
    en: 'The proper use of comments is to compensate for our failure to express ourself in code.',
    author: 'Robert C. Martin',
    source: '',
    numberOfVotes: 8,
    rating: 3.9,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e849'
  }, {
    _id: '5a6ce86f2af929789500e852',
    sr: 'Kada ne postoji hijerarhija tipova ne morate da upravljate hijerarhijom tipova.',
    en: 'When there is no type hierarchy you don’t have to manage the type hierarchy.',
    author: 'Rob Pike',
    source: '',
    numberOfVotes: 2,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e852'
  }, {
    _id: '5a6ce86f2af929789500e856',
    sr: 'Svako bi trebalo da nauči da programira, jer to te uči kako da misliš.',
    en: 'Everybody should learn to program a computer, because it teaches you how to think.',
    author: 'Steve Jobs',
    source: '',
    numberOfVotes: 3,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e856'
  }, {
    _id: '5a6ce86f2af929789500e84f',
    sr: 'Jednostavnost je teško izgraditi, lako koristiti, i teško naplatiti. Složenost je lako izgraditi, teško koristiti, i lako naplatiti.',
    en: 'Simplicity is hard to build, easy to use, and hard to charge for. Complexity is easy to build, hard to use, and easy to charge for.',
    author: 'Chris Sacca',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e84f'
  }, {
    _id: '5a6ce8702af929789500e85a',
    sr: 'Meriti napredak programa po broju linija koda je kao meriti napredak gradnje aviona po težini.',
    en: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
    author: 'Bill Gates',
    source: null,
    numberOfVotes: 3,
    rating: 4.2,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e85a'
  }, {
    _id: '5a6ce8702af929789500e85e',
    sr: 'Više je računarskih grehova počinjeno u ime efikasnosti (bez da je nužno dostignuta) nego iz bilo kog drugog razloga, uključujući čistu glupost.',
    en: 'More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity.',
    author: 'William Wulf',
    source: '',
    numberOfVotes: 3,
    rating: 3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e85e'
  }, {
    _id: '5a6ce8702af929789500e860',
    sr: 'Testiranje može biti veoma efektivan način da pokaže prisustvo bagova, ali beznadežno neadekvatan da pokaže njihovo odsustvo.',
    en: 'Testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence.',
    author: 'Edsger W. Dijkstra',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e860'
  }, {
    _id: '5a6ce8702af929789500e864',
    sr: 'Mašta je važnija od znanja.',
    en: 'Imagination is more important than knowledge.',
    author: 'Albert Einstein',
    source: 'U razgovoru s Georgeom Sylvesterom Viereckom What Life Means to Einstein (u novinama The Saturday Evening Post, 26. listopada 1929.)',
    numberOfVotes: 7,
    rating: 3.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e864'
  }, {
    _id: '5a6ce8702af929789500e862',
    sr: 'Kada radim na problemu nikada ne razmišljam o lepoti. Razmišljam jedino kako da rešim problem. Ali kada završim, ako rešenje nije lepo, znam da je pogrešno.',
    en: 'When I am working on a problem I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong.',
    author: 'Buckminster Fuller',
    source: '',
    numberOfVotes: 7,
    rating: 3.7,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e862'
  }, {
    _id: '5a6ce86f2af929789500e84b',
    sr: 'Dobar kod je kratak, jednostavan i simetričan – izazov je da otkriješ kako stići dotle.',
    en: 'Good code is short, simple, and symmetrical - the challenge is figuring out how to get there.',
    author: 'Sean Parent',
    source: '',
    numberOfVotes: 7,
    rating: 3.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e84b'
  }, {
    _id: '5a6ce8702af929789500e868',
    sr: 'Ako misliš da su tvoji korisnici idioti, samo će idioti to koristiti.',
    en: 'If you think your users are idiots, only idiots will use it.',
    author: 'Linus Torvalds',
    source: '',
    numberOfVotes: 10,
    rating: 3.6,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e868'
  }, {
    _id: '5a6ce8702af929789500e872',
    sr: 'Jednom kad prestanete da učite, počinjete da umirete.',
    en: 'Once you stop learning you start dying.',
    author: 'Albert Einstein',
    source: '',
    numberOfVotes: 4,
    rating: 4.6,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e872'
  }, {
    _id: '5a6ce8702af929789500e884',
    sr: 'Ni jedan kod nije brži od koda kog nema.',
    en: 'No code is faster than no code.',
    author: 'Kevlin Henney',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e884'
  }, {
    _id: '5a6ce8702af929789500e86c',
    sr: 'Preko pola vremena koje provedeš radeći na projektu je razmišljanje, i nema alatke, ma koliko bila napredna, koja može razmišljati umesto tebe.',
    en: 'Over half of the time you spend working on a project is spent thinking, and no tool, no matter how advanced, can think for you.',
    author: 'Richard P. Gabriel',
    source: '',
    numberOfVotes: 3,
    rating: 2.9,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e86c'
  }, {
    _id: '5a6ce8702af929789500e86e',
    sr: 'Mnogo je poštenije reći greška nego buba (bag), jer nedvosmisleno stavlja krivicu tamo gde treba, na programera koji ju je napravio.',
    en: 'We could, for instance, begin with cleaning up our language by no longer calling a bug a bug but by calling it an error. It is much more honest because it squarely puts the blame where it belongs, viz. with the programmer who made the error. The animistic metaphor of the bug that maliciously sneaked in while the programmer was not looking is intellectually dishonest as it disguises that the error is the programmer\'s own creation. The nice thing of this simple change of vocabulary is that it has such a profound effect: while, before, a program with only one bug used to be "almost correct", afterwards a program with an error is just "wrong".',
    author: 'Edsger W. Dijkstra',
    source: '',
    numberOfVotes: 2,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e86e'
  }, {
    _id: '5a6ce8702af929789500e88b',
    sr: 'Jednom kada nova tehnologija počne da se valja, ako nisi deo valjka, onda si deo druma.',
    en: 'Once a new technology starts rolling, if you’re not part of the steamroller, you’re part of the road.',
    author: 'Stewart Brand',
    source: '',
    numberOfVotes: 2,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e88b'
  }, {
    _id: '5a6ce8702af929789500e887',
    sr: 'Složen sistem koji radi je bez izuzetka evoluirao od jednostavnog sistema koja je radio. Obrnuta tvrdnja takođe izgleda istinita: složen sistem projektovan od nule nikad ne radi i ne može biti napravljen da radi.',
    en: 'A complex system that works is invariably found to have evolved from a simple system that worked. The inverse proposition also appears to be true: A complex system designed from scratch never works and cannot be made to work.',
    author: 'John Gall (author)',
    source: '',
    numberOfVotes: 2,
    rating: 3.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e887'
  }, {
    _id: '5a6ce8702af929789500e889',
    sr: 'Najneverovatnije dostignuće računarske softverske industrije je kontinuirano poništavanje stalnih i neverovatnih doprinosa računarske hardverske industrije.',
    en: 'The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry.',
    author: 'Henry Petroski',
    source: '',
    numberOfVotes: 1,
    rating: 2.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e889'
  }, {
    _id: '5a6ce8702af929789500e88e',
    sr: 'Nikad nisam zadovoljan dok ne kažem najviše moguće sa najmanje reči, a sažeto pisanje uzima mnogo više vremena nego pisanje nadugačko.',
    en: 'I am never satisfied until I have said as much as possible in a few words, and writing briefly takes far more time than writing at length.',
    author: 'Carl Friedrich Gauss',
    source: null,
    numberOfVotes: 4,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e88e'
  }, {
    _id: '5a6ce8702af929789500e890',
    sr: 'Postoji samo dve vrste jezika: oni na koje se ljudi žale i oni koje niko ne koristi.',
    en: 'There are only two kinds of languages: the ones people complain about and the ones nobody uses.',
    author: 'Bjarne Stroustrup',
    source: null,
    numberOfVotes: 5,
    rating: 4.4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e890'
  }, {
    _id: '5a6ce8702af929789500e892',
    sr: 'Svrha softverskog razvoja je da kontroliše složenost, ne da je stvara.',
    en: 'The purpose of software engineering is to control complexity, not to create it.',
    author: 'Pamela Zave',
    source: '',
    numberOfVotes: 4,
    rating: 3.9,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e892'
  }, {
    _id: '5a6ce8702af929789500e89a',
    sr: 'Unix je jednostavan. Samo je potreban genij da razume njegovu jednostavnost.',
    en: 'Unix is simple. It just takes a genius to understand its simplicity.',
    author: 'Dennis Ritchie',
    source: '',
    numberOfVotes: 9,
    rating: 3.2,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e89a'
  }, {
    _id: '5a6ce8702af929789500e89c',
    sr: 'Jezik koji nema sve je zapravo lakši za programiranje u tome što ima.',
    en: 'A language that doesn’t have everything is actually easier to program in than some that do.',
    author: 'Dennis Ritchie',
    source: '',
    numberOfVotes: 2,
    rating: 3.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e89c'
  }, {
    _id: '5a6ce8702af929789500e8a2',
    sr: 'Ono što ne mogu napraviti, ne razumem.',
    en: 'What I cannot build, I do not understand.',
    author: 'Richard Feynman',
    source: '',
    numberOfVotes: 2,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8a2'
  }, {
    _id: '5a6ce8702af929789500e8a6',
    sr: 'Inteligentna budala može napraviti da stvari budu veće, složenije i više nasilne. Potreban je dodir genija, i mnogo hrabrosti, za pokret u suprotnom pravcu.',
    en: 'Any intelligent fool can make things bigger, more complex, and more violent. It takes a touch of genius – and a lot of courage – to move in the opposite direction.',
    author: 'Albert Einstein',
    source: '',
    numberOfVotes: 5,
    rating: 3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8a6'
  }, {
    _id: '5a6ce8702af929789500e898',
    sr: 'Ne postoji programski jezik, bez obzira koliko struktuiran, koji će sprečiti programere da prave loše programe.',
    en: 'There is no programming language, no matter how structured, that will prevent programmers from making bad programs.',
    author: 'Lawrence Flon',
    source: 'Larry Flon (1975) "On research in structured programming". SIGPLAN Not., 10(10), pp.16–17',
    numberOfVotes: 3,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e898'
  }, {
    _id: '5a6ce8702af929789500e8a8',
    sr: 'Svaka budala može napisati kod koji računar razume. Dobri programeri pišu kod koji ljudi razumeju.',
    en: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'Martin Fowler',
    source: 'Martin Fowler, Refactoring',
    numberOfVotes: 2,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8a8'
  }, {
    _id: '5a6ce8702af929789500e894',
    sr: 'Problem sa objektno orjentisanim jezicima je što oni imaju svo to implicitno okruženje koje nose sa sobom. Vi hoćete bananu ali ono što dobijate je gorila koji drži bananu sa sve džunglom.',
    en: 'The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.',
    author: 'Joe Armstrong (programmer)',
    source: '',
    numberOfVotes: 6,
    rating: 2.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e894'
  }, {
    _id: '5a6ce8702af929789500e86a',
    sr: 'Ne možeš verovati kodu koji nisi u potpunosti sam napisao.',
    en: 'You can’t trust code that you did not totally create yourself.',
    author: 'Ken Thompson',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e86a'
  }, {
    _id: '5a6ce8702af929789500e8a4',
    sr: 'Pametni ljudi rešavaju probleme. Mudri ih izbegavaju.',
    en: 'A clever person solves a problem. A wise person avoids it.',
    author: 'Albert Einstein',
    source: null,
    numberOfVotes: 3,
    rating: 4.9,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8a4'
  }, {
    _id: '5a6ce8702af929789500e8ac',
    sr: 'Najvažniji pojedini aspekt razvoja softvera je biti načisto oko toga šta pokušavaš da napraviš.',
    en: 'The most important single aspect of software development is to be clear about what you are trying to build.',
    author: 'Bjarne Stroustrup',
    source: '',
    numberOfVotes: 2,
    rating: 2.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8ac'
  }, {
    _id: '5a6ce8702af929789500e8aa',
    sr: 'Jedini greh je napraviti izbor neznajući da si ga napravio.',
    en: 'The only sin is to make a choice without knowing you are making one.',
    author: 'Jonathan Shewchuk',
    source: '',
    numberOfVotes: 3,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8aa'
  }, {
    _id: '5a6ce8702af929789500e8b0',
    sr: 'Toliko složenosti u softveru dolazi iz pokušavanja da se napravi da jedna stvar radi dve stvari.',
    en: 'So much complexity in software comes from trying to make one thing do two things.',
    author: 'Ryan Singer',
    source: '',
    numberOfVotes: 2,
    rating: 3.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8b0'
  }, {
    _id: '5a6ce8702af929789500e8b2',
    sr: 'Hofštadter zakon: Uvek vam treba duže nego što ste očekivali, čak i kada se uzme u obzir Hofštadter zakon.',
    en: "Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.",
    author: 'P. J. Plauger',
    source: '',
    numberOfVotes: 3,
    rating: 2.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8b2'
  }, {
    _id: '5a6ce8702af929789500e8b6',
    sr: 'Prvo, reši problem. Onda, piši kod.',
    en: 'First, solve the problem. Then, write the code.',
    author: 'John Johnson',
    source: '',
    numberOfVotes: 3,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8b6'
  }, {
    _id: '5a6ce8702af929789500e8b4',
    sr: 'Dobar programer je neko ko uvek gleda levo-desno kada prelazi jednosmernu ulicu.',
    en: 'A good programmer is someone who looks both ways before crossing a one-way street.',
    author: 'Doug Linder',
    source: '',
    numberOfVotes: 4,
    rating: 4.6,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8b4'
  }, {
    _id: '5a6ce8702af929789500e8b8',
    sr: 'Kompatibilnost znači namerno ponavljati tuđe greške.',
    en: 'Compatibility means deliberately repeating other people’s mistakes.',
    author: 'David Wheeler (computer scientist)',
    source: '',
    numberOfVotes: 3,
    rating: 3.4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8b8'
  }, {
    _id: '5a6ce8702af929789500e8ba',
    sr: 'Dva glavna proizvoda izašla iz Berklija su: LSD i UNIX. Ne verujemo da je to koincidencija.',
    en: "There are two major products that come out of Berkeley: LSD and UNIX. We don't believe this to be a coincidence.",
    author: 'Jeremy S. Anderson',
    source: null,
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8ba'
  }, {
    _id: '5a6ce8702af929789500e8bc',
    sr: 'Kompetentan programer je potpuno svestan strogo ograničene veličine svoje lobanje. On stoga prilazi svojim zadacima sa potpunom skromnošću, i izbegava lukave trikove kao kugu.',
    en: 'The competent programmer is fully aware of the strictly limited size of his own skull; therefore he approaches the programming task in full humility, and among other things he avoids clever tricks like the plague',
    author: 'Edsger W. Dijkstra',
    source: 'The Humble Programmer (1972)',
    numberOfVotes: 3,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8bc'
  }, {
    _id: '5a6ce8702af929789500e8ae',
    sr: 'Kada si u dvojbi, ostavi to.',
    en: 'When in doubt, leave it out.',
    author: 'Joshua Bloch',
    source: '',
    numberOfVotes: 5,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8ae'
  }, {
    _id: '5a6ce8702af929789500e8be',
    sr: 'Ja, u stvari, tvrdim da je razlika između lošeg i dobrog programera u tome da li on smatra njegov kod ili strukture podataka važnijim. Loši programeri brinu o kodu. Dobri programeri brinu o strukturama podataka i njihovim odnosima.',
    en: 'I will, in fact, claim that the difference between a bad programmer and a good one is whether he considers his code or his data structures more important. Bad programmers worry about the code. Good programmers worry about data structures and their relationships.',
    author: 'Linus Torvalds',
    source: '',
    numberOfVotes: 6,
    rating: 3.6,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8be'
  }, {
    _id: '5a6ce8702af929789500e8ce',
    sr: 'Nikada ne pamti nešto što možeš pogledati.',
    en: 'Never memorize something that you can look up.',
    author: 'Albert Einstein',
    source: '',
    numberOfVotes: 10,
    rating: 4.4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8ce'
  }, {
    _id: '5a6ce8702af929789500e8cc',
    sr: 'Matematičari stoje jedni drugima na ramenima, a kompjuterski naučnici stoje jedni drugima na prstima.',
    en: "Mathematicians stand on each others' shoulders and computer scientists stand on each others' toes.",
    author: 'Richard Hamming',
    source: '',
    numberOfVotes: 3,
    rating: 3.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8cc'
  }, {
    _id: '5a72399510263e0c45cb6cfa',
    sr: 'LISP je pomogao brojnim najnadarenijim ljudima da misle prethodno nezamislive misli.',
    en: 'LISP has assisted a number of our most gifted fellow humans in thinking previously impossible thoughts.',
    author: 'Edsger W. Dijkstra',
    source: 'The Humble Programmer (1972)',
    numberOfVotes: 5,
    rating: 3.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a72399510263e0c45cb6cfa'
  }, {
    _id: '5a6ce8702af929789500e8c6',
    sr: 'Organizacija koja tretira svoje programere kao morone će uskoro imati programere koji su voljni i kadri da se ponašaju jedino kao moroni.',
    en: 'An organisation that treats its programmers as morons will soon have programmers that are willing and able to act like morons only.',
    author: 'Bjarne Stroustrup',
    source: '',
    numberOfVotes: 1,
    rating: 2.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8c6'
  }, {
    _id: '5a82224c89919d0004b357ce',
    sr: 'Dugme radi, samo se ne vidi.',
    en: 'The button is working, only, it cannot be seen.',
    author: 'Anonymous',
    source: null,
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a82224c89919d0004b357ce'
  }, {
    _id: '5a8225ee89919d0004b357d0',
    sr: '',
    en: "Don't worry about anything. Just do what you can and be the best you can be.",
    author: 'Douglas Crockford',
    source: null,
    numberOfVotes: 3,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a8225ee89919d0004b357d0'
  }, {
    _id: '5a82b607fc716e0004373f53',
    sr: '',
    en: "The business of software building isn't really high-tech at all. It's most of all a business of talking to each other and writing things down.",
    author: 'Tom DeMarco',
    source: '',
    numberOfVotes: 2,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a82b607fc716e0004373f53'
  }, {
    _id: '5a6ce8702af929789500e8ca',
    sr: 'U programiranju težak deo nije rešavanje problema, već odluka koje probleme rešiti.',
    en: 'In programming the hard part isn’t solving problems, but deciding what problems to solve.',
    author: 'Paul Graham (programmer)',
    source: '',
    numberOfVotes: 2,
    rating: 3.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8ca'
  }, {
    _id: '5a82cd0efc716e0004373f56',
    sr: '',
    en: "The manager's function is not to make people work, but to make it possible for people to work.",
    author: 'Tom DeMarco',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a82cd0efc716e0004373f56'
  }, {
    _id: '5a82c90cfc716e0004373f55',
    sr: '',
    en: 'People under pressure don’t work better; they just work faster.',
    author: 'Tom DeMarco',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a82c90cfc716e0004373f55'
  }, {
    _id: '5a8946eda578110004299a3b',
    sr: '',
    en: 'My main conclusion after spending ten years of my life working on the TEX project is that software is hard. It’s harder than anything else I’ve ever had to do.',
    author: 'Donald Knuth',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a8946eda578110004299a3b'
  }, {
    _id: '5a82cd5ffc716e0004373f57',
    sr: '',
    en: 'Science is what we understand well enough to explain to a computer. Art is everything else we do.',
    author: 'Donald Knuth',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a82cd5ffc716e0004373f57'
  }, {
    _id: '5a896544a12a0e0004c76124',
    sr: '',
    en: 'We have seen that computer programming is an art, because it applies accumulated knowledge to the world, because it requires skill and ingenuity, and especially because it produces objects of beauty.',
    author: 'Donald Knuth',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a896544a12a0e0004c76124'
  }, {
    _id: '5a82cd91fc716e0004373f58',
    sr: '',
    en: 'Email is a wonderful thing for people whose role in life is to be on top of things. But not for me; my role is to be on the bottom of things. What I do takes long hours of studying and uninterruptible concentration.',
    author: 'Donald Knuth',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a82cd91fc716e0004373f58'
  }, {
    _id: '5a8e9b5884a8f2000482568b',
    sr: 'Manje koda jednako manje bagova.',
    en: 'Less code equals less bugs.',
    author: 'Kevlin Henney',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a8e9b5884a8f2000482568b'
  }, {
    _id: '5a91370b2141d30004b42e58',
    sr: '',
    en: 'As soon as an Analytical Engine exists, it will necessarily guide the future course of science.',
    author: 'Charles Babbage',
    source: 'Passages from the Life of a Philosopher',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91370b2141d30004b42e58'
  }, {
    _id: '5a9137d72141d30004b42e59',
    sr: '',
    en: 'The errors which arise from the absence of facts are far more numerous and more durable than those which result from unsound reasoning respecting true data.',
    author: 'Charles Babbage',
    source: 'On the Economy of Machinery and Manufactures, 1832/1841',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9137d72141d30004b42e59'
  }, {
    _id: '5a9138442141d30004b42e5a',
    sr: '',
    en: 'We have already mentioned what may, perhaps, appear paradoxical to some of our readers, — that the division of labour can be applied with equal success to mental as to mechanical operations, and that it ensures in both the same economy of time.',
    author: 'Charles Babbage',
    source: '',
    numberOfVotes: 2,
    rating: 3.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9138442141d30004b42e5a'
  }, {
    _id: '5a9139472141d30004b42e5b',
    sr: '',
    en: 'On two occasions I have been asked [by members of Parliament]: "Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?" I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.',
    author: 'Charles Babbage',
    source: 'Passages from the Life of a Philosopher (1864)',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9139472141d30004b42e5b'
  }, {
    _id: '5a91be60346ab3000418a760',
    sr: 'Dok nije bilo mašina, programiranje uopšte nije bilo problem; kada smo imali par slabih računara, programiranje je postalo blag problem, a sada kada imamo gigantske računare, programiranje je postalo jednako gigantski problem.',
    en: 'As long as there were no machines, programming was no problem at all; when we had a few weak computers, programming became a mild problem, and now we have gigantic computers, programming has become an equally gigantic problem.',
    author: 'Edsger W. Dijkstra',
    source: 'The Humble Programmer (1972)',
    numberOfVotes: 2,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91be60346ab3000418a760'
  }, {
    _id: '5a91e12fc4240c0004265950',
    sr: '',
    en: 'The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.',
    author: 'Edsger W. Dijkstra',
    source: 'How do we tell truths that might hurt? (1975)',
    numberOfVotes: 1,
    rating: 1,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91e12fc4240c0004265950'
  }, {
    _id: '5a91d1c1c4240c000426594f',
    sr: 'Ako želite učinkovitije programere, oni ne bi trebali traćiti svoje vreme na debagovanje, oni ne bi trebali uvoditi bagove za početak.',
    en: 'If you want more effective programmers, you will discover that they should not waste their time debugging, they should not introduce the bugs to start with.',
    author: 'Edsger W. Dijkstra',
    source: 'The Humble Programmer (1972)',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91d1c1c4240c000426594f'
  }, {
    _id: '5a91e150c4240c0004265951',
    sr: '',
    en: 'It is practically impossible to teach good programming to students that have had a prior exposure to BASIC: as potential programmers they are mentally mutilated beyond hope of regeneration.',
    author: 'Edsger W. Dijkstra',
    source: 'How do we tell truths that might hurt? (1975)',
    numberOfVotes: 1,
    rating: 2,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91e150c4240c0004265951'
  }, {
    _id: '5a91e27ec4240c0004265953',
    sr: 'Slika možda vredi hiljadu reči, formula vredi hiljadu slika.',
    en: 'A picture may be worth a thousand words, a formula is worth a thousand pictures.',
    author: 'Edsger W. Dijkstra',
    source: 'Dijkstra (EWD1239: A first exploration of effective reasoning)',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91e27ec4240c0004265953'
  }, {
    _id: '5a91e224c4240c0004265952',
    sr: 'Ako za 10 godina, kada budete radili nešto brzo i prljavo, odjednom zamislite da vas gledam preko ramena i kažete sebi "Dajkstri se ovo ne bi svidelo", biće to dovoljno besmrtnosti za mene.',
    en: 'I mean, if 10 years from now, when you are doing something quick and dirty, you suddenly visualize that I am looking over your shoulders and say to yourself "Dijkstra would not have liked this", well, that would be enough immortality for me.',
    author: 'Edsger W. Dijkstra',
    source: 'Dijkstra (1995) "Introducing a course on calculi"',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91e224c4240c0004265952'
  }, {
    _id: '5a91bc8f346ab3000418a75f',
    sr: 'Ne krivite mene za činjenicu da će kompetentno programiranje biti preteško za "prosečnog programera" - ne smete pasti u zamku odbacivanja hirurške tehnike zato što prevazilazi mogućnosti berberina iza ugla.',
    en: 'Don\'t blame me for the fact that competent programming will be too difficult for "the average programmer" — you must not fall into the trap of rejecting a surgical technique because it is beyond the capabilities of the barber in his shop around the corner.',
    author: 'Edsger W. Dijkstra',
    source: 'Dijkstra (1975) Comments at a Symposium (EWD 512)',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91bc8f346ab3000418a75f'
  }, {
    _id: '5a91e37bc4240c0004265955',
    sr: 'Mladiću, u matematici ti ne razumeš stvari. Prosto se navikneš na njih.',
    en: "Young man, in mathematics you don't understand things. You just get used to them.",
    author: 'John von Neumann',
    source: '',
    numberOfVotes: 5,
    rating: 2.4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91e37bc4240c0004265955'
  }, {
    _id: '5a91e40ec4240c0004265957',
    sr: 'C je čudan, manjkav i ogromno uspešan.',
    en: 'C is quirky, flawed, and an enormous success.',
    author: 'Dennis Ritchie',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91e40ec4240c0004265957'
  }, {
    _id: '5a91e2d0c4240c0004265954',
    sr: 'Nije zadatak Univerziteta da pruža ono što društvo traži, već da daje ono što društvu treba.',
    en: 'It is not the task of the University to offer what society asks for, but to give what society needs.',
    author: 'Edsger W. Dijkstra',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91e2d0c4240c0004265954'
  }, {
    _id: '5a895d1ba5f8bf3df4485d1d',
    sr: 'Razumevajući mašinski-orjentisan jezik, programer će težiti da koristi mnogo efikasnije metode; to je mnogo bliže realnosti.',
    en: 'By understanding a machine-oriented language, the programmer will tend to use a much more efficient method; it is much closer to reality.',
    author: 'Donald Knuth',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a895d1ba5f8bf3df4485d1d'
  }, {
    _id: '5a91e459c4240c0004265958',
    sr: '',
    en: 'Another danger is that commercial pressures of one sort or another will divert the attention of the best thinkers from real innovation to exploitation of the current fad, from prospecting to mining a known lode.',
    author: 'Dennis Ritchie',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91e459c4240c0004265958'
  }, {
    _id: '5a91e51dc4240c0004265959',
    sr: '',
    en: 'Within C++, there is a much smaller and cleaner language struggling to get out.',
    author: 'Bjarne Stroustrup',
    source: '',
    numberOfVotes: 0,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91e51dc4240c0004265959'
  }, {
    _id: '5a91e560c4240c000426595a',
    sr: 'Ko god vam kaže da ima savršen jezik ili je naivan ili prodavac.',
    en: 'Anybody who comes to you and says he has a perfect language is either naïve or a salesman.',
    author: 'Bjarne Stroustrup',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91e560c4240c000426595a'
  }, {
    _id: '5a91e60dc4240c000426595b',
    sr: 'Čovek snabdeven papirom, olovkom i gumicom, i podvrgnut strogoj disciplini, u stvari je univerzalna mašina.',
    en: 'A man provided with paper, pencil, and rubber, and subject to strict discipline, is in effect a universal machine.',
    author: 'Alan Turing',
    source: '',
    numberOfVotes: 5,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91e60dc4240c000426595b'
  }, {
    _id: '5a91e6a3c4240c000426595c',
    sr: '',
    en: 'The idea behind digital computers may be explained by saying that these machines are intended to carry out any operations which could be done by a human computer.',
    author: 'Alan Turing',
    source: '',
    numberOfVotes: 3,
    rating: 3.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91e6a3c4240c000426595c'
  }, {
    _id: '5a91e779c4240c000426595d',
    sr: 'Mašine me iznenađuju veoma učestalo.',
    en: 'Machines take me by surprise with great frequency.',
    author: 'Alan Turing',
    source: '',
    numberOfVotes: 3,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91e779c4240c000426595d'
  }, {
    _id: '5a933b4c8e7b510004cba4be',
    sr: 'Možda "samo jedna mala globalna varijabla" i nije toliko neprihvatljiva, ali taj stil vodi kodu koji je beskoristan svima osim svom izvornom programeru.',
    en: 'Maybe "just one little global variable" isn\'t too unmanageable, but that style leads to code that is useless except to its original programmer.',
    author: 'Bjarne Stroustrup',
    source: '',
    numberOfVotes: 2,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a933b4c8e7b510004cba4be'
  }, {
    _id: '5a933c3d8e7b510004cba4bf',
    sr: 'Pravim slobodan operativni sistem (samo hobi, neće biti velik i profesionalan kao GNU).',
    en: "I'm doing a free operating system (just a hobby, won't be big and professional like GNU).",
    author: 'Linus Torvalds',
    source: '',
    numberOfVotes: 3,
    rating: 4.7,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a933c3d8e7b510004cba4bf'
  }, {
    _id: '5a933cac8e7b510004cba4c0',
    sr: 'Ako ti treba više od 3 nivoa uvlačenja, zeznuo si svakako, treba da popraviš program.',
    en: "If you need more than 3 levels of indentation, you're screwed anyway, and should fix your program.",
    author: 'Linus Torvalds',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a933cac8e7b510004cba4c0'
  }, {
    _id: '5a933f078e7b510004cba4c1',
    sr: 'Neograničen broj majmuna kucajući na GNU Emacs-u neće nikad napraviti dobar program.',
    en: 'An infinite number of monkeys typing into GNU Emacs would never make a good program.',
    author: 'Linus Torvalds',
    source: '',
    numberOfVotes: 4,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a933f078e7b510004cba4c1'
  }, {
    _id: '5a9340258e7b510004cba4c3',
    sr: 'Ako Microsoft ikad napravi aplikaciju za Linuks to znači da sam pobedio.',
    en: "If Microsoft ever does applications for Linux it means I've won.",
    author: 'Linus Torvalds',
    source: '',
    numberOfVotes: 2,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9340258e7b510004cba4c3'
  }, {
    _id: '5a933f6f8e7b510004cba4c2',
    sr: 'Vidi, ne trebaš biti samo dobar koder da bi napravio sistem kao Linux, trebaš biti lukavo kopile takođe ;-)',
    en: 'See, you not only have to be a good coder to create a system like Linux, you have to be a sneaky bastard too ;-)',
    author: 'Linus Torvalds',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a933f6f8e7b510004cba4c2'
  }, {
    _id: '5a9342048e7b510004cba4c6',
    sr: 'Zaista, ja ne idem za tim da uništim Majkrosoft. To će biti potpuno nenameran sporedni efekat.',
    en: "Really, I'm not out to destroy Microsoft. That will just be a completely unintentional side effect.",
    author: 'Linus Torvalds',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9342048e7b510004cba4c6'
  }, {
    _id: '5a9341788e7b510004cba4c5',
    sr: 'Pričanje je jeftino. Pokaži mi kod.',
    en: 'Talk is cheap. Show me the code.',
    author: 'Linus Torvalds',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9341788e7b510004cba4c5'
  }, {
    _id: '5a9340e08e7b510004cba4c4',
    sr: 'Prvih 90 posto koda računa se za prvih 90 posto vremena razvoja. Preostalih 10 posto koda računa se za drugih 90 posto vremena razvoja.',
    en: 'The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    author: 'Tom Cargill',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9340e08e7b510004cba4c4'
  }, {
    _id: '5a93467e8e7b510004cba4c8',
    sr: 'Ja nisam odličan programer; ja sam samo dobar programer sa odličnim navikama.',
    en: "I'm not a great programmer; I'm just a good programmer with great habits.",
    author: 'Kent Beck',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a93467e8e7b510004cba4c8'
  }, {
    _id: '5a9348828e7b510004cba4c9',
    sr: 'Ima samo jedan trik u softveru, a to je koristiti deo softvera koji je već napisan.',
    en: "There's only one trick in software, and that is using a piece of software that's already been written.",
    author: 'Bill Gates',
    source: '',
    numberOfVotes: 1,
    rating: 2.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9348828e7b510004cba4c9'
  }, {
    _id: '5a93d5a36a584e0004a4a612',
    sr: '',
    en: "You can't just ask customers what they want and then try to give that to them. By the time you get it built, they'll want something new.",
    author: 'Steve Jobs',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a93d5a36a584e0004a4a612'
  }, {
    _id: '5a93d6b26a584e0004a4a614',
    sr: '',
    en: "What a computer is to me is it's the most remarkable tool that we have ever come up with. It's the equivalent of a bicycle for our minds.",
    author: 'Steve Jobs',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a93d6b26a584e0004a4a614'
  }, {
    _id: '5a93eb796a584e0004a4a617',
    sr: '',
    en: 'Programming, it turns out, is hard. The fundamental rules are typically simple and clear. But programs built on top of these rules tend to become complex enough to introduce their own rules and complexity. You’re building your own maze, in a way, and you might just get lost in it.',
    author: 'Marijn Haverbeke',
    source: 'Eloquent JavaScript',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a93eb796a584e0004a4a617'
  }, {
    _id: '5a93d8036a584e0004a4a615',
    sr: '',
    en: "I'm convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance. It is so hard.",
    author: 'Steve Jobs',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a93d8036a584e0004a4a615'
  }, {
    _id: '5a93da0d6a584e0004a4a616',
    sr: '',
    en: 'A lot of companies hire people to tell them what to do. We hire people to tell us what to do.',
    author: 'Steve Jobs',
    source: '',
    numberOfVotes: 2,
    rating: 3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a93da0d6a584e0004a4a616'
  }, {
    _id: '5a93ebdc6a584e0004a4a618',
    sr: '',
    en: 'Computers themselves can do only stupidly straightforward things. The reason they are so useful is that they do these things at an incredibly high speed.',
    author: 'Marijn Haverbeke',
    source: 'Eloquent JavaScript',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a93ebdc6a584e0004a4a618'
  }, {
    _id: '5a93ed3d6a584e0004a4a619',
    sr: '',
    en: 'A program is a building of thought. It is costless to build, it is weightless, and it grows easily under our typing hands. But without care, a program’s size and complexity will grow out of control, confusing even the person who created it.',
    author: 'Marijn Haverbeke',
    source: 'Eloquent JavaScript',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a93ed3d6a584e0004a4a619'
  }, {
    _id: '5a93edc56a584e0004a4a61a',
    sr: '',
    en: 'There are many terrible mistakes to make in program design, so go ahead and make them so that you understand them better.',
    author: 'Marijn Haverbeke',
    source: 'Eloquent JavaScript',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a93edc56a584e0004a4a61a'
  }, {
    _id: '5a93fd14e49ad10004edb860',
    sr: '',
    en: 'People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.',
    author: 'Donald Knuth',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a93fd14e49ad10004edb860'
  }, {
    _id: '5a94040fe49ad10004edb862',
    sr: '',
    en: "Professionalism has no place in art, and hacking is art. Software Engineering might be science; but that's not what I do. I'm a hacker, not an engineer.",
    author: 'Jamie Zawinski',
    source: '',
    numberOfVotes: 2,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a94040fe49ad10004edb862'
  }, {
    _id: '5a940c14e49ad10004edb864',
    sr: '',
    en: 'We who cut mere stones must always be envisioning cathedrals.',
    author: "Quarry worker's creed",
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a940c14e49ad10004edb864'
  }, {
    _id: '5a9405d7e49ad10004edb863',
    sr: '',
    en: 'Communication must be stateless in nature, such that each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server.',
    author: 'Roy Fielding',
    source: 'Architectural Styles and the Design of Network-based Software Architectures',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9405d7e49ad10004edb863'
  }, {
    _id: '5a942ea0ee7ed5000496b16f',
    sr: 'Kada osetiš potrebu da dodaš komentar, prvo pokušaj refaktorisati kod da dodavanje komentara postane suvišno.',
    en: 'When you feel the need to write a comment, first try to refactor the code so that any comment becomes superfluous.',
    author: 'Kent Beck',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a942ea0ee7ed5000496b16f'
  }, {
    _id: '5a942dc4ee7ed5000496b16e',
    sr: 'Kada treba da dodaš mogućnost programu, a kod nije struktuiran tako da na pogodan način dodaš mogućnost, prvo refaktoriši program da učiniš dodavanje mogućnosti lakšim, zatim dodaj mogućnost.',
    en: "When you find you have to add a feature to a program, and the program's code is not structured in a convenient way to add the feature, first refactor the program to make it easy to add the feature, then add the feature.",
    author: 'Kent Beck',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a942dc4ee7ed5000496b16e'
  }, {
    _id: '5a942fc3ee7ed5000496b171',
    sr: '',
    en: "There are few things more frustrating or time wasting than debugging. Wouldn't it be a hell of a lot quicker if we just didn't create the bugs in the first place?",
    author: 'Martin Fowler',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a942fc3ee7ed5000496b171'
  }, {
    _id: '5a942fa3ee7ed5000496b170',
    sr: 'Sa testovima, odmah znam kada sam dodao bag. To mi dopušta da odmah popravim bag, pre nego što otpuže i sakrije se.',
    en: 'With testing, I know straight away when I added a bug. That lets me fix the bug immediately, before it can crawl off and hide.',
    author: 'Martin Fowler',
    source: '',
    numberOfVotes: 2,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a942fa3ee7ed5000496b170'
  }, {
    _id: '5a942fd8ee7ed5000496b172',
    sr: '',
    en: 'I think one of the most valuable rules is avoid duplication.',
    author: 'Martin Fowler',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a942fd8ee7ed5000496b172'
  }, {
    _id: '5a942ffbee7ed5000496b173',
    sr: '',
    en: 'Often designers do complicated things that improve the capacity on a particular hardware platform when it might actually be cheaper to buy more hardware.',
    author: 'Martin Fowler',
    source: '',
    numberOfVotes: 2,
    rating: 2.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a942ffbee7ed5000496b173'
  }, {
    _id: '5a9430a4ee7ed5000496b175',
    sr: '',
    en: 'The situation is so much better for programmers today - a cheap used PC, a linux CD, and an internet account, and you have all the tools necessary to work your way to any level of programming skill you want to shoot for.',
    author: 'John Carmack',
    source: '',
    numberOfVotes: 4,
    rating: 4.6,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9430a4ee7ed5000496b175'
  }, {
    _id: '5a94303bee7ed5000496b174',
    sr: '',
    en: "If you want to set off and go develop some grand new thing, you don't need millions of dollars of capitalization. You need enough pizza and Diet Coke to stick in your refrigerator, a cheap PC to work on, and the dedication to go through with it.",
    author: 'John Carmack',
    source: '',
    numberOfVotes: 2,
    rating: 3.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a94303bee7ed5000496b174'
  }, {
    _id: '5a9430ceee7ed5000496b176',
    sr: '',
    en: "Story in a game is like a story in a porn movie. It's expected to be there, but it's not that important.",
    author: 'John Carmack',
    source: '',
    numberOfVotes: 6,
    rating: 3.6,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9430ceee7ed5000496b176'
  }, {
    _id: '5a9430fbee7ed5000496b177',
    sr: '',
    en: "The best thing software can be is easy, but the way to do this is to get the defaults right, not to limit users' choices.",
    author: 'Paul Graham (programmer)',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9430fbee7ed5000496b177'
  }, {
    _id: '5a943207ee7ed5000496b178',
    sr: '',
    en: 'The most important thing is to be able to think what you want, not to say what you want.',
    author: 'Paul Graham (programmer)',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943207ee7ed5000496b178'
  }, {
    _id: '5a943233ee7ed5000496b17a',
    sr: '',
    en: "It's not so important what you work on, so long as you're not wasting your time.",
    author: 'Paul Graham (programmer)',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943233ee7ed5000496b17a'
  }, {
    _id: '5a943216ee7ed5000496b179',
    sr: '',
    en: 'The top 5% of programmers probably write 99% of the good software.',
    author: 'Paul Graham (programmer)',
    source: '',
    numberOfVotes: 2,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943216ee7ed5000496b179'
  }, {
    _id: '5a943244ee7ed5000496b17b',
    sr: '',
    en: 'There are few sources of energy so powerful as a procrastinating grad student.',
    author: 'Paul Graham (programmer)',
    source: '',
    numberOfVotes: 2,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943244ee7ed5000496b17b'
  }, {
    _id: '5a943267ee7ed5000496b17d',
    sr: '',
    en: 'Your most unhappy customers are your greatest source of learning.',
    author: 'Bill Gates',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943267ee7ed5000496b17d'
  }, {
    _id: '5a9432a9ee7ed5000496b17e',
    sr: '',
    en: "We're no longer in the days where everything is super well crafted. But at the heart of the programs that make it to the top, you'll find that the key internal code was done by a few people who really know what they were doing.",
    author: 'Bill Gates',
    source: '',
    numberOfVotes: 4,
    rating: 4.2,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9432a9ee7ed5000496b17e'
  }, {
    _id: '5a943301ee7ed5000496b181',
    sr: '',
    en: 'What is simplicity? Simplicity is the shortest path to a solution.',
    author: 'Ward Cunningham',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943301ee7ed5000496b181'
  }, {
    _id: '5a943316ee7ed5000496b182',
    sr: '',
    en: 'Putting a new feature into a program is important, but refactoring so new features can be added in the future is equally important.',
    author: 'Ward Cunningham',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943316ee7ed5000496b182'
  }, {
    _id: '5a94333dee7ed5000496b183',
    sr: '',
    en: 'A new idea comes suddenly and in a rather intuitive way. But intuition is nothing but the outcome of earlier intellectual experience.',
    author: 'Albert Einstein',
    source: '',
    numberOfVotes: 3,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a94333dee7ed5000496b183'
  }, {
    _id: '5a9433d2ee7ed5000496b184',
    sr: 'Granice mog jezika znače granice moga sveta.',
    en: 'The limits of my language mean the limits of my world.',
    author: 'Ludwig Wittgenstein',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9433d2ee7ed5000496b184'
  }, {
    _id: '5a9434dcee7ed5000496b187',
    sr: 'Ako imate proceduru sa 10 parametara, verovatno ste propustili neke.',
    en: 'If you have a procedure with 10 parameters, you probably missed some.',
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 4,
    rating: 4.6,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9434dcee7ed5000496b187'
  }, {
    _id: '5a943438ee7ed5000496b185',
    sr: '',
    en: 'That language is an instrument of human reason, and not merely a medium for the expression of thought, is a truth generally admitted.',
    author: 'George Boole',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943438ee7ed5000496b185'
  }, {
    _id: '5a9434edee7ed5000496b188',
    sr: '',
    en: "A language that doesn't affect the way you think about programming, is not worth knowing.",
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9434edee7ed5000496b188'
  }, {
    _id: '5a943501ee7ed5000496b189',
    sr: '',
    en: 'Simplicity does not precede complexity, but follows it.',
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 4,
    rating: 3.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943501ee7ed5000496b189'
  }, {
    _id: '5a943514ee7ed5000496b18a',
    sr: '',
    en: 'A year spent in artificial intelligence is enough to make one believe in God.',
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 3,
    rating: 2.7,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943514ee7ed5000496b18a'
  }, {
    _id: '5a943538ee7ed5000496b18c',
    sr: '',
    en: "The best book on programming for the layman is Alice in Wonderland, but that's because it's the best book on anything for the layman.",
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943538ee7ed5000496b18c'
  }, {
    _id: '5a94351fee7ed5000496b18b',
    sr: '',
    en: 'Dealing with failure is easy: Work hard to improve.',
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a94351fee7ed5000496b18b'
  }, {
    _id: '5a943485ee7ed5000496b186',
    sr: 'Programski jezik je niskog nivoa kada njegovi programi zahtevaju pažnju za irelevantno.',
    en: 'A programming language is low level when its programs require attention to the irrelevant.',
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943485ee7ed5000496b186'
  }, {
    _id: '5a9435d7ee7ed5000496b190',
    sr: '',
    en: 'Computer programs are the most intricate, delicately balanced and finely interwoven of all the products of human industry to date.',
    author: 'James Gleick',
    source: '',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9435d7ee7ed5000496b190'
  }, {
    _id: '5a9435fbee7ed5000496b191',
    sr: '',
    en: 'The effective exploitation of his powers of abstraction must be regarded as one of the most vital activities of a competent programmer.',
    author: 'Edsger W. Dijkstra',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9435fbee7ed5000496b191'
  }, {
    _id: '5a943579ee7ed5000496b18e',
    sr: 'Budale ignorišu složenost. Pragmatičari je trpe. Neki je mogu izbeći. Geniji je uklanjaju.',
    en: 'Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it.',
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943579ee7ed5000496b18e'
  }, {
    _id: '5a943675ee7ed5000496b193',
    sr: '',
    en: 'Programs must be written for people to read, and only incidentally for machines to execute.',
    author: 'Hal Abelson',
    source: 'Abelson & Sussman, "Structure and Interpretation of Computer Programs"',
    numberOfVotes: 3,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943675ee7ed5000496b193'
  }, {
    _id: '5a943612ee7ed5000496b192',
    sr: '',
    en: 'No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.',
    author: 'Mark Gibbs',
    source: 'https://www.networkworld.com/article/2317159/computers/the-myth-of-the-digital-lifestyle.html',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943612ee7ed5000496b192'
  }, {
    _id: '5a956c50e648470004c69e0d',
    sr: '',
    en: 'It should be noted that no ethically-trained software engineer would ever consent to write a DestroyBaghdad procedure. Basic professional ethics would instead require him to write a DestroyCity procedure, to which Baghdad could be given as a parameter.',
    author: 'Nathaniel Borenstein',
    source: '',
    numberOfVotes: 2,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a956c50e648470004c69e0d'
  }, {
    _id: '5a956e55e648470004c69e10',
    sr: '',
    en: 'When we don’t understand a process, we fall into magical thinking about results.',
    author: 'Jef Raskin',
    source: '',
    numberOfVotes: 2,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a956e55e648470004c69e10'
  }, {
    _id: '5a956de5e648470004c69e0f',
    sr: '',
    en: 'Low-level programming is good for the programmer’s soul.',
    author: 'John Carmack',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a956de5e648470004c69e0f'
  }, {
    _id: '5a956edfe648470004c69e11',
    sr: '',
    en: 'Simplicity and elegance are unpopular because they require hard work and discipline to achieve and education to be appreciated.',
    author: 'Edsger W. Dijkstra',
    source: 'https://www.cs.utexas.edu/users/EWD/transcriptions/EWD12xx/EWD1243a.html',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a956edfe648470004c69e11'
  }, {
    _id: '5a956f87e648470004c69e12',
    sr: '',
    en: 'A user interface should be so simple that a beginner in an emergency can understand it within 10 seconds.',
    author: 'Ted Nelson',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a956f87e648470004c69e12'
  }, {
    _id: '5a956dcce648470004c69e0e',
    sr: '',
    en: 'Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry.',
    author: 'Ted Nelson',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a956dcce648470004c69e0e'
  }, {
    _id: '5a95a672cb1a4d0004b2987f',
    sr: '',
    en: "Every program has (at least) two purposes: the one for which it was written and another for which it wasn't.",
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95a672cb1a4d0004b2987f'
  }, {
    _id: '5a95a6a3cb1a4d0004b29881',
    sr: '',
    en: "In man-machine symbiosis, it is man who must adjust: The machines can't.",
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95a6a3cb1a4d0004b29881'
  }, {
    _id: '5a95a686cb1a4d0004b29880',
    sr: '',
    en: "One man's constant is another man's variable.",
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95a686cb1a4d0004b29880'
  }, {
    _id: '5a9432bcee7ed5000496b17f',
    sr: '',
    en: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    author: 'Bill Gates',
    source: '',
    numberOfVotes: 3,
    rating: 3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9432bcee7ed5000496b17f'
  }, {
    _id: '5a95a760cb1a4d0004b29883',
    sr: '',
    en: 'It is easier to change the specification to fit the program than vice versa.',
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 4,
    rating: 4.7,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95a760cb1a4d0004b29883'
  }, {
    _id: '5a95a6f3cb1a4d0004b29882',
    sr: '',
    en: 'I think it is inevitable that people program poorly. Training will not substantially help matters. We have to learn to live with it.',
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 4,
    rating: 4.1,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95a6f3cb1a4d0004b29882'
  }, {
    _id: '5a95d22e7700780004d51dbb',
    sr: '',
    en: 'If we’d asked the customers what they wanted, they would have said “faster horses”.',
    author: 'Henry Ford',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d22e7700780004d51dbb'
  }, {
    _id: '5a95d2487700780004d51dbc',
    sr: '',
    en: 'I have found that the reason a lot of people are interested in artificial intelligence is the same reason a lot of people are interested in artificial limbs: they are missing one.',
    author: 'David Parnas',
    source: '',
    numberOfVotes: 1,
    rating: 2.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d2487700780004d51dbc'
  }, {
    _id: '5a95d2a57700780004d51dbd',
    sr: '',
    en: 'A distributed system is one in which the failure of a computer you didn’t even know existed can render your own computer unusable.',
    author: 'Leslie Lamport',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d2a57700780004d51dbd'
  }, {
    _id: '5a95d3a37700780004d51dbe',
    sr: '',
    en: 'It’s all talk until the code runs.',
    author: 'Ward Cunningham',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d3a37700780004d51dbe'
  }, {
    _id: '5a95d4127700780004d51dbf',
    sr: '',
    en: 'In theory, there is no difference between theory and practice. But, in practice, there is.',
    author: 'Jan L. A. van de Snepscheut',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d4127700780004d51dbf'
  }, {
    _id: '5a95d4977700780004d51dc2',
    sr: 'Gradimo naše računarske sisteme kao što gradimo naše gradove: tokom vremena, bez plana, na vrhu ruševina.',
    en: 'We build our computer systems the way we build our cities: over time, without a plan, on top of ruins.',
    author: 'Ellen Ullman',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d4977700780004d51dc2'
  }, {
    _id: '5a95d55e7700780004d51dc3',
    sr: '',
    en: 'The next best thing to having good ideas is recognizing good ideas from your users.',
    author: 'Eric S. Raymond',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d55e7700780004d51dc3'
  }, {
    _id: '5a95d43e7700780004d51dc0',
    sr: '',
    en: 'Good software, like good wine, takes time.',
    author: 'Joel Spolsky',
    source: '',
    numberOfVotes: 3,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d43e7700780004d51dc0'
  }, {
    _id: '5a95d5bf7700780004d51dc4',
    sr: '',
    en: 'Lisp is worth learning for the profound enlightenment experience you will have when you finally get it; that experience will make you a better programmer for the rest of your days, even if you never actually use Lisp itself a lot.',
    author: 'Eric S. Raymond',
    source: '',
    numberOfVotes: 3,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d5bf7700780004d51dc4'
  }, {
    _id: '5a95d4577700780004d51dc1',
    sr: '',
    en: 'Debugging is like being the detective in a crime movie where you are also the murderer.',
    author: 'Filipe Fortes',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d4577700780004d51dc1'
  }, {
    _id: '5a95d8a87700780004d51dc7',
    sr: '',
    en: 'What we wanted to preserve was not just a good environment in which to do programming, but a system around which fellowship could form.',
    author: 'Dennis Ritchie',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d8a87700780004d51dc7'
  }, {
    _id: '5a95d7b47700780004d51dc6',
    sr: '',
    en: 'Once the computers got control, we might never get it back.',
    author: 'Marvin Minsky',
    source: '',
    numberOfVotes: 2,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d7b47700780004d51dc6'
  }, {
    _id: '5a95e89f7700780004d51dc9',
    sr: '',
    en: 'A computer shall not waste your time or require you to do more work than is strictly necessary.',
    author: 'Jef Raskin',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95e89f7700780004d51dc9'
  }, {
    _id: '5a95fcd17700780004d51dcb',
    sr: '',
    en: 'Of the many forms of false culture, a premature converse with abstractions is perhaps the most likely to prove fatal to the growth of a masculine vigour of intellect.',
    author: 'George Boole',
    source: '',
    numberOfVotes: 8,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95fcd17700780004d51dcb'
  }, {
    _id: '5a95dae97700780004d51dc8',
    sr: '',
    en: "C++ certainly has its good points. But by and large I think it's a bad language. It does a lot of things half well and it’s just a garbage heap of ideas that are mutually exclusive. It’s way too big, way too complex. And it’s obviously built by a committee.",
    author: 'Ken Thompson',
    source: 'Ken Thompson; cited in Seibel, Peter (2009). Coders At Work. p. 475.',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95dae97700780004d51dc8'
  }, {
    _id: '5a95fce07700780004d51dcc',
    sr: '',
    en: 'No matter how correct a mathematical theorem may appear to be, one ought never to be satisfied that there was not something imperfect about it until it also gives the impression of being beautiful.',
    author: 'George Boole',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95fce07700780004d51dcc'
  }, {
    _id: '5a96009b7700780004d51dcf',
    sr: '',
    en: "The Analytical Engine does not occupy common ground with mere 'calculating machines.' It holds a position wholly its own, and the considerations it suggests are more interesting in their nature.",
    author: 'Ada Lovelace',
    source: '',
    numberOfVotes: 5,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96009b7700780004d51dcf'
  }, {
    _id: '5a96001a7700780004d51dce',
    sr: 'Nauka o operacijama, koja je nastala iz matematike, je nauka za sebe, i ima svoju apstraktnu istinu i vrednost.',
    en: 'The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.',
    author: 'Ada Lovelace',
    source: '',
    numberOfVotes: 4,
    rating: 4.6,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96001a7700780004d51dce'
  }, {
    _id: '5a9601017700780004d51dd1',
    sr: '',
    en: 'In the case of the Analytical Engine, we have undoubtedly to lay out a certain capital of analytical labour in one particular line, but this is in order that the engine may bring us in a much larger return in another line.',
    author: 'Ada Lovelace',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9601017700780004d51dd1'
  }, {
    _id: '5a9600ae7700780004d51dd0',
    sr: 'Možemo najprikladnije reći da analitička mašina tka algebarske obrasce isto kao što Žakardov razboj tka cveće i lišće.',
    en: 'We may say most aptly that the Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.',
    author: 'Ada Lovelace',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9600ae7700780004d51dd0'
  }, {
    _id: '5a9602227700780004d51dd2',
    sr: '',
    en: 'The design of the following treatise is to investigate the fundamental laws of those operations of the mind by which reasoning is performed; to give expression to them in the symbolical language of a Calculus, and upon this foundation to establish the science of Logic and construct its method.',
    author: 'George Boole',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9602227700780004d51dd2'
  }, {
    _id: '5a967d572ba98a0004b6294f',
    sr: '',
    en: 'Any one who considers arithmetical methods of producing random digits is, of course, in a state of sin. For, as has been pointed out several times, there is no such thing as a random number.',
    author: 'John von Neumann',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a967d572ba98a0004b6294f'
  }, {
    _id: '5a9602757700780004d51dd3',
    sr: '',
    en: 'There is not only a close analogy between the operations of the mind in general reasoning and its operations in the particular science of Algebra, but there is to a considerable extent an exact agreement in the laws by which the two classes of operations are conducted.',
    author: 'George Boole',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9602757700780004d51dd3'
  }, {
    _id: '5a967e9c2ba98a0004b62950',
    sr: '',
    en: 'A large part of mathematics which becomes useful developed with absolutely no desire to be useful, and in a situation where nobody could possibly know in what area it would become useful.',
    author: 'John von Neumann',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a967e9c2ba98a0004b62950'
  }, {
    _id: '5a96b8e2d6959500047aecae',
    sr: '',
    en: 'Software engineering is the part of computer science which is too difficult for the computer scientist.',
    author: 'Friedrich Bauer',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96b8e2d6959500047aecae'
  }, {
    _id: '5a96b909d6959500047aecaf',
    sr: '',
    en: 'The amateur software engineer is always in search of magic, some sensational method or tool whose application promises to render software development trivial. It is the mark of the professional software engineer to know that no such panacea exist.',
    author: 'Grady Booch',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96b909d6959500047aecaf'
  }, {
    _id: '5a96b980d6959500047aecb0',
    sr: '',
    en: 'Good people with a good process will outperform good people with no process every time.',
    author: 'Grady Booch',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96b980d6959500047aecb0'
  }, {
    _id: '5a96b998d6959500047aecb1',
    sr: '',
    en: 'The entire history of software engineering is that of the rise in levels of abstraction.',
    author: 'Grady Booch',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96b998d6959500047aecb1'
  }, {
    _id: '5a96b9ead6959500047aecb2',
    sr: '',
    en: "The reason that we think computer science is about computers is pretty much the same reason that the Egyptians thought geometry was about surveying instruments: when some field is just getting started and you don't really understand it very well, it's very easy to confuse the essence of what you're doing with the tools that you use.",
    author: 'Hal Abelson',
    source: '',
    numberOfVotes: 3,
    rating: 4.9,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96b9ead6959500047aecb2'
  }, {
    _id: '5a96b7abd6959500047aecad',
    sr: '',
    en: 'Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.',
    author: 'Alan Kay',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96b7abd6959500047aecad'
  }, {
    _id: '5a96ba01d6959500047aecb3',
    sr: '',
    en: 'Is studying computer science the best way to prepare to be a programmer? No. the best way to prepare is to write programs, and to study great programs that other people have written.',
    author: 'Bill Gates',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96ba01d6959500047aecb3'
  }, {
    _id: '5a96ba30d6959500047aecb4',
    sr: '',
    en: 'Computer science differs from physics in that it is not actually a science. It does not study natural objects. Rather, computer science is like engineering; it is all about getting something to do something.',
    author: 'Richard Feynman',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96ba30d6959500047aecb4'
  }, {
    _id: '5a96ba45d6959500047aecb5',
    sr: '',
    en: 'The purpose of computing is insight, not numbers.',
    author: 'Richard Hamming',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96ba45d6959500047aecb5'
  }, {
    _id: '5a96bb2dd6959500047aecb7',
    sr: '',
    en: 'All of our exalted technological progress, civilization for that matter, is comparable to an axe in the hand of a pathological criminal.',
    author: 'Albert Einstein',
    source: '',
    numberOfVotes: 3,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96bb2dd6959500047aecb7'
  }, {
    _id: '5a96bbaed6959500047aecb8',
    sr: '',
    en: 'When a distinguished but elderly scientist states that something is possible, they are almost certainly right. When they state that something is impossible, they are very probably wrong.',
    author: 'Arthur C. Clarke',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96bbaed6959500047aecb8'
  }, {
    _id: '5a96ba93d6959500047aecb6',
    sr: '',
    en: 'Computer science research is different from these more traditional disciplines. Philosophically it differs from the physical sciences because it seeks not to discover, explain, or exploit the natural world, but instead to study the properties of machines of human creation.',
    author: 'Dennis Ritchie',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96ba93d6959500047aecb6'
  }, {
    _id: '5a96bbc3d6959500047aecb9',
    sr: '',
    en: 'Any sufficiently advanced technology is indistinguishable from magic.',
    author: 'Arthur C. Clarke',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96bbc3d6959500047aecb9'
  }, {
    _id: '5a96bd31d6959500047aecba',
    sr: '',
    en: 'While much attention has been focused on high-level software architectural patterns, what is, in effect, the de-facto standard software architecture is seldom discussed: the Big Ball of Mud.',
    author: 'Joseph Yoder (computer scientist)',
    source: 'Brian Foote and Joseph Yoder, Big Ball of Mud',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96bd31d6959500047aecba'
  }, {
    _id: '5a96bd7ed6959500047aecbb',
    sr: '',
    en: 'All too many of our software systems are, architecturally, little more than shantytowns.',
    author: 'Joseph Yoder (computer scientist)',
    source: 'Brian Foote and Joseph Yoder, Big Ball of Mud',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96bd7ed6959500047aecbb'
  }, {
    _id: '5a96be8ed6959500047aecbe',
    sr: '',
    en: 'Managing a large project is a qualitatively different problem from managing a small one, just as leading a division of infantry into battle is different from commanding a small special forces team.',
    author: 'Joseph Yoder (computer scientist)',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96be8ed6959500047aecbe'
  }, {
    _id: '5a96bf70d6959500047aecc2',
    sr: '',
    en: 'When you build a prototype, there is always the risk that someone will say "that\'s good enough, ship it". One way to minimize the risk of a prototype being put into production is to write the prototype in using a language or tool that you couldn\'t possibly use for a production version.',
    author: 'Joseph Yoder (computer scientist)',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96bf70d6959500047aecc2'
  }, {
    _id: '5a96bec9d6959500047aecbf',
    sr: '',
    en: 'Sadly, architecture has been undervalued for so long that many engineers regard life with a Big Ball of Mud as normal.',
    author: 'Joseph Yoder (computer scientist)',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96bec9d6959500047aecbf'
  }, {
    _id: '5a96bf99d6959500047aecc3',
    sr: '',
    en: "The real problem with throwaway code comes when it isn't thrown away.",
    author: 'Joseph Yoder (computer scientist)',
    source: '',
    numberOfVotes: 2,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96bf99d6959500047aecc3'
  }, {
    _id: '5a96c01dd6959500047aecc4',
    sr: '',
    en: 'Sometimes it’s just easier to throw a system away, and start over.',
    author: 'Joseph Yoder (computer scientist)',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96c01dd6959500047aecc4'
  }, {
    _id: '5a96c299d6959500047aecc5',
    sr: '',
    en: 'Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.',
    author: 'Eric S. Raymond',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96c299d6959500047aecc5'
  }, {
    _id: '5a96c3b6d6959500047aecc7',
    sr: '',
    en: 'The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.',
    author: 'Randall E. Stross',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96c3b6d6959500047aecc7'
  }, {
    _id: '5a96c380d6959500047aecc6',
    sr: "Ja sam izumeo termin 'objektno-orjentisan', i mogu vam reći da nisam imao C++ na umu.",
    en: "I invented the term 'Object-Oriented', and I can tell you I did not have C++ in mind.",
    author: 'Alan Kay',
    source: '',
    numberOfVotes: 3,
    rating: 4.7,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96c380d6959500047aecc6'
  }, {
    _id: '5a96c44cd6959500047aecc9',
    sr: '',
    en: 'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.',
    author: 'Linus Torvalds',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96c44cd6959500047aecc9'
  }, {
    _id: '5a97def55f624c00046e2103',
    sr: '',
    en: 'Educators, generals, dieticians, psychologists, and parents program. Armies, students, and some societies are programmed.',
    author: 'Alan Perlis',
    source: 'Structure and Interpretation of Computer Programs',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97def55f624c00046e2103'
  }, {
    _id: '5a96c431d6959500047aecc8',
    sr: '',
    en: 'To iterate is human, to recurse divine.',
    author: 'L. Peter Deutsch',
    source: '',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96c431d6959500047aecc8'
  }, {
    _id: '5a97dee55f624c00046e2102',
    sr: '',
    en: 'For all its power, the computer is a harsh taskmaster. Its programs must be correct, and what we wish to say must be said accurately in every detail.',
    author: 'Alan Perlis',
    source: 'Structure and Interpretation of Computer Programs',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97dee55f624c00046e2102'
  }, {
    _id: '5a97e0755f624c00046e2104',
    sr: '',
    en: 'The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made.',
    author: 'John Locke',
    source: 'John Locke, An Essay Concerning Human Understanding (1690)',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97e0755f624c00046e2104'
  }, {
    _id: '5a97efdaccdfe50004febf35',
    sr: '',
    en: 'When program developers are not territorial about their code and encourage others to look for bugs and potential improvements, progress speeds up dramatically.',
    author: 'Gerald Weinberg',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97efdaccdfe50004febf35'
  }, {
    _id: '5a97f196ccdfe50004febf37',
    sr: '',
    en: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    author: 'Anonymous',
    source: '',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97f196ccdfe50004febf37'
  }, {
    _id: '5a97f307ccdfe50004febf39',
    sr: '',
    en: 'When debugging, novices insert corrective code; experts remove defective code.',
    author: 'Richard E. Pattis',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97f307ccdfe50004febf39'
  }, {
    _id: '5a97f324ccdfe50004febf3a',
    sr: '',
    en: 'It turns out that style matters in programming for the same reason that it matters in writing. It makes for better reading.',
    author: 'Douglas Crockford',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97f324ccdfe50004febf3a'
  }, {
    _id: '5a97f363ccdfe50004febf3b',
    sr: '',
    en: 'Computer programs are the most complex things that humans make.',
    author: 'Douglas Crockford',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97f363ccdfe50004febf3b'
  }, {
    _id: '5a97f4e1ccdfe50004febf3d',
    sr: '',
    en: 'Most programming languages contain good parts and bad parts. I discovered that I could be better programmer by using only the good parts and avoiding the bad parts.',
    author: 'Douglas Crockford',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97f4e1ccdfe50004febf3d'
  }, {
    _id: '5a97f510ccdfe50004febf3e',
    sr: '',
    en: 'Good architecture is necessary to give programs enough structure to be able to grow large without collapsing into a puddle of confusion.',
    author: 'Douglas Crockford',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97f510ccdfe50004febf3e'
  }, {
    _id: '5a97f539ccdfe50004febf3f',
    sr: '',
    en: "JavaScript is the world's most misunderstood programming language.",
    author: 'Douglas Crockford',
    source: '',
    numberOfVotes: 2,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97f539ccdfe50004febf3f'
  }, {
    _id: '5a97f5f2ccdfe50004febf41',
    sr: '',
    en: 'In JavaScript, there is a beautiful, elegant, highly expressive language that is buried under a steaming pile of good intentions and blunders.',
    author: 'Douglas Crockford',
    source: '',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97f5f2ccdfe50004febf41'
  }, {
    _id: '5a97f552ccdfe50004febf40',
    sr: '',
    en: 'Software is usually expected to be modified over the course of its productive life. The process of converting one correct program into a different correct program is extremely challenging.',
    author: 'Douglas Crockford',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97f552ccdfe50004febf40'
  }, {
    _id: '5a97f8c1ccdfe50004febf42',
    sr: '',
    en: 'Every good work of software starts by scratching a developer’s personal itch.',
    author: 'Eric S. Raymond',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97f8c1ccdfe50004febf42'
  }, {
    _id: '5a9801011878b40004879f55',
    sr: '',
    en: 'You can have the project: Done On Time. Done On Budget. Done Properly - Pick two.',
    author: 'Anonymous',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9801011878b40004879f55'
  }, {
    _id: '5a9801871878b40004879f56',
    sr: '',
    en: "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
    author: 'Andy Hunt (author)',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9801871878b40004879f56'
  }, {
    _id: '5a9801f61878b40004879f57',
    sr: '',
    en: 'Never trust a computer you can’t throw out a window.',
    author: 'Steve Wozniak',
    source: '',
    numberOfVotes: 2,
    rating: 2.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9801f61878b40004879f57'
  }, {
    _id: '5a9800cd1878b40004879f54',
    sr: '',
    en: 'The best way to predict the future is to invent it.',
    author: 'Alan Kay',
    source: '',
    numberOfVotes: 5,
    rating: 2.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9800cd1878b40004879f54'
  }, {
    _id: '5a9802611878b40004879f58',
    sr: '',
    en: 'If you can get today’s work done today, but you do it in such a way that you can’t possibly get tomorrow’s work done tomorrow, then you lose.',
    author: 'Martin Fowler',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9802611878b40004879f58'
  }, {
    _id: '5a9803171878b40004879f5a',
    sr: '',
    en: 'Codes are a puzzle. A game, just like any other game.',
    author: 'Alan Turing',
    source: '',
    numberOfVotes: 4,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9803171878b40004879f5a'
  }, {
    _id: '5a9802cb1878b40004879f59',
    sr: '',
    en: 'Documentation is a love letter that you write to your future self.',
    author: 'Damian Conway',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9802cb1878b40004879f59'
  }, {
    _id: '5a95d17b7700780004d51dba',
    sr: '',
    en: 'Life is too short to run proprietary software.',
    author: 'Bdale Garbee',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d17b7700780004d51dba'
  }, {
    _id: '5a98075b1878b40004879f5d',
    sr: '',
    en: 'W​henever I have to think to understand what the code is doing, I ask myself if I can refactor the code to make that understanding more immediately apparent.',
    author: 'Martin Fowler',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a98075b1878b40004879f5d'
  }, {
    _id: '5a9803931878b40004879f5b',
    sr: '',
    en: 'If you give someone a program, you will frustrate them for a day; if you teach them how to program, you will frustrate them for a lifetime.',
    author: 'David Leinweber',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9803931878b40004879f5b'
  }, {
    _id: '5a9803be1878b40004879f5c',
    sr: '',
    en: "The code you write makes you a programmer. The code you delete makes you a good one. The code you don't have to write makes you a great one.",
    author: 'Mario Fusco',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9803be1878b40004879f5c'
  }, {
    _id: '5a98080e1878b40004879f5f',
    sr: '',
    en: 'First do it, then do it right, then do it better.',
    author: 'Addy Osmani',
    source: '',
    numberOfVotes: 2,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a98080e1878b40004879f5f'
  }, {
    _id: '5a9808401878b40004879f60',
    sr: '',
    en: 'The cost of adding a feature isn’t just the time it takes to code it. The cost also includes the addition of an obstacle to future expansion. The trick is to pick the features that don’t fight each other.',
    author: 'John Carmack',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9808401878b40004879f60'
  }, {
    _id: '5a9808b71878b40004879f62',
    sr: 'Prvo nauči računarsku nauku i svu teoriju. Zatim razvij stil programiranja. Onda zaboravi sve to i samo hakuj.',
    en: 'First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.',
    author: 'George Carrette',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9808b71878b40004879f62'
  }, {
    _id: '5a98090a1878b40004879f64',
    sr: '',
    en: "Just because people tell you it can't be done, that doesn't necessarily mean that it can't be done. It just means that they can't do it.",
    author: 'Anders Hejlsberg',
    source: '',
    numberOfVotes: 8,
    rating: 4.4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a98090a1878b40004879f64'
  }, {
    _id: '5a98096c1878b40004879f65',
    sr: '',
    en: 'The only way to learn a new programming language is by writing programs in it.',
    author: 'Dennis Ritchie',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a98096c1878b40004879f65'
  }, {
    _id: '5a980ec71878b40004879f66',
    sr: '',
    en: 'An evolving system increases its complexity unless work is done to reduce it.',
    author: 'Manny Lehman (computer scientist)',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a980ec71878b40004879f66'
  }, {
    _id: '5a985b7ae93441000489b948',
    sr: '',
    en: 'No matter how slow you are writing clean code, you will always be slower if you make a mess.',
    author: 'Robert C. Martin',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a985b7ae93441000489b948'
  }, {
    _id: '5a985bc7e93441000489b949',
    sr: '',
    en: 'Fancy algorithms are slow when n is small, and n is usually small.',
    author: 'Rob Pike',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a985bc7e93441000489b949'
  }, {
    _id: '5a985c91e93441000489b94a',
    sr: '',
    en: 'The only difference between a FA [finite automata] and a TM [Turing machine] is that the TM, unlike the FA, has paper and pencil. Think about it. It tells you something about the power of writing.',
    author: 'Manuel Blum',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a985c91e93441000489b94a'
  }, {
    _id: '5a985e7ae93441000489b94c',
    sr: '',
    en: 'Within a computer, natural language is unnatural.',
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a985e7ae93441000489b94c'
  }, {
    _id: '5a985db5e93441000489b94b',
    sr: '',
    en: "Just because you've implemented something doesn't mean you understand it.",
    author: 'Brian Cantwell Smith',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a985db5e93441000489b94b'
  }, {
    _id: '5a9807b41878b40004879f5e',
    sr: '',
    en: "That hardly ever happens is another way of saying 'it happens'.",
    author: 'Douglas Crockford',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9807b41878b40004879f5e'
  }, {
    _id: '5a9860abe93441000489b94f',
    sr: '',
    en: 'Beware of bugs in the above code; I have only proved it correct, not tried it.',
    author: 'Donald Knuth',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9860abe93441000489b94f'
  }, {
    _id: '5a986366e93441000489b951',
    sr: '',
    en: 'A display connected to a digital computer gives us a chance to gain familiarity with concepts not realizable in the physical world. It is a looking glass into a mathematical wonderland.',
    author: 'Ivan Sutherland',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a986366e93441000489b951'
  }, {
    _id: '5a9911bb8cdbad0004955d02',
    sr: '',
    en: 'Before software can be reusable it first has to be usable.',
    author: 'Ralph Johnson (computer scientist)',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9911bb8cdbad0004955d02'
  }, {
    _id: '5a9912938cdbad0004955d04',
    sr: 'Najjeftinije, najbrže i najpouzdanije komponente su one koje nisu tu.',
    en: 'The cheapest, fastest, and most reliable components are those that aren’t there.',
    author: 'Gordon Bell',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9912938cdbad0004955d04'
  }, {
    _id: '5a9912248cdbad0004955d03',
    sr: '',
    en: 'In order to understand recursion, one must first understand recursion.',
    author: 'Anonymous',
    source: '',
    numberOfVotes: 2,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9912248cdbad0004955d03'
  }, {
    _id: '5a9995789128a800040c7dfa',
    sr: 'Najteži deo dizajna je držati mogućnosti van.',
    en: 'The hardest part of design is keeping features out.',
    author: 'Don Norman',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9995789128a800040c7dfa'
  }, {
    _id: '5a986021e93441000489b94e',
    sr: '',
    en: 'Premature abstraction is as bad as premature optimization.',
    author: 'Luciano Ramalho',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a986021e93441000489b94e'
  }, {
    _id: '5a9995d29128a800040c7dfc',
    sr: '',
    en: 'Much of the essence of building a program is in fact the debugging of the specification.',
    author: 'Fred Brooks',
    source: '',
    numberOfVotes: 2,
    rating: 3.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9995d29128a800040c7dfc'
  }, {
    _id: '5a9997389128a800040c7dfd',
    sr: '',
    en: 'Any product that needs a manual to work is broken.',
    author: 'Elon Musk',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9997389128a800040c7dfd'
  }, {
    _id: '5a9995b89128a800040c7dfb',
    sr: '',
    en: 'The act of describing a program in unambiguous detail and the act of programming are one and the same.',
    author: 'Kevlin Henney',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9995b89128a800040c7dfb'
  }, {
    _id: '5a9997929128a800040c7dfe',
    sr: 'Mislim da uvek treba imati na umu da entropija nije na tvojoj strani.',
    en: 'I think you should always bear in mind that entropy is not on your side.',
    author: 'Elon Musk',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9997929128a800040c7dfe'
  }, {
    _id: '5a9997d79128a800040c7dff',
    sr: '',
    en: "The path to the CEO's office should not be through the CFO's office, and it should not be through the marketing department. It needs to be through engineering and design.",
    author: 'Elon Musk',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9997d79128a800040c7dff'
  }, {
    _id: '5a9999f39128a800040c7e00',
    sr: '',
    en: 'People are mistaken when they think that technology just automatically improves. It does not automatically improve. It only improves if a lot of people work very hard to make it better, and actually it will, I think, by itself degrade, actually.',
    author: 'Elon Musk',
    source: '',
    numberOfVotes: 3,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9999f39128a800040c7e00'
  }, {
    _id: '5a9a9c372bad9600044b6fb4',
    sr: '',
    en: 'With artificial intelligence we are summoning the demon.',
    author: 'Elon Musk',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9a9c372bad9600044b6fb4'
  }, {
    _id: '5a9a9f7e2bad9600044b6fb6',
    sr: '',
    en: 'AI is a fundamental risk to the existence of human civilization.',
    author: 'Elon Musk',
    source: '',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9a9f7e2bad9600044b6fb6'
  }, {
    _id: '5a9aa21b2bad9600044b6fba',
    sr: '',
    en: 'The main activity of programming is not the origination of new independent programs, but in the integration, modification, and explanation of existing ones.',
    author: 'Terry Winograd',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9aa21b2bad9600044b6fba'
  }, {
    _id: '5a9aaff32bad9600044b6fbd',
    sr: '',
    en: "Cool URIs don't change.",
    author: 'Tim Berners-Lee',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9aaff32bad9600044b6fbd'
  }, {
    _id: '5a9aaf8e2bad9600044b6fbc',
    sr: '',
    en: "I don't believe in the sort of eureka moment idea. I think it's a myth. I'm very suspicious that actually Archimedes had been thinking about that problem for a long time.",
    author: 'Tim Berners-Lee',
    source: '',
    numberOfVotes: 4,
    rating: 3.7,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9aaf8e2bad9600044b6fbc'
  }, {
    _id: '5a9ab0372bad9600044b6fbf',
    sr: '',
    en: "When I invented the web, I didn't have to ask anyone's permission.",
    author: 'Tim Berners-Lee',
    source: '',
    numberOfVotes: 2,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9ab0372bad9600044b6fbf'
  }, {
    _id: '5a9aa01d2bad9600044b6fb7',
    sr: '',
    en: 'We need to be super careful with AI. Potentially more dangerous than nukes.',
    author: 'Elon Musk',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9aa01d2bad9600044b6fb7'
  }, {
    _id: '5a9ab1802bad9600044b6fc1',
    sr: '',
    en: "I invented the Web just because I needed it, really, because it was so frustrating that it didn't exit.",
    author: 'Tim Berners-Lee',
    source: '',
    numberOfVotes: 3,
    rating: 4.7,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9ab1802bad9600044b6fc1'
  }, {
    _id: '5a9ab1ac2bad9600044b6fc2',
    sr: '',
    en: 'To be a hacker - when I use the term - is somebody who is creative and does wonderful things.',
    author: 'Tim Berners-Lee',
    source: '',
    numberOfVotes: 3,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9ab1ac2bad9600044b6fc2'
  }, {
    _id: '5a9ab1fa2bad9600044b6fc3',
    sr: '',
    en: 'The Domain Name Server (DNS) is the Achilles heel of the Web.',
    author: 'Tim Berners-Lee',
    source: '',
    numberOfVotes: 2,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9ab1fa2bad9600044b6fc3'
  }, {
    _id: '5a9ab3f52bad9600044b6fc4',
    sr: '',
    en: 'Two centuries ago Leibnitz invented a calculating machine which embodied most of the essential features of recent keyboard devices, but it could not then come into use. The economics of the situation were against it.',
    author: 'Vannevar Bush',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9ab3f52bad9600044b6fc4'
  }, {
    _id: '5a9ab4a82bad9600044b6fc5',
    sr: '',
    en: 'Whenever logical processes of thought are employed, there is an opportunity for the machine.',
    author: 'Vannevar Bush',
    source: '',
    numberOfVotes: 2,
    rating: 2.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9ab4a82bad9600044b6fc5'
  }, {
    _id: '5a9ab8f42bad9600044b6fc6',
    sr: '',
    en: 'If scientific reasoning were limited to the logical processes of arithmetic, we should not get very far in our understanding of the physical world. One might as well attempt to grasp the game of poker entirely by the use of the mathematics of probability.',
    author: 'Vannevar Bush',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9ab8f42bad9600044b6fc6'
  }, {
    _id: '5a9ac42b2bad9600044b6fc7',
    sr: '',
    en: 'Shipping first time code is like going into debt. A little debt speeds development so long as it is paid back promptly with a rewrite. The danger occurs when the debt is not repaid. Every minute spent on not-quite-right code counts as interest on that debt. Entire engineering organizations can be brought to a stand-still under the technical debt load.',
    author: 'Ward Cunningham',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9ac42b2bad9600044b6fc7'
  }, {
    _id: '5a9ac4852bad9600044b6fc8',
    sr: '',
    en: 'Like a financial debt, the technical debt incurs interest payments, which come in the form of the extra effort that we have to do in future development because of the quick and dirty design choice.',
    author: 'Martin Fowler',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9ac4852bad9600044b6fc8'
  }, {
    _id: '5a9ac5942bad9600044b6fc9',
    sr: '',
    en: 'One of the important implications of technical debt is that it must be serviced. If the debt grows large enough, eventually the company will spend more on servicing its debt than it invests in increasing the value of its other assets.',
    author: 'Steve McConnell',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9ac5942bad9600044b6fc9'
  }, {
    _id: '5a9ab0622bad9600044b6fc0',
    sr: '',
    en: "What's very important from my point of view is that there is one web. Anyone that tries to chop it into two will find that their piece looks very boring.",
    author: 'Tim Berners-Lee',
    source: '',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9ab0622bad9600044b6fc0'
  }, {
    _id: '5a9b0b112bad9600044b6fca',
    sr: '',
    en: 'Thus it is observable that the buildings which a single architect has planned and executed, are generally more elegant and commodious than those which several have attempted to improve.',
    author: 'René Descartes',
    source: "Discourse on the Method of Rightly Conducting One's Reason and of Seeking Truth in the Sciences",
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b0b112bad9600044b6fca'
  }, {
    _id: '5a9b0b752bad9600044b6fcb',
    sr: '',
    en: 'Computers are the most complex objects we human beings have ever created, but in a fundamental sense they are remarkably simple.',
    author: 'Danny Hillis',
    source: 'The Pattern On The Stone: The Simple Ideas That Make Computers Work',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b0b752bad9600044b6fcb'
  }, {
    _id: '5a9b0bb22bad9600044b6fcd',
    sr: '',
    en: 'The magic of a computer lies in its ability to become almost anything you can imagine, as long as you can explain exactly what that is.',
    author: 'Danny Hillis',
    source: 'The Pattern On The Stone: The Simple Ideas That Make Computers Work',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b0bb22bad9600044b6fcd'
  }, {
    _id: '5a9b0b9a2bad9600044b6fcc',
    sr: '',
    en: 'The computer is not just an advanced calculator or camera or paintbrush; rather, it is a device that accelerates and extends our processes of thought.',
    author: 'Danny Hillis',
    source: 'The Pattern On The Stone: The Simple Ideas That Make Computers Work',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b0b9a2bad9600044b6fcc'
  }, {
    _id: '5a9b0bce2bad9600044b6fce',
    sr: '',
    en: 'With the right programming, a computer can become a theater, a musical instrument, a reference book, a chess opponent. No other entity in the world except a human being has such an adaptable, universal nature.',
    author: 'Danny Hillis',
    source: 'The Pattern On The Stone: The Simple Ideas That Make Computers Work',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b0bce2bad9600044b6fce'
  }, {
    _id: '5a9b0c2f2bad9600044b6fcf',
    sr: '',
    en: 'Anyone who has ever written a program knows that telling a computer what you want it to do is not as easy as it sounds. Every detail of the computer’s desired operation must be precisely described. For instance, if you tell an accounting program to bill your clients for the amount that each owes, then the computer will send out a weekly bill for $0.00 to clients who owe nothing.',
    author: 'Danny Hillis',
    source: 'The Pattern On The Stone: The Simple Ideas That Make Computers Work',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b0c2f2bad9600044b6fcf'
  }, {
    _id: '5a9b0c4b2bad9600044b6fd0',
    sr: 'Vešt programer je kao pesnik koji može pretočiti u reči one ideje koje drugi ne mogu izraziti.',
    en: 'A skilled programmer is like a poet who can put into words those ideas that others find inexpressible.',
    author: 'Danny Hillis',
    source: 'The Pattern On The Stone: The Simple Ideas That Make Computers Work',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b0c4b2bad9600044b6fd0'
  }, {
    _id: '5a9b0c6b2bad9600044b6fd1',
    sr: '',
    en: 'Every computer language has its Shakespeares, and it is a joy to read their code. A well-written computer program possesses style, finesse, even humor—and a clarity that rivals the best prose.',
    author: 'Danny Hillis',
    source: 'The Pattern On The Stone: The Simple Ideas That Make Computers Work',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b0c6b2bad9600044b6fd1'
  }, {
    _id: '5a9b0c932bad9600044b6fd2',
    sr: '',
    en: 'It turns out that there is no algorithm for examining a program and determining whether or not it is fatally infected with an endless loop. Moreover, it’s not that no one has yet discovered such an algorithm; rather, no such algorithm is possible.',
    author: 'Danny Hillis',
    source: 'The Pattern On The Stone: The Simple Ideas That Make Computers Work',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b0c932bad9600044b6fd2'
  }, {
    _id: '5a9b0cc62bad9600044b6fd3',
    sr: '',
    en: 'The class of problems that are computable by a digital computer apparently includes every problem that is computable by any kind of device.',
    author: 'Danny Hillis',
    source: 'The Pattern On The Stone: The Simple Ideas That Make Computers Work',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b0cc62bad9600044b6fd3'
  }, {
    _id: '5a9b0d662bad9600044b6fd5',
    sr: '',
    en: "The programs we use to conjure processes are like a sorcerer's spells. They are carefully composed from symbolic expressions in arcane and esoteric programming languages that prescribe the tasks we want our processes to perform.",
    author: 'Hal Abelson',
    source: 'Structure and Interpretation of Computer Programs',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b0d662bad9600044b6fd5'
  }, {
    _id: '5a9b10db2bad9600044b6fd7',
    sr: '',
    en: 'Human beings are not accustomed to being perfect, and few areas of human activity demand it. Adjusting to the requirement for perfection is, I think, the most difficult part of learning to program.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b10db2bad9600044b6fd7'
  }, {
    _id: '5a9b131f2bad9600044b6fd9',
    sr: '',
    en: 'Because of optimism, we usually expect the number of bugs to be smaller than it turns out to be. Therefore testing is usually the most mis-scheduled part of programming.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b131f2bad9600044b6fd9'
  }, {
    _id: '5a9b0d9c2bad9600044b6fd6',
    sr: '',
    en: 'One of the greatest joys in computer programming is discovering a new, faster, more efficient algorithm for doing something — particularly if a lot of well-respected people have come up with worse solutions.',
    author: 'Danny Hillis',
    source: 'The Pattern On The Stone: The Simple Ideas That Make Computers Work',
    numberOfVotes: 3,
    rating: 4.7,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b0d9c2bad9600044b6fd6'
  }, {
    _id: '5a9b13442bad9600044b6fda',
    sr: '',
    en: "False scheduling to match the patron's desired date is much more common in our discipline than elsewhere in engineering.",
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b13442bad9600044b6fda'
  }, {
    _id: '5a9b14c12bad9600044b6fdb',
    sr: '',
    en: 'The best programmers are up to 28 times better than the worst programmers, according to “individual differences” research. Given that their pay is never commensurate, they are the biggest bargains in the software field.',
    author: 'Robert L. Glass',
    source: 'Facts and Fallacies of Software Engineering',
    numberOfVotes: 1,
    rating: 2.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b14c12bad9600044b6fdb'
  }, {
    _id: '5a9b154e2bad9600044b6fdc',
    sr: '',
    en: 'Sackman, Erickson, and Grant were measuring performance of a group of experienced programmers. Within just this group the ratios between the best and worst performances averaged about 10:1 on productivity measurements and an amazing 5:1 on program speed and space measurements!',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b154e2bad9600044b6fdc'
  }, {
    _id: '5a9b15cb2bad9600044b6fdd',
    sr: '',
    en: 'Conceptual integrity is the most important consideration in system design. It is better to have a system omit certain anomalous features and improvements, but to reflect one set of design ideas, than to have one that contains many good but independent and uncoordinated ideas.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b15cb2bad9600044b6fdd'
  }, {
    _id: '5a9b15e52bad9600044b6fde',
    sr: '',
    en: 'The separation of architectural effort from implementation is a very powerful way of getting conceptual integrity on very large projects.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b15e52bad9600044b6fde'
  }, {
    _id: '5a9b16122bad9600044b6fdf',
    sr: '',
    en: 'The general tendency is to over-design the second system, using all the ideas and frills that were cautiously sidetracked on the first one.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b16122bad9600044b6fdf'
  }, {
    _id: '5a9b16922bad9600044b6fe2',
    sr: '',
    en: 'The management question, therefore, is not whether to build a pilot system and throw it away. You will do that. The only question is whether to plan in advance to build a throwaway, or to promise to deliver the throwaway to customers.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b16922bad9600044b6fe2'
  }, {
    _id: '5a9b17542bad9600044b6fe4',
    sr: '',
    en: 'Program building is an entropy-decreasing process, hence inherently metastable. Program maintenance is an entropy-increasing process, and even its most skillful execution only delays the subsidence of the system into unfixable obsolescence.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b17542bad9600044b6fe4'
  }, {
    _id: '5a9b16792bad9600044b6fe1',
    sr: '',
    en: 'Chemical engineers learned long ago that a process that works in the laboratory cannot be implemented in a factory in only one step.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b16792bad9600044b6fe1'
  }, {
    _id: '5a9b17f92bad9600044b6fe7',
    sr: '',
    en: 'First, we must observe that the anomaly is not that software progress is so slow but that computer hardware progress is so fast. No other technology since civilization began has seen six orders of magnitude price-performance gain in 30 years.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b17f92bad9600044b6fe7'
  }, {
    _id: '5a9b17a22bad9600044b6fe6',
    sr: 'Kodiranje je "90 posto završeno" polovinu ukupnog vremena kodiranja. Debagovanje je "99 posto završeno" većinu vremena.',
    en: 'Coding is "90 percent finished" for half of the total coding time. Debugging is "99 percent complete" most of the time.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b17a22bad9600044b6fe6'
  }, {
    _id: '5a9b18102bad9600044b6fe8',
    sr: '',
    en: 'The complexity of software is an essential property, not an accidental one. Hence descriptions of a software entity that abstract away its complexity often abstract away its essence.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b18102bad9600044b6fe8'
  }, {
    _id: '5a9b189c2bad9600044b6fea',
    sr: '',
    en: 'Study after study shows that the very best designers produce structures that are faster, smaller, simpler, cleaner, and produced with less effort. The differences between the great and the average approach an order of magnitude.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b189c2bad9600044b6fea'
  }, {
    _id: '5a9b18d52bad9600044b6fec',
    sr: '',
    en: 'A programming systems product takes about nine times as much effort as the component programs written separately for private use.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b18d52bad9600044b6fec'
  }, {
    _id: '5a9b190a2bad9600044b6fed',
    sr: '',
    en: 'My rule of thumb is 1/3 of the schedule for design, 1/6 for coding, 1/4 for component testing, and 1/4 for system testing.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b190a2bad9600044b6fed'
  }, {
    _id: '5a9b18bf2bad9600044b6feb',
    sr: '',
    en: 'First, my wife, my colleagues, and my editors find me to err far more often in optimism than in pessimism. I am, after all, a programmer by background, and optimism is an occupational disease of our craft.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b18bf2bad9600044b6feb'
  }, {
    _id: '5a9b19232bad9600044b6fee',
    sr: 'Pošto smo nesigurni oko naših procena rokova, često nam nedostaje hrabrosti da ih uporno branimo od pritiska menadžmenta i klijenata.',
    en: 'Because we are uncertain about our scheduling estimates, we often lack the courage to defend them stubbornly against management and customer pressure.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b19232bad9600044b6fee'
  }, {
    _id: '5a9b19422bad9600044b6fef',
    sr: '',
    en: 'Adding people to a software project increases the total effort necessary in three ways: the work and disruption of repartitioning itself, training the new people, and added intercommunication.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b19422bad9600044b6fef'
  }, {
    _id: '5a9b195a2bad9600044b6ff0',
    sr: '',
    en: 'Very good professional programmers are ten times as productive as poor ones, at same training and two-year experience level.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b195a2bad9600044b6ff0'
  }, {
    _id: '5a9b198a2bad9600044b6ff2',
    sr: '',
    en: 'Programming increases goes as a power of program size.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b198a2bad9600044b6ff2'
  }, {
    _id: '5a9b1abf2bad9600044b6ff7',
    sr: '',
    en: 'Various studies indicate that the optimal team size is between 2 and 5, with 3 being the mode. With more than 5 team members, team management begins to dominate the work.',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b1abf2bad9600044b6ff7'
  }, {
    _id: '5a9b1ce02bad9600044b6ff8',
    sr: '',
    en: 'A stupid error is an algorithmically avoidable error. Mainly, you are stupid if you let an error that a program can detect go undetected.',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b1ce02bad9600044b6ff8'
  }, {
    _id: '5a9b19dd2bad9600044b6ff4',
    sr: 'Sve popravke teže da unište strukturu, da uvećaju entropiju i nered u sistemu.',
    en: 'All repairs tend to destroy structure, to increase the entropy and disorder of a system.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b19dd2bad9600044b6ff4'
  }, {
    _id: '5a9b1d7d2bad9600044b6ffa',
    sr: '',
    en: 'I think there is a world market for maybe five\ncomputers.',
    author: 'Thomas J. Watson',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b1d7d2bad9600044b6ffa'
  }, {
    _id: '5a9b1e082bad9600044b6ffb',
    sr: '',
    en: 'There is no reason anyone would want a computer in their home.',
    author: 'Ken Olsen',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b1e082bad9600044b6ffb'
  }, {
    _id: '5a9b1eb02bad9600044b6ffc',
    sr: '',
    en: 'The beginning of wisdom for a programmer is to recognize the difference between getting his program to work and getting it right.',
    author: 'Michael A. Jackson',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b1eb02bad9600044b6ffc'
  }, {
    _id: '5a9b1ece2bad9600044b6ffd',
    sr: '',
    en: 'Two things are known about requirements:\n1. They will change!\n2. They will be misunderstood!',
    author: 'Michael A. Jackson',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b1ece2bad9600044b6ffd'
  }, {
    _id: '5a9b1f362bad9600044b6fff',
    sr: '',
    en: 'Every time you improve process, work becomes harder.',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b1f362bad9600044b6fff'
  }, {
    _id: '5a9b1f592bad9600044b7000',
    sr: '',
    en: 'There is never enough time to do it right, but there is always enough time to fix it or to do it over.',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b1f592bad9600044b7000'
  }, {
    _id: '5a8e9be284a8f2000482568c',
    sr: '',
    en: 'The more code you have, the more places there are for bugs to hide.',
    author: 'Rich Skrenta',
    source: 'http://www.skrenta.com/2007/05/code_is_our_enemy.html',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a8e9be284a8f2000482568c'
  }, {
    _id: '5a97f062ccdfe50004febf36',
    sr: '',
    en: 'If builders built houses the way programmers built programs, the first woodpecker to come along would destroy civilization.',
    author: 'Gerald Weinberg',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97f062ccdfe50004febf36'
  }, {
    _id: '5a9aa1db2bad9600044b6fb9',
    sr: '',
    en: 'The techniques of artificial intelligence are to the mind what bureaucracy is to human social interaction.',
    author: 'Terry Winograd',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9aa1db2bad9600044b6fb9'
  }, {
    _id: '5a9b1f692bad9600044b7001',
    sr: '',
    en: 'Code is expensive to change, but design is cheaper to change, and requirements are even cheaper to change.',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b1f692bad9600044b7001'
  }, {
    _id: '5a9b1f822bad9600044b7002',
    sr: '',
    en: 'The cost to repair an error goes up dramatically as project moves towards completion and beyond.',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b1f822bad9600044b7002'
  }, {
    _id: '5a9b1f252bad9600044b6ffe',
    sr: '',
    en: 'A team of highly competent programmers who are also highly territorial, egotistical politicians will fail while a team of equally competent programmers, who are also egoless, cooperative, team players will succeed.',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 3,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b1f252bad9600044b6ffe'
  }, {
    _id: '5a9b203c2bad9600044b7004',
    sr: '',
    en: 'For most software, efficiency just does not matter.',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 3,
    rating: 3.9,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b203c2bad9600044b7004'
  }, {
    _id: '5a9b214b2bad9600044b7005',
    sr: '',
    en: 'The best way to know that you have found the last bug is never to find the first bug.',
    author: 'Harlan Mills',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b214b2bad9600044b7005'
  }, {
    _id: '5a9b21cb2bad9600044b7008',
    sr: '',
    en: 'An interactive debugger is an outstanding example of what is not needed - it encourages trial-and-error hacking rather than systematic design, and also hides marginal people barely qualified for precision programming.',
    author: 'Harlan Mills',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b21cb2bad9600044b7008'
  }, {
    _id: '5a9b22a02bad9600044b7009',
    sr: '',
    en: 'Thoroughly testing a program is impossible (requires unbounded number of test cases); so try to choose test cases that will expose all errors. That’s very difficult, especially since we do not know what all the errors are, and if we did, we would not need the test cases!',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b22a02bad9600044b7009'
  }, {
    _id: '5a9b21a12bad9600044b7007',
    sr: 'Jedini način da se greške pojave u programu je da ih tamo stavi autor. Ni jedan drugi mehanizam nije poznat.',
    en: 'The only way for errors to occur in a program is by being put there by the author. No other mechanisms are known.',
    author: 'Harlan Mills',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b21a12bad9600044b7007'
  }, {
    _id: '5a9b22c72bad9600044b700b',
    sr: '',
    en: 'Reliable computations are obtainable from buggy programs, which after all, are the only kind of programs there are.',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b22c72bad9600044b700b'
  }, {
    _id: '5a9b22ed2bad9600044b700c',
    sr: 'Mogu napraviti pouzdan sistem sa hiljadama bagova, ako me pustite da izaberem bagove pažljivo.',
    en: 'I can build a reliable system with thousands of bugs, if you let me choose my bugs carefully.',
    author: 'David Parnas',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b22ed2bad9600044b700c'
  }, {
    _id: '5a9b231d2bad9600044b700d',
    sr: '',
    en: 'Ed Adams of IBM found that 80% of the reliability problems are caused by only 2% of the defects.',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b231d2bad9600044b700d'
  }, {
    _id: '5a9b23502bad9600044b700e',
    sr: '',
    en: 'Hardware is the part you can replace. Software is the part you have to keep, because it’s so expensive and nobody understands it any more.',
    author: 'Jim Horning',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b23502bad9600044b700e'
  }, {
    _id: '5a9b23dc2bad9600044b7011',
    sr: '',
    en: 'Any technological or managerial scheme to force documentation can be subverted by unwilling programmers.',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b23dc2bad9600044b7011'
  }, {
    _id: '5a9b23b02bad9600044b700f',
    sr: '',
    en: 'Good judgement comes from experience. Experience comes from bad judgement.',
    author: 'Jim Horning',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b23b02bad9600044b700f'
  }, {
    _id: '5a9c649eff6af300049e6b59',
    sr: '',
    en: 'Machines as simple as thermostats can be said to have beliefs.',
    author: 'John McCarthy (computer scientist)',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9c649eff6af300049e6b59'
  }, {
    _id: '5a9b253f2bad9600044b7016',
    sr: 'Radni okvir može obezbediti 90% funkcija koje nam trebaju brzo - dajući nam lažan osećaj samopouzdanja u ranoj fazi razvoja - a zatim biti frustrirajuće težak kada se radi o implementaciji poslednjih 10%.',
    en: 'A framework can provide 90% of the features we need quickly — giving us a false sense of confidence early in the development cycle — and then be frustratingly hard when it comes to implementing the last 10%.',
    author: 'Tony Parisi (software developer)',
    source: 'Programming 3D Applications with HTML5 and WebGL',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b253f2bad9600044b7016'
  }, {
    _id: '5a9c6502ff6af300049e6b5a',
    sr: '',
    en: 'Mental qualities peculiar to human-like motivational structures, such as love and hate, will not be required for intelligent behavior, but we could probably program computers to exhibit them if we wanted to.',
    author: 'John McCarthy (computer scientist)',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9c6502ff6af300049e6b5a'
  }, {
    _id: '5a9d2f8c607c5100044dff77',
    sr: '',
    en: "I have met bright students in computer science who have never seen the source code of a large program. They may be good at writing small programs, but they can't begin to learn the different skills of writing large ones if they can't see how others have done it.",
    author: 'Richard Stallman',
    source: '',
    numberOfVotes: 2,
    rating: 3.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9d2f8c607c5100044dff77'
  }, {
    _id: '5a9c65d6ff6af300049e6b5b',
    sr: '',
    en: 'Program designers have a tendency to think of the users as idiots who need to be controlled. They should rather think of their program as a servant, whose master, the user, should be able to control it.',
    author: 'John McCarthy (computer scientist)',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9c65d6ff6af300049e6b5b'
  }, {
    _id: '5a9d3007607c5100044dff79',
    sr: '',
    en: 'In fact, in the 1980s I often came across newly graduated computer science majors who had never seen a real program in their lives. They had only seen toy exercises, school exercises, because every real program was a trade secret.',
    author: 'Richard Stallman',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9d3007607c5100044dff79'
  }, {
    _id: '5a9d31fa607c5100044dff7c',
    sr: '',
    en: 'I figure that since proprietary software developers use copyright to stop us from sharing, we cooperators can use copyright to give other cooperators an advantage of their own: they can use our code.',
    author: 'Richard Stallman',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9d31fa607c5100044dff7c'
  }, {
    _id: '5a9d2eb2607c5100044dff75',
    sr: '',
    en: 'I consider that the golden rule requires that if I like a program I must share it with other people who like it. Software sellers want to divide the users and conquer them, making each user agree not to share with others. I refuse to break solidarity with other users in this way.',
    author: 'Richard Stallman',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9d2eb2607c5100044dff75'
  }, {
    _id: '5a9d33ae607c5100044dff7d',
    sr: '',
    en: 'The free software community rejects the “priesthood of technology”, which keeps the general public in ignorance of how technology works; we encourage students of any age and situation to read the source code and learn as much as they want to know.',
    author: 'Richard Stallman',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9d33ae607c5100044dff7d'
  }, {
    _id: '5a9d3532607c5100044dff7e',
    sr: '',
    en: "The most powerful programming language is Lisp. If you don't know Lisp (or its variant, Scheme), you don't know what it means for a programming language to be powerful and elegant. Once you learn Lisp, you will understand what is lacking in most other languages.",
    author: 'Richard Stallman',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9d3532607c5100044dff7e'
  }, {
    _id: '5a9d36a4607c5100044dff7f',
    sr: '',
    en: "Programming is programming. If you get good at programming, it doesn't matter which language you learned it in, because you'll be able to do programming in any language.",
    author: 'Richard Stallman',
    source: '',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9d36a4607c5100044dff7f'
  }, {
    _id: '5a9dc5de6744730004f6a1e6',
    sr: '',
    en: 'It was on one of my journeys between the EDSAC room and the punching equipment the realization came over me with full force that a good part of the remainder of my life was going to be spent in finding errors in my own programs.',
    author: 'Maurice Wilkes',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9dc5de6744730004f6a1e6'
  }, {
    _id: '5a9dc65d6744730004f6a1e8',
    sr: '',
    en: 'Since 1954, the raw speed of computers, as measured by the time it takes to do an addition, increased by a factor of 10,000. That means an algorithm that once took 10 minutes to perform can now be done 15 times a second.',
    author: 'Maurice Wilkes',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9dc65d6744730004f6a1e8'
  }, {
    _id: '5a9dc8e76744730004f6a1e9',
    sr: '',
    en: 'Typing is no substitute for thinking.',
    author: 'Richard Hamming',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9dc8e76744730004f6a1e9'
  }, {
    _id: '5a9d530a1a29250004e946df',
    sr: '',
    en: 'A programmer who subconsciously views himself as an artist will enjoy what he does and will do it better.',
    author: 'Donald Knuth',
    source: '',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9d530a1a29250004e946df'
  }, {
    _id: '5a9dc9c26744730004f6a1ea',
    sr: '',
    en: 'Perhaps the central problem we face in all of computer science is how we are to get to the situation where we build on top of the work of others rather than redoing so much of it in a trivially different way.',
    author: 'Richard Hamming',
    source: '',
    numberOfVotes: 2,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9dc9c26744730004f6a1ea'
  }, {
    _id: '5a9dcace6744730004f6a1eb',
    sr: '',
    en: 'Any unwillingness to learn mathematics today can greatly restrict your possibilities tomorrow.',
    author: 'Richard Hamming',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9dcace6744730004f6a1eb'
  }, {
    _id: '5aa28cf31dcf530004c4bf64',
    sr: 'Istinski dobri programi žive večno.',
    en: 'Really good programs live forever.',
    author: 'Charles Simonyi',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa28cf31dcf530004c4bf64'
  }, {
    _id: '5a9dccdd6744730004f6a1ec',
    sr: '',
    en: 'In science if you know what you are doing you should not be doing it. In engineering if you do not know what you are doing you should not be doing it.',
    author: 'Richard Hamming',
    source: '',
    numberOfVotes: 3,
    rating: 3.9,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9dccdd6744730004f6a1ec'
  }, {
    _id: '5aa28d721dcf530004c4bf65',
    sr: '',
    en: 'In handling resources, strive to avoid disaster rather than to attain an optimum.',
    author: 'Butler Lampson',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa28d721dcf530004c4bf65'
  }, {
    _id: '5aa28ea11dcf530004c4bf67',
    sr: '',
    en: 'As with most projects, the last two percent takes fifty percent of the time.',
    author: 'John Warnock',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa28ea11dcf530004c4bf67'
  }, {
    _id: '5aa299fbe7e86700048f0279',
    sr: '',
    en: "It's fun to sit at a terminal and let the code flow. It sounds strange, but it just comes out my brain; once I'm started, I don't have to think about it.",
    author: 'Gary Kildall',
    source: 'Programmers at Work',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa299fbe7e86700048f0279'
  }, {
    _id: '5aa29b16e7e86700048f027a',
    sr: '',
    en: 'I think programming is very much a religious experience for a lot of people.',
    author: 'Gary Kildall',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa29b16e7e86700048f027a'
  }, {
    _id: '5aa28c251dcf530004c4bf63',
    sr: '',
    en: 'What is programming? Some people call it a science, some people call it an art, some people call it a skill. I think it has aspects of all three.',
    author: 'Charles Simonyi',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa28c251dcf530004c4bf63'
  }, {
    _id: '5aa29bfee7e86700048f027b',
    sr: 'Ako ste ikada razgovarali sa velikim programerom, otkrićete da on zna svoje alate kao što umetnik zna svoje četkice.',
    en: "If you ever talk to a great programmer, you'll find he knows his tools like an artist knows his paintbrushes.",
    author: 'Bill Gates',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa29bfee7e86700048f027b'
  }, {
    _id: '5aa29c76e7e86700048f027c',
    sr: '',
    en: "Our goals are very simple. We're going to create the software that puts a computer on every desk and in every home.",
    author: 'Bill Gates',
    source: 'Programmers at Work',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa29c76e7e86700048f027c'
  }, {
    _id: '5aa2a019e7e86700048f027f',
    sr: 'Najvažniji deo pisanja programa je dizajniranje struktura podataka.',
    en: 'The most important part of writing a program is designing the data structures.',
    author: 'Dan Bricklin',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa2a019e7e86700048f027f'
  }, {
    _id: '5aa2a0ace7e86700048f0280',
    sr: '',
    en: "Ideas don't disappear. They change form, they merge with other ideas.",
    author: 'Bob Frankston',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa2a0ace7e86700048f0280'
  }, {
    _id: '5aa2a355e7e86700048f0284',
    sr: '',
    en: 'I care not only what the code says but how it looks.',
    author: 'Peter Roizen',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa2a355e7e86700048f0284'
  }, {
    _id: '5aa2a2f1e7e86700048f0283',
    sr: '',
    en: 'Programming is the ultimate field for someone who likes to tinker.',
    author: 'Ray Ozzie',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa2a2f1e7e86700048f0283'
  }, {
    _id: '5aa2a3fde7e86700048f0286',
    sr: 'Programiranje može biti zavisnost.',
    en: 'Programming can be addictive.',
    author: 'Bob Carr',
    source: 'Programmers at Work',
    numberOfVotes: 2,
    rating: 3.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa2a3fde7e86700048f0286'
  }, {
    _id: '5aa2a3b3e7e86700048f0285',
    sr: '',
    en: 'From an artistic standpoint, the best software comes from the realm of intuition.',
    author: 'Bob Carr',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa2a3b3e7e86700048f0285'
  }, {
    _id: '5aa2a602e7e86700048f0287',
    sr: '',
    en: 'Then Apple went public toward the end of 1980. All of a sudden, all these people I was working with were millionaires.',
    author: 'Andy Hertzfeld',
    source: 'Programmers at Work',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa2a602e7e86700048f0287'
  }, {
    _id: '5aa2a68ce7e86700048f0288',
    sr: '',
    en: "I'm interested in creating images that communicate with people.",
    author: 'Toru Iwatani',
    source: 'Programmers at Work',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa2a68ce7e86700048f0288'
  }, {
    _id: '5aa31172bb93c00004d9a6f6',
    sr: '',
    en: 'I think the best way to supervise is by personal example and by frequent code reviews.',
    author: 'Charles Simonyi',
    source: 'Programmers at Work',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa31172bb93c00004d9a6f6'
  }, {
    _id: '5aa3181fbb93c00004d9a6f8',
    sr: '',
    en: 'There are some basic techniques to control complexity. Fundamentally, I divide and conquer, break things down, and try to write reasonably precise descriptions of what each piece is supposed to do.',
    author: 'Butler Lampson',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa3181fbb93c00004d9a6f8'
  }, {
    _id: '5aa311f9bb93c00004d9a6f7',
    sr: '',
    en: 'The efficiency of the code decreases with an increase in the number of people working on the program. The most efficient programs are written by a single person.',
    author: 'Charles Simonyi',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa311f9bb93c00004d9a6f7'
  }, {
    _id: '5aa30d4abb93c00004d9a6f5',
    sr: '',
    en: "I'll bet you that from ten feet away I can tell if a program is bad. I might not guarantee that it is good, but if it looks bad from ten feet, I can guarantee you that it wasn't written with care.",
    author: 'Charles Simonyi',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa30d4abb93c00004d9a6f5'
  }, {
    _id: '5aa44e197832df00040ac9b7',
    sr: '',
    en: 'Nobody knows how to build really complicated hardware systems, so designing hardware tends to be simpler. Software is much more complicated.',
    author: 'Butler Lampson',
    source: 'Programmers at Work',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa44e197832df00040ac9b7'
  }, {
    _id: '5aa4511b7832df00040ac9b8',
    sr: '',
    en: 'A beautiful program is like a beautiful theorem: It does the job elegantly.',
    author: 'Butler Lampson',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa4511b7832df00040ac9b8'
  }, {
    _id: '5aa456667832df00040ac9b9',
    sr: '',
    en: 'To be successful, you want to surround yourself with very talented folks whose skills blend very well. That’s the secret of success.',
    author: 'John Warnock',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa456667832df00040ac9b9'
  }, {
    _id: '5aa459d77832df00040ac9bc',
    sr: '',
    en: 'I start with drawing the data structures, and I spend a lot of time thinking about them. I also think about what the program has to go through before I start writing code.',
    author: 'Gary Kildall',
    source: 'Programmers at Work',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa459d77832df00040ac9bc'
  }, {
    _id: '5aa456d87832df00040ac9ba',
    sr: '',
    en: 'Don’t go into a two-year development with nothing coming out in the middle. Have something come out every two months, so you can evaluate, regroup, and restart.',
    author: 'John Warnock',
    source: 'Programmers at Work',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa456d87832df00040ac9ba'
  }, {
    _id: '5aa459767832df00040ac9bb',
    sr: '',
    en: 'If you learn how to solve problems, you can go through life and do pretty well.',
    author: 'Gary Kildall',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa459767832df00040ac9bb'
  }, {
    _id: '5aa45f317832df00040ac9c0',
    sr: '',
    en: 'A great programmer thinks about the program on a constant basis, whether driving or eating. That method takes an incredible amount of mental energy.',
    author: 'Bill Gates',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa45f317832df00040ac9c0'
  }, {
    _id: '5aa4601c7832df00040ac9c1',
    sr: '',
    en: "The really great programs I've written have all been ones that I have thought about for a huge amount of time before I ever wrote them.",
    author: 'Bill Gates',
    source: 'Programmers at Work',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa4601c7832df00040ac9c1'
  }, {
    _id: '5aa461667832df00040ac9c2',
    sr: '',
    en: 'There is an amazing commonality in the types of difficulties you run into. In design reviews, I really enjoy being able to provide advice, based on programs that I have done.',
    author: 'Bill Gates',
    source: 'Programmers at Work',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa461667832df00040ac9c2'
  }, {
    _id: '5a9b16b92bad9600044b6fe3',
    sr: '',
    en: 'The fundamental problem with program maintenance is that fixing a defect has a substantial (20-50 percent) chance of introducing another. So the whole process is two steps forward and one step back.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b16b92bad9600044b6fe3'
  }, {
    _id: '5aa5c874d1481c4acc43aa71',
    en: 'Really care about the tools you use because they are what make you your best.',
    sr: 'Stvarno brinite o alatima koje koristite jer to je ono što vas čini najboljim.',
    author: 'Addy Osmani',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa5c874d1481c4acc43aa71'
  }, {
    _id: '5aa63f3a42fbc6000481ca0d',
    en: 'What I like about programming is that it really helps you think about how we communicate, how we think, how logic works, how creative arts work.',
    sr: '',
    author: 'Michael Hawley',
    source: 'Programmers at Work',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa63f3a42fbc6000481ca0d'
  }, {
    _id: '5aa6de2101c2c400048eb9a8',
    en: 'One of the things I’ve been pushing is code reading. I think that is the most useful thing that a community of programmers can do for each other—spend time on a regular basis reading each other’s code.',
    sr: '',
    author: 'Douglas Crockford',
    source: 'Coders at Work',
    numberOfVotes: 3,
    rating: 5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa6de2101c2c400048eb9a8'
  }, {
    _id: '5aa6dd2101c2c400048eb9a7',
    en: 'I think the best way to make JavaScript better would be to\nmake it smaller. If we could just get it down to what it does really well and remove the features that add little or no value, it’s actually a better language.',
    sr: '',
    author: 'Douglas Crockford',
    source: 'Coders at Work',
    numberOfVotes: 1,
    rating: 5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa6dd2101c2c400048eb9a7'
  }, {
    _id: '5aa6e0d101c2c400048eb9a9',
    en: 'Readability of code is now my first priority. It’s more important than being fast, almost as important as being correct, but I think being readable is actually the most likely way of making it correct.',
    sr: '',
    author: 'Douglas Crockford',
    source: 'Coders at Work',
    numberOfVotes: 1,
    rating: 4,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa6e0d101c2c400048eb9a9'
  }, {
    _id: '5aa6e37801c2c400048eb9aa',
    en: 'Part of what makes programming difficult is most of the time we’re doing stuff we’ve never done before.',
    sr: '',
    author: 'Douglas Crockford',
    source: 'Coders at Work',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa6e37801c2c400048eb9aa'
  }, {
    _id: '5aa6e8ac01c2c400048eb9ab',
    en: 'I think of myself as a writer. Sometimes I write in English and sometimes I write in JavaScript.',
    sr: 'Ja mislim o sebi kao piscu. Ponekad pišem na engleskom, a ponekad pišem u JavaScriptu.',
    author: 'Douglas Crockford',
    source: 'Coders at Work',
    numberOfVotes: 1,
    rating: 5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa6e8ac01c2c400048eb9ab'
  }, {
    _id: '5aa63e0642fbc6000481ca0c',
    en: 'People should be able to speak and breathe programs just like they talk now.',
    sr: '',
    author: 'Jaron Lanier',
    source: 'Programmers at Work',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa63e0642fbc6000481ca0c'
  }, {
    _id: '5aa9a89904c8cd0004d472c4',
    en: 'If you start removing things, if you get to the point where if you were to remove anything more it would not work any more — at this point it is beautiful.',
    sr: '',
    author: 'Joe Armstrong (programmer)',
    source: 'Coders at Work',
    numberOfVotes: 1,
    rating: 5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa9a89904c8cd0004d472c4'
  }, {
    _id: '5aa8307a94bd610da89b3340',
    en: 'Humanity is acquiring all the right technology for all the wrong reasons.',
    sr: '',
    author: 'Buckminster Fuller',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa8307a94bd610da89b3340'
  }, {
    _id: '5aa9aa9f04c8cd0004d472c5',
    en: 'I characterize functional programming as a radical and elegant attack on the whole enterprise of writing programs.',
    sr: '',
    author: 'Simon Peyton Jones',
    source: 'Coders at Work',
    numberOfVotes: 1,
    rating: 3.5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa9aa9f04c8cd0004d472c5'
  }, {
    _id: '5aab9d9617c21b0004913edc',
    en: 'Size almost always involves complexity, and complexity confuses programmers. Confused programmers, in turn, introduce mistakes (bugs) into programs.',
    sr: '',
    author: 'Marijn Haverbeke',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aab9d9617c21b0004913edc'
  }, {
    _id: '5aab9ade17c21b0004913edb',
    en: 'Flaws in computer programs are usually called bugs. It makes programmers feel good to imagine them as little things that just happen to crawl into our work. In reality, of course, we put them there ourselves.',
    sr: '',
    author: 'Marijn Haverbeke',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aab9ade17c21b0004913edb'
  }, {
    _id: '5aac2850c2138a00046e9183',
    en: 'When I was at what I would consider the peak of my abilities, I had extremely trustworthy intuition. I would do things and they would just turn out right.',
    sr: '',
    author: 'L. Peter Deutsch',
    source: 'Coders at Work',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aac2850c2138a00046e9183'
  }, {
    _id: '5aac2af1c2138a00046e9185',
    en: 'Every now and then I feel a temptation to design a programming language but then I just lie down until it goes away.',
    sr: '',
    author: 'L. Peter Deutsch',
    source: 'Coders at Work',
    numberOfVotes: 1,
    rating: 5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aac2af1c2138a00046e9185'
  }, {
    _id: '5aac2cf9c2138a00046e9186',
    en: 'Language systems stand on a tripod. There’s the language, there’s the libraries, and there are the tools. And how successful a language is depends on a complex interaction between those three things.',
    sr: '',
    author: 'L. Peter Deutsch',
    source: 'Coders at Work',
    numberOfVotes: 1,
    rating: 4.5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aac2cf9c2138a00046e9186'
  }, {
    _id: '5aac29e1c2138a00046e9184',
    en: 'I would make a strong case that programming languages have not improved qualitatively in the last 40 years. There is no programming language in use today that is qualitatively better than Simula-67.',
    sr: '',
    author: 'L. Peter Deutsch',
    source: 'Coders at Work',
    numberOfVotes: 1,
    rating: 3.5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aac29e1c2138a00046e9184'
  }, {
    _id: '5aac303cc2138a00046e9188',
    en: 'Instead of the progression of tens, I have for many years used the simplest progression of all, which proceeds by twos, having found that it is useful for the perfection of the science of numbers.',
    sr: '',
    author: 'Gottfried Wilhelm Leibniz',
    source: 'EXPLANATION OF BINARY ARITHMETIC',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aac303cc2138a00046e9188'
  }, {
    _id: '5aac2e8fc2138a00046e9187',
    en: 'I never in my wildest dreams would have predicted the evolution of the Internet. And I never would’ve predicted the degree to which corporate influence over the Internet has changed its character over time.',
    sr: '',
    author: 'L. Peter Deutsch',
    source: 'Coders at Work',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aac2e8fc2138a00046e9187'
  }, {
    _id: '5aac3a57610d7d0004066303',
    en: 'I’ve never been a lover of existing code. Code by itself almost rots and it’s gotta be rewritten. Even when nothing has changed, for some reason it rots.',
    sr: 'Nikada nisam bio ljubitelj postojećeg koda. Kod po sebi  truli i treba ga ponovo pisati. Čak i kad se ništa ne promeni, on iz nekog razloga truli.',
    author: 'Ken Thompson',
    source: 'Coders at Work',
    numberOfVotes: 1,
    rating: 4.5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aac3a57610d7d0004066303'
  }, {
    _id: '5aac39b1610d7d0004066302',
    en: 'Modern programming scares me in many respects. It confuses me to read a program which you must read top-down. It says “do something.” And you go find “something.” And you read it and it says, “do something else” and you go find something and it says, “do something else” and it goes back to the top maybe. And nothing gets done. It’s just relegating the problem to a deeper and deeper level.',
    sr: '',
    author: 'Ken Thompson',
    source: 'Coders at Work',
    numberOfVotes: 1,
    rating: 4.5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aac39b1610d7d0004066302'
  }, {
    _id: '5aa9a7b304c8cd0004d472c3',
    en: 'I always spend a day a week learning new stuff. That means I spend 20% more of my time than my colleagues learning new stuff. Now 20% at compound interest means that after four and a half years I will know twice as much as them.',
    sr: '',
    author: 'Richard Hamming',
    source: 'Coders at Work',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa9a7b304c8cd0004d472c3'
  }, {
    _id: '5aad68d17632ba0004ec84ae',
    en: 'I’ll use dirty tricks for two reasons. One is, if it’s really going to give me a performance improvement. Or sometimes just for pure pleasure. In any case, I document it; I don’t just put it in there.',
    sr: '',
    author: 'Donald Knuth',
    source: 'Coders at Work',
    numberOfVotes: 2,
    rating: 4.8,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aad68d17632ba0004ec84ae'
  }, {
    _id: '5aac3aa3610d7d0004066304',
    en: 'I’ll throw away code as soon I want to add something to it and I get the feeling that what I have to do to add it is too hard.',
    sr: '',
    author: 'Ken Thompson',
    source: 'Coders at Work',
    numberOfVotes: 1,
    rating: 5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aac3aa3610d7d0004066304'
  }, {
    _id: '5aad69767632ba0004ec84af',
    en: 'The problem is that coding isn’t fun if all you can do is call things out of a library, if you can’t write the library yourself.',
    sr: '',
    author: 'Donald Knuth',
    source: 'Coders at Work',
    numberOfVotes: 1,
    rating: 5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aad69767632ba0004ec84af'
  }, {
    _id: '5aad6d0d7632ba0004ec84b0',
    en: 'I make mistakes because I’m always operating at my limit. If I only stay in comfortable territory all the time, that’s not so much fun.',
    sr: '',
    author: 'Donald Knuth',
    source: 'Coders at Work',
    numberOfVotes: 1,
    rating: 4.5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aad6d0d7632ba0004ec84b0'
  }, {
    _id: '5aad6dfa7632ba0004ec84b1',
    en: 'I’ve got this need to program. I wake up in the morning with sentences of a literate program. Before breakfast — I’m sure poets must feel this — I have to go to the computer and write this paragraph and then I can eat and I’m happy.',
    sr: '',
    author: 'Donald Knuth',
    source: 'Coders at Work',
    numberOfVotes: 1,
    rating: 3.5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aad6dfa7632ba0004ec84b1'
  }, {
    _id: '5aad71337632ba0004ec84b2',
    en: 'The more varieties of different kinds of notations are still useful — don’t only read the people who code like you.',
    sr: '',
    author: 'Donald Knuth',
    source: 'Coders at Work',
    numberOfVotes: 2,
    rating: 4.3,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aad71337632ba0004ec84b2'
  }, {
    _id: '5ab6e0d632a9950004a2efc2',
    en: 'The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do.',
    sr: '',
    author: 'Ted Nelson',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5ab6e0d632a9950004a2efc2'
  }, {
    _id: '5aa6e99001c2c400048eb9ac',
    en: 'Mathematics is important in programming, but it’s just one of a lot of things that are important. If you overemphasize the math then you underemphasize stuff which might be even more important, such as literacy.',
    sr: '',
    author: 'Douglas Crockford',
    source: 'Coders at Work',
    numberOfVotes: 2,
    rating: 4.5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa6e99001c2c400048eb9ac'
  }, {
    _id: '5aac3b37610d7d0004066305',
    en: 'Documenting is very, very hard; it’s time-consuming. To do it right, you’ve got to do it like programming. You’ve got to deconstruct it, put it together in nice ways, rewrite it when it’s wrong. People don’t do that.',
    sr: '',
    author: 'Ken Thompson',
    source: 'Coders at Work',
    numberOfVotes: 2,
    rating: 4.8,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aac3b37610d7d0004066305'
  }, {
    _id: '5ab6e20132a9950004a2efc6',
    en: 'Making things easy is hard.',
    sr: '',
    author: 'Ted Nelson',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5ab6e20132a9950004a2efc6'
  }, {
    _id: '5ab6e9e132a9950004a2efc7',
    en: 'The difference between theory and practice is that in theory, there is no difference between theory and practice.',
    sr: '',
    author: 'Richard Moore (engineer)',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5ab6e9e132a9950004a2efc7'
  }, {
    _id: '5ab6ea2a32a9950004a2efc8',
    en: 'You should name a variable using the same care with which you name a first-born child.',
    sr: '',
    author: 'Jim Coplien',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5ab6ea2a32a9950004a2efc8'
  }, {
    _id: '5acca81fe01bb40004668819',
    en: 'The ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code.',
    sr: '',
    author: 'Robert C. Martin',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5acca81fe01bb40004668819'
  }, {
    _id: '5b579bb420e9780004ba9ac3',
    en: "There's nothing more permanent than a temporary hack.",
    sr: '',
    author: 'Kyle Simpson',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5b579bb420e9780004ba9ac3'
  }, {
    _id: '5b6d73d6b3f09f0004d9275f',
    en: 'As numbers are reduced to the simplest principles, like 0 and 1, a wonderful order is apparent throughout.',
    sr: '',
    author: 'Gottfried Wilhelm Leibniz',
    source: 'EXPLANATION OF BINARY ARITHMETIC',
    numberOfVotes: 1,
    rating: 5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5b6d73d6b3f09f0004d9275f'
  }, {
    _id: '5ab6e1ad32a9950004a2efc4',
    en: 'In my second year in graduate school, I took a computer course and that was like lightening striking.',
    sr: '',
    author: 'Ted Nelson',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5ab6e1ad32a9950004a2efc4'
  }, {
    _id: '5ab6e13932a9950004a2efc3',
    en: 'They were saying computers deal with numbers. This was absolutely nonsense. Computers deal with arbitrary information of any kind.',
    sr: '',
    author: 'Ted Nelson',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5ab6e13932a9950004a2efc3'
  }, {
    _id: '5ab6e1dd32a9950004a2efc5',
    en: 'Right now you are a prisoner of each application you use. You have only the options that were given you by the developer of that application.',
    sr: '',
    author: 'Ted Nelson',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5ab6e1dd32a9950004a2efc5'
  }, {
    _id: '5a6ce86f2af929789500e83d',
    sr: 'Složenost ubija. Ona isisava život iz developera, čini proizvode teškim za planiranje, pravljenje i testiranje, uvodi bezbednosne izazove i izaziva frustracije korisnika i administratora.',
    en: 'Complexity kills. It sucks the life out of developers, it makes products difficult to plan, build and test, it introduces security challenges and it causes end-user and administrator frustration.',
    author: 'Ray Ozzie',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce86f2af929789500e83d'
  }, {
    _id: '5a6ce8702af929789500e882',
    sr: 'Softver postaje sporiji brže nego što hardver postaje brži.',
    en: 'Software gets slower faster than hardware gets faster.',
    author: 'Niklaus Wirth',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e882'
  }, {
    _id: '5a6ce8702af929789500e89e',
    sr: 'Kompjuter je glupa mašina sa sposobnošću da radi neviđeno pametne stvari, dok je programer pametan čovek sa sposobnošću da radi neviđeno glupe stvari.',
    en: 'A computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match.',
    author: 'David Parnas',
    source: '',
    numberOfVotes: 3,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e89e'
  }, {
    _id: '5a6ce8702af929789500e8c4',
    sr: 'Par meseci pisanja koda može ti uštedeti par sati projektovanja.',
    en: 'A few months writing code can save you a few hours in design.',
    author: 'Anonymous',
    source: null,
    numberOfVotes: 2,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a6ce8702af929789500e8c4'
  }, {
    _id: '5a72f8251ac5f022282e4125',
    sr: 'Da li ste potpuno sigurni da sva ova zvona i praporci, sve ove predivne mogućnosti vaših takozvanih moćnih programskih jezika pripadaju skupu rešenja, a ne skupu problema?',
    en: 'Are you quite sure that all those bells and whistles, all those wonderful facilities of your so called powerful programming languages, belong to the solution set rather than the problem set?',
    author: 'Edsger W. Dijkstra',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a72f8251ac5f022282e4125'
  }, {
    _id: '5a91e3a1c4240c0004265956',
    sr: '',
    en: 'If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.',
    author: 'John von Neumann',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a91e3a1c4240c0004265956'
  }, {
    _id: '5a933a408e7b510004cba4bb',
    sr: '',
    en: 'C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off.',
    author: 'Bjarne Stroustrup',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a933a408e7b510004cba4bb'
  }, {
    _id: '5a933a668e7b510004cba4bc',
    sr: 'Ako misliš da je prosto, nisi razumeo problem.',
    en: "If you think it's simple, then you have misunderstood the problem.",
    author: 'Bjarne Stroustrup',
    source: '',
    numberOfVotes: 2,
    rating: 3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a933a668e7b510004cba4bc'
  }, {
    _id: '5a9342458e7b510004cba4c7',
    sr: 'Objektno-orjentisan dizajn predstavlja rimske brojeve računarstva.',
    en: 'Object-oriented design is the roman numerals of computing.',
    author: 'Rob Pike',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9342458e7b510004cba4c7'
  }, {
    _id: '5a93d61c6a584e0004a4a613',
    sr: '',
    en: "It is hard to think that a $2 billion company with 4,300-plus people couldn't compete with six people in blue jeans.",
    author: 'Steve Jobs',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a93d61c6a584e0004a4a613'
  }, {
    _id: '5a93ffbae49ad10004edb861',
    sr: '',
    en: 'Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’ Now they have two problems.',
    author: 'Jamie Zawinski',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a93ffbae49ad10004edb861'
  }, {
    _id: '5a943255ee7ed5000496b17c',
    sr: '',
    en: 'Sometimes we do get taken by surprise. For example, when the Internet came along, we had it as a fifth or sixth priority.',
    author: 'Bill Gates',
    source: '',
    numberOfVotes: 1,
    rating: 2,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943255ee7ed5000496b17c'
  }, {
    _id: '5a9432f0ee7ed5000496b180',
    sr: '',
    en: "It was a turning point in my programming career when I realized that I didn't have to win every argument.",
    author: 'Ward Cunningham',
    source: '',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9432f0ee7ed5000496b180'
  }, {
    _id: '5a9435b6ee7ed5000496b18f',
    sr: '',
    en: 'And programming computers was so fascinating. You create your own little universe, and then it does what you tell it to do.',
    author: 'Vint Cerf',
    source: '',
    numberOfVotes: 4,
    rating: 3.7,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9435b6ee7ed5000496b18f'
  }, {
    _id: '5a943552ee7ed5000496b18d',
    sr: '',
    en: "The cleaner and nicer the program, the faster it's going to run. And if it doesn't, it'll be easy to make it fast.",
    author: 'Joshua Bloch',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a943552ee7ed5000496b18d'
  }, {
    _id: '5a9436dcee7ed5000496b194',
    sr: '',
    en: "SQL, Lisp, and Haskell are the only programming languages that I've seen where one spends more time thinking than typing.",
    author: 'Philip Greenspun',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9436dcee7ed5000496b194'
  }, {
    _id: '5a95a610cb1a4d0004b2987e',
    sr: '',
    en: 'It is better to have 100 functions operate on one data structure than to have 10 functions operate on 10 data structures.',
    author: 'Alan Perlis',
    source: '',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95a610cb1a4d0004b2987e'
  }, {
    _id: '5a95d1077700780004d51db9',
    sr: '',
    en: 'The most effective debugging tool is still careful thought, coupled with judiciously placed print statements.',
    author: 'Brian Kernighan',
    source: '',
    numberOfVotes: 3,
    rating: 3.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d1077700780004d51db9'
  }, {
    _id: '5a95d7637700780004d51dc5',
    sr: '',
    en: 'Computer languages of the future will be more concerned with goals and less with procedures specified by the programmer.',
    author: 'Marvin Minsky',
    source: '',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95d7637700780004d51dc5'
  }, {
    _id: '5a95fe167700780004d51dcd',
    sr: '',
    en: 'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.',
    author: 'Alan Turing',
    source: '',
    numberOfVotes: 3,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a95fe167700780004d51dcd'
  }, {
    _id: '5a96be3ed6959500047aecbd',
    sr: '',
    en: 'The way to arrest entropy in software is to refactor it.',
    author: 'Joseph Yoder (computer scientist)',
    source: 'Brian Foote and Joseph Yoder, Big Ball of Mud',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96be3ed6959500047aecbd'
  }, {
    _id: '5a96bf21d6959500047aecc0',
    sr: '',
    en: "Reviews and pair programming provide programmers with something their work would not otherwise have: an audience. Sunlight, it is said is a powerful disinfectant. An immediate audience of one's peers provides immediate incentives to programmers to keep their code clear and comprehensible, as well as functional.",
    author: 'Joseph Yoder (computer scientist)',
    source: 'Brian Foote and Joseph Yoder, Big Ball of Mud',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a96bf21d6959500047aecc0'
  }, {
    _id: '5a97f2c0ccdfe50004febf38',
    sr: '',
    en: "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.",
    author: 'John Romero',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97f2c0ccdfe50004febf38'
  }, {
    _id: '5a97f4c5ccdfe50004febf3c',
    sr: '',
    en: "JavaScript is the only language that I'm aware of that people feel they don't need to learn before they start using it.",
    author: 'Douglas Crockford',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a97f4c5ccdfe50004febf3c'
  }, {
    _id: '5a9808951878b40004879f61',
    sr: '',
    en: 'Be humble, communicate clearly, and respect others. It costs nothing to be kind, but the impact is priceless.',
    author: 'Addy Osmani',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9808951878b40004879f61'
  }, {
    _id: '5a9808dc1878b40004879f63',
    sr: '',
    en: "Telling a programmer there's already a library to do X is like telling a songwriter there's already a song about love.",
    author: 'Pete Cordell',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9808dc1878b40004879f63'
  }, {
    _id: '5a980f551878b40004879f68',
    sr: '',
    en: 'Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration.',
    author: 'Stan Kelly-Bootle',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a980f551878b40004879f68'
  }, {
    _id: '5a985fd2e93441000489b94d',
    sr: '',
    en: 'The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise.',
    author: 'Edsger W. Dijkstra',
    source: '',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a985fd2e93441000489b94d'
  }, {
    _id: '5a9a9e792bad9600044b6fb5',
    sr: '',
    en: "There certainly will be job disruption. Because what's going to happen is robots will be able to do everything better than us.",
    author: 'Elon Musk',
    source: '',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9a9e792bad9600044b6fb5'
  }, {
    _id: '5a9860dbe93441000489b950',
    sr: '',
    en: 'Sometimes, the elegant implementation is a function. Not a method. Not a class. Not a framework. Just a function.',
    author: 'John Carmack',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9860dbe93441000489b950'
  }, {
    _id: '5a9aa0f72bad9600044b6fb8',
    sr: '',
    en: 'Artificial intelligence is the science of making machines do things that would require intelligence if done by men.',
    author: 'Marvin Minsky',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9aa0f72bad9600044b6fb8'
  }, {
    _id: '5a9aaf682bad9600044b6fbb',
    sr: '',
    en: 'I just had to take the hypertext idea and connect it to the TCP and DNS ideas and — ta-da!— the World Wide Web.',
    author: 'Tim Berners-Lee',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9aaf682bad9600044b6fbb'
  }, {
    _id: '5a9b0d552bad9600044b6fd4',
    sr: '',
    en: "A computational process is indeed much like a sorcerer's idea of a spirit. It cannot be seen or touched. It is not composed of matter at all. However, it is very real. It can perform intellectual work. It can answer questions. It can affect the world by disbursing money at a bank or by controlling a robot arm in a factory.",
    author: 'Hal Abelson',
    source: 'Structure and Interpretation of Computer Programs',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b0d552bad9600044b6fd4'
  }, {
    _id: '5a9b17792bad9600044b6fe5',
    sr: '',
    en: 'One must assume that there will be lots of bugs, and plan an orderly procedure for snaking them out.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b17792bad9600044b6fe5'
  }, {
    _id: '5a9b19662bad9600044b6ff1',
    sr: '',
    en: 'To achieve conceptual integrity, a design must proceed from one mind or a small group of agreeing minds.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b19662bad9600044b6ff1'
  }, {
    _id: '5a9b1d152bad9600044b6ff9',
    sr: '',
    en: 'The very best technology never has as much impact as girlfriend or boyfriend trouble.',
    author: 'Tom DeMarco',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 1,
    rating: 3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b1d152bad9600044b6ff9'
  }, {
    _id: '5a9b19952bad9600044b6ff3',
    sr: '',
    en: 'Maintenance cost is strongly affected by the number of users. More users find more bugs.',
    author: 'Fred Brooks',
    source: 'The Mythical Man-Month',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b19952bad9600044b6ff3'
  }, {
    _id: '5a9b1f8c2bad9600044b7003',
    sr: '',
    en: 'Most errors are introduced during requirements specification!',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 2,
    rating: 4.3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b1f8c2bad9600044b7003'
  }, {
    _id: '5a9b21892bad9600044b7006',
    sr: '',
    en: 'Programming is similar to a game of golf. The point is not getting the ball in the hole but how many strokes it takes.',
    author: 'Harlan Mills',
    source: '',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b21892bad9600044b7006'
  }, {
    _id: '5a9b22b42bad9600044b700a',
    sr: '',
    en: 'A number of studies have shown testing not very effective at finding bugs.',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 2,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b22b42bad9600044b700a'
  }, {
    _id: '5a9b23cd2bad9600044b7010',
    sr: '',
    en: 'The key to keeping software costs down is to write code that is easily modified.',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 1,
    rating: 3.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b23cd2bad9600044b7010'
  }, {
    _id: '5a9b24492bad9600044b7014',
    sr: '',
    en: 'The notions of correctness in mathematics and programs are different. A mathematical model must be consistent; it need not match reality (be correct), and it need not be complete (in the formal sense). A program model must be consistent; it must match reality; and it must be complete (in the sense that it reacts gracefully to all inputs).',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 2,
    rating: 3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b24492bad9600044b7014'
  }, {
    _id: '5a9b23ed2bad9600044b7012',
    sr: '',
    en: 'Programming is at least as difficult as developing a mathematical theory.',
    author: 'Daniel T. Barry',
    source: 'Myths and Realities in Software Development',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9b23ed2bad9600044b7012'
  }, {
    _id: '5a9d2fc8607c5100044dff78',
    sr: '',
    en: 'In 1971 when I joined the staff of the MIT Artificial Intelligence lab, all of us who helped develop the operating system software, we called ourselves hackers. We were not breaking any laws, at least not in doing the hacking we were paid to do. We were developing software and we were having fun. Hacking refers to the spirit of fun in which we were developing software.',
    author: 'Richard Stallman',
    source: '',
    numberOfVotes: 2,
    rating: 4.8,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9d2fc8607c5100044dff78'
  }, {
    _id: '5a9dc6316744730004f6a1e7',
    sr: '',
    en: 'By June 1949 people had begun to realize that it was not so easy to get programs right as at one time appeared.',
    author: 'Maurice Wilkes',
    source: '',
    numberOfVotes: 0,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5a9dc6316744730004f6a1e7'
  }, {
    _id: '5aa28dd71dcf530004c4bf66',
    sr: '',
    en: 'Everything should be made as simple as possible. But to do that you have to master complexity.',
    author: 'Butler Lampson',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa28dd71dcf530004c4bf66'
  }, {
    _id: '5aa29df5e7e86700048f027d',
    sr: '',
    en: 'If I had followed my heart instead of advice, dBASE would be much closer to perfection today.',
    author: 'Wayne Ratliff',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa29df5e7e86700048f027d'
  }, {
    _id: '5aa29e43e7e86700048f027e',
    sr: '',
    en: "Programming is a little bit like the army. Now that I'm out, it's neat to have had the experience.",
    author: 'Wayne Ratliff',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 3,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa29e43e7e86700048f027e'
  }, {
    _id: '5aa2a20ce7e86700048f0282',
    sr: '',
    en: "I don't like using any tools or programs I didn't write myself or that I don't have some control over.",
    author: 'Jonathan Sachs',
    source: 'Programmers at Work',
    numberOfVotes: 0,
    rating: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa2a20ce7e86700048f0282'
  }, {
    _id: '5aa2a15fe7e86700048f0281',
    sr: '',
    en: 'If you cannot explain a program to yourself, the chance of the\ncomputer getting it right is pretty small.',
    author: 'Bob Frankston',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa2a15fe7e86700048f0281'
  }, {
    _id: '5aa45ab57832df00040ac9bd',
    sr: '',
    en: "I don't comment on the code itself because I feel that properly written code is very much self-documented.",
    author: 'Gary Kildall',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa45ab57832df00040ac9bd'
  }, {
    _id: '5aa45bcf7832df00040ac9be',
    sr: '',
    en: 'When a program is clean and neat, nicely structured, and consistent, it can be beautiful.',
    author: 'Gary Kildall',
    source: 'Programmers at Work',
    numberOfVotes: 1,
    rating: 4.5,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa45bcf7832df00040ac9be'
  }, {
    _id: '5aa6db5d01c2c400048eb9a6',
    en: 'JavaScript, purely by accident, has become the most popular programming language in the world.',
    sr: '',
    author: 'Douglas Crockford',
    source: 'Coders at Work',
    numberOfVotes: 0,
    rating: 5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aa6db5d01c2c400048eb9a6'
  }, {
    _id: '5aac2669c2138a00046e9182',
    en: 'Software is a discipline of detail, and that is a deep, horrendous fundamental problem with software.',
    sr: '',
    author: 'L. Peter Deutsch',
    source: 'Coders at Work',
    numberOfVotes: 0,
    rating: 3.5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aac2669c2138a00046e9182'
  }, {
    _id: '5aac309cc2138a00046e9189',
    en: 'Even in the games of children there are things to interest the greatest mathematician.',
    sr: '',
    author: 'Gottfried Wilhelm Leibniz',
    source: '',
    numberOfVotes: 1,
    rating: 4.5,
    __v: 0,
    addedBy: '5ab04d928c8b4e3cbf733557',
    id: '5aac309cc2138a00046e9189'
  }];
}

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

 // styles

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
};
const paragraphStyles = {
  marginBottom: 48
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4
}; // markup

const NotFoundPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    style: pageStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Not found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    style: headingStyles
  }, "Page not found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: paragraphStyles
  }, "Sorry", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    role: "img",
    "aria-label": "Pensive emoji"
  }, "\uD83D\uDE14"), " ", "we couldn\u2019t find what you were looking for.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),  true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Try creating a page in ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
    style: codeStyles
  }, "src/pages/"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)) : 0, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Go home"), "."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_717708846_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/717708846.json */ "./public/page-data/sq/d/717708846.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var node_emoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-emoji */ "./node_modules/node-emoji/index.js");
/* harmony import */ var node_emoji__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_emoji__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layouts/main */ "./src/components/layouts/main.js");
/* harmony import */ var _reducers_quoteReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/quoteReducer */ "./src/reducers/quoteReducer.js");
/* harmony import */ var _helpers_quotes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/quotes */ "./src/helpers/quotes.js");






 // markup

const IndexPage = () => {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_quoteReducer__WEBPACK_IMPORTED_MODULE_5__.reducer, _reducers_quoteReducer__WEBPACK_IMPORTED_MODULE_5__.initialState);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch({
      type: 'SET_QUOTES',
      payload: {
        quotes: (0,_helpers_quotes__WEBPACK_IMPORTED_MODULE_6__.default)()
      }
    });
    dispatch({
      type: 'SET_QUOTE'
    });
  }, []);

  const getNewQuote = e => {
    e.target.classList.add('refreshQuoteAnimate');
    setTimeout(() => {
      e.target.classList.remove('refreshQuoteAnimate');
    }, 1000);
    dispatch({
      type: 'SET_QUOTE'
    });
  };

  const makeLink = slug => {
    return `/post/${slug}`;
  };

  const {
    quote,
    author
  } = state;

  const formatDate = function (timestamp) {
    // Create a date object from the timestamp
    var date = new Date(timestamp); // Create a list of names for the months

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // return a formatted date

    return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  };

  const addDays = function (date, days) {
    date.setDate(date.getDate() + days);
    return date;
  };

  const {
    posts: {
      nodes: allPosts
    }
  } = _public_page_data_sq_d_717708846_json__WEBPACK_IMPORTED_MODULE_0__.data;

  const returnTags = tags => {
    const listItems = tags.map(tag => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, tag));
    return listItems;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_layouts_main__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "I'm a software engineer working in Las Vegas, Nevada. I love", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    target: "_blank",
    rel: "noreferrer"
  }, "Javascript"), ",", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: "https://www.ruby-lang.org/en/",
    target: "_blank",
    rel: "noreferrer"
  }, "Ruby"), ", and currently learning to love", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: "https://www.rust-lang.org/",
    target: "_blank",
    rel: "noreferrer"
  }, "Rust"), ". I use my personal site to mess around with various", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks",
    target: "_blank",
    rel: "noreferrer"
  }, "Javascript frameworks"), ' ', "and APIs. Right now, this site is a", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: "https://www.gatsbyjs.com/",
    target: "_blank",
    rel: "noreferrer"
  }, "Gatsby (React)"), ' ', "application using", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: "https://graphcms.com/",
    target: "_blank",
    rel: "noreferrer"
  }, "GraphCMS"), ". Thanks for stopping by. ", node_emoji__WEBPACK_IMPORTED_MODULE_3___default().emojify(':call_me_hand:'), ' ', node_emoji__WEBPACK_IMPORTED_MODULE_3___default().emojify(':smile:')), quote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "quoteTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h6", null, "Random Quote on Programming"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "refreshQuote",
    role: "none",
    onClick: getNewQuote
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("blockquote", null, quote, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("cite", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: `https://www.google.com/search?q="${author.replace(/ /g, '+')}"`,
    target: "_blank",
    rel: "noreferrer"
  }, author)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Journal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "articles"
  }, allPosts.map(post => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: makeLink(post.slug),
    key: post.slug
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "postDate"
  }, formatDate(addDays(new Date(post.date), 1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", {
    style: {
      marginTop: 0,
      marginBottom: '10px'
    }
  }, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "postExerpt"
  }, post.excerpt), post.tags.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "tags"
  }, returnTags(post.tags)))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/reducers/quoteReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/quoteReducer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

const initialState = {
  quotes: [],
  quote: null,
  author: ''
};
const reducer = (state, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case 'SET_QUOTES':
      return { ...state,
        quotes: payload.quotes
      };

    case 'SET_QUOTE':
      const {
        en: quote,
        author
      } = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.returnRandomArrayItem)(state.quotes);
      return { ...state,
        quote,
        author
      };

    default:
      throw new Error();
  }
};

/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "Location": () => (/* binding */ Location),
/* harmony export */   "LocationProvider": () => (/* binding */ LocationProvider),
/* harmony export */   "Match": () => (/* binding */ Match),
/* harmony export */   "Redirect": () => (/* binding */ Redirect),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "ServerLocation": () => (/* binding */ ServerLocation),
/* harmony export */   "createHistory": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.createHistory),
/* harmony export */   "createMemorySource": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.createMemorySource),
/* harmony export */   "isRedirect": () => (/* binding */ isRedirect),
/* harmony export */   "navigate": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.navigate),
/* harmony export */   "redirectTo": () => (/* binding */ redirectTo),
/* harmony export */   "globalHistory": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory),
/* harmony export */   "matchPath": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_4__.match),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useNavigate": () => (/* binding */ useNavigate),
/* harmony export */   "useParams": () => (/* binding */ useParams),
/* harmony export */   "useMatch": () => (/* binding */ useMatch),
/* harmony export */   "BaseContext": () => (/* binding */ BaseContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lifecycles-compat */ "./.cache/react-lifecycles-compat.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/utils */ "./node_modules/@gatsbyjs/reach-router/es/lib/utils.js");
/* harmony import */ var _lib_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/history */ "./node_modules/@gatsbyjs/reach-router/es/lib/history.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content */







////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultValue);
  Ctx.displayName = name;
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var Location = function Location(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        LocationProvider,
        null,
        children
      );
    }
  );
};

var LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();
    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory
};
 true ? LocationProvider.propTypes = {
  history: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
} : 0;
var ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;

  var searchIndex = url.indexOf("?");
  var searchExists = searchIndex > -1;
  var pathname = void 0;
  var search = "";
  var hash = "";

  if (searchExists) {
    pathname = url.substring(0, searchIndex);
    search = url.substring(searchIndex);
  } else {
    pathname = url;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    LocationContext.Provider,
    {
      value: {
        location: {
          pathname: pathname,
          search: search,
          hash: hash
        },
        navigate: function navigate() {
          throw new Error("You can't call navigate on the server.");
        }
      }
    },
    children
  );
};
////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = createNamedContext("Base", {
  baseuri: "/",
  basepath: "/",
  navigate: _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory.navigate
});

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var Router = function Router(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RouterImpl, _extends({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = react__WEBPACK_IMPORTED_MODULE_0___default().Children.toArray(children).reduce(function (array, child) {
      var routes = createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;


    var match = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.pick)(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = _extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, uri), options);
        }
      });

      var clone = react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(element, props, element.props.children ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Router,
        { location: location, primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? _extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        BaseContext.Provider,
        {
          value: { baseuri: uri, basepath: basepath, navigate: props.navigate }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FocusHandlerImpl, _extends({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return _extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return _extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      Comp,
      _extends({
        style: _extends({ outline: "none" }, style),
        tabIndex: "-1",
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__.polyfill)(FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = (react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef);

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
          var encodedHref = encodeURI(href);
          var isCurrent = location.pathname === encodedHref;
          var isPartiallyCurrent = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.startsWith)(location.pathname, encodedHref);

          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", _extends({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                var shouldReplace = replace;
                if (typeof replace !== "boolean" && isCurrent) {
                  var _location$state = _extends({}, location.state),
                      key = _location$state.key,
                      restState = _objectWithoutProperties(_location$state, ["key"]);

                  shouldReplace = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.shallowCompare)(_extends({}, state), restState);
                }
                navigate(href, {
                  state: state,
                  replace: shouldReplace
                });
              }
            }
          }));
        }
      );
    }
  );
});

Link.displayName = "Link";

 true ? Link.propTypes = {
  to: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
} : 0;

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
      navigate((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.insertParams)(resolvedTo, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
    if (!noThrow) redirectTo((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.insertParams)(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Redirect = function Redirect(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref7) {
      var baseuri = _ref7.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RedirectImpl, _extends({}, locationContext, { baseuri: baseuri }, props));
        }
      );
    }
  );
};

 true ? Redirect.propTypes = {
  from: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  to: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
} : 0;

////////////////////////////////////////////////////////////////////////////////
var Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref9) {
      var baseuri = _ref9.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (_ref10) {
          var navigate = _ref10.navigate,
              location = _ref10.location;

          var resolvedPath = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(path, baseuri);
          var result = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(resolvedPath, location.pathname);
          return children({
            navigate: navigate,
            location: location,
            match: result ? _extends({}, result.params, {
              uri: result.uri,
              path: path
            }) : null
          });
        }
      );
    }
  );
};

////////////////////////////////////////////////////////////////////////////////
// Hooks

var useLocation = function useLocation() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var useNavigate = function useNavigate() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var useParams = function useParams() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var results = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(context.basepath, location.pathname);

  return results ? results.params : null;
};

var useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var resolvedPath = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(path, context.baseuri);
  var result = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(resolvedPath, location.pathname);
  return result ? _extends({}, result.params, {
    uri: result.uri,
    path: path
  }) : null;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment) && element.props.children) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(element.props.children, createRoute(basepath));
    }
    !(element.props.path || element.props.default || element.type === Redirect) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Router>: Children of <Router> must have a `path` or `default` prop, or be a `<Redirect>`. None found on element type `" + element.type + "`") : 0 : void 0;

    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Redirect from=\"" + element.props.from + "\" to=\"" + element.props.to + "\"/> requires both \"from\" and \"to\" props when inside a <Router>.") : 0 : void 0;

    !!(element.type === Redirect && !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.validateRedirect)(element.props.from, element.props.to)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Redirect from=\"" + element.props.from + " to=\"" + element.props.to + "\"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.") : 0 : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "development";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/lodash.toarray/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.toarray/index.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    iteratorSymbol = Symbol ? Symbol.iterator : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
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
  return !!value && (type == 'object' || type == 'function');
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
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (iteratorSymbol && value[iteratorSymbol]) {
    return iteratorToArray(value[iteratorSymbol]());
  }
  var tag = getTag(value),
      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

  return func(value);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

module.exports = toArray;


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

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
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUniq.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    noop = __webpack_require__(/*! ./noop */ "./node_modules/lodash/noop.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

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

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/concat.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/concat.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
      array = arguments[0],
      index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}

module.exports = concat;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

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

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

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

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

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

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/uniqBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/uniqBy.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js");

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/node-emoji/index.js":
/*!******************************************!*\
  !*** ./node_modules/node-emoji/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/emoji */ "./node_modules/node-emoji/lib/emoji.js");

/***/ }),

/***/ "./node_modules/node-emoji/lib/emoji.js":
/*!**********************************************!*\
  !*** ./node_modules/node-emoji/lib/emoji.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*jslint node: true*/
var toArray = __webpack_require__(/*! lodash.toarray */ "./node_modules/lodash.toarray/index.js");
var emojiByName = __webpack_require__(/*! ./emoji.json */ "./node_modules/node-emoji/lib/emoji.json");

"use strict";

/**
 * regex to parse emoji in a string - finds emoji, e.g. :coffee:
 */
var emojiNameRegex = /:([a-zA-Z0-9_\-\+]+):/g;

/**
 * regex to trim whitespace
 * use instead of String.prototype.trim() for IE8 support
 */
var trimSpaceRegex = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

/**
 * Removes colons on either side
 * of the string if present
 * @param  {string} str
 * @return {string}
 */
function stripColons (str) {
  var colonIndex = str.indexOf(':');
  if (colonIndex > -1) {
    // :emoji: (http://www.emoji-cheat-sheet.com/)
    if (colonIndex === str.length - 1) {
      str = str.substring(0, colonIndex);
      return stripColons(str);
    } else {
      str = str.substr(colonIndex + 1);
      return stripColons(str);
    }
  }

  return str;
}

/**
 * Adds colons to either side
 * of the string
 * @param {string} str
 * @return {string}
 */
function wrapColons (str) {
  return (typeof str === 'string' && str.length > 0) ? ':' + str + ':' : str;
}

/**
 * Ensure that the word is wrapped in colons
 * by only adding them, if they are not there.
 * @param {string} str
 * @return {string}
 */
function ensureColons (str) {
  return (typeof str === 'string' && str[0] !== ':') ? wrapColons(str) : str;
}

// Non spacing mark, some emoticons have them. It's the 'Variant Form',
// which provides more information so that emoticons can be rendered as
// more colorful graphics. FE0E is a unicode text version, where as FE0F
// should be rendered as a graphical version. The code gracefully degrades.
var NON_SPACING_MARK = String.fromCharCode(65039); // 65039 - '️' - 0xFE0F;
var nonSpacingRegex = new RegExp(NON_SPACING_MARK, 'g')

// Remove the non-spacing-mark from the code, never send a stripped version
// to the client, as it kills graphical emoticons.
function stripNSB (code) {
  return code.replace(nonSpacingRegex, '');
};

// Reversed hash table, where as emojiByName contains a { heart: '❤' }
// dictionary emojiByCode contains { ❤: 'heart' }. The codes are normalized
// to the text version.
var emojiByCode = Object.keys(emojiByName).reduce(function(h,k) {
  h[stripNSB(emojiByName[k])] = k;
  return h;
}, {});

/**
 * Emoji namespace
 */
var Emoji = {
  emoji: emojiByName,
};

/**
 * get emoji code from name
 * @param  {string} emoji
 * @return {string}
 */
Emoji._get = function _get (emoji) {
  if (emojiByName.hasOwnProperty(emoji)) {
    return emojiByName[emoji];
  }

  return ensureColons(emoji);
};

/**
 * get emoji code from :emoji: string or name
 * @param  {string} emoji
 * @return {string}
 */
Emoji.get = function get (emoji) {
  emoji = stripColons(emoji);

  return Emoji._get(emoji);
};

/**
 * find the emoji by either code or name
 * @param {string} nameOrCode The emoji to find, either `coffee`, `:coffee:` or `☕`;
 * @return {object}
 */
Emoji.find = function find (nameOrCode) {
  return Emoji.findByName(nameOrCode) || Emoji.findByCode(nameOrCode);
};

/**
 * find the emoji by name
 * @param {string} name The emoji to find either `coffee` or `:coffee:`;
 * @return {object}
 */
Emoji.findByName = function findByName (name) {
  var stripped = stripColons(name);
  var emoji = emojiByName[stripped];

  return emoji ? ({ emoji: emoji, key: stripped }) : undefined;
};

/**
 * find the emoji by code (emoji)
 * @param {string} code The emoji to find; for example `☕` or `☔`
 * @return {object}
 */
Emoji.findByCode = function findByCode (code) {
  var stripped = stripNSB(code);
  var name = emojiByCode[stripped];

  // lookup emoji to ensure the Variant Form is returned
  return name ? ({ emoji: emojiByName[name], key: name }) : undefined;
};


/**
 * Check if an emoji is known by this library
 * @param {string} nameOrCode The emoji to validate, either `coffee`, `:coffee:` or `☕`;
 * @return {object}
 */
Emoji.hasEmoji = function hasEmoji (nameOrCode) {
  return Emoji.hasEmojiByName(nameOrCode) || Emoji.hasEmojiByCode(nameOrCode);
};

/**
 * Check if an emoji with given name is known by this library
 * @param {string} name The emoji to validate either `coffee` or `:coffee:`;
 * @return {object}
 */
Emoji.hasEmojiByName = function hasEmojiByName (name) {
  var result = Emoji.findByName(name);
  return !!result && result.key === stripColons(name);
};

/**
 * Check if a given emoji is known by this library
 * @param {string} code The emoji to validate; for example `☕` or `☔`
 * @return {object}
 */
Emoji.hasEmojiByCode = function hasEmojiByCode (code) {
  var result = Emoji.findByCode(code);
  return !!result && stripNSB(result.emoji) === stripNSB(code);
};

/**
 * get emoji name from code
 * @param  {string} emoji
 * @param  {boolean} includeColons should the result include the ::
 * @return {string}
 */
Emoji.which = function which (emoji_code, includeColons) {
  var code = stripNSB(emoji_code);
  var word = emojiByCode[code];

  return includeColons ? wrapColons(word) : word;
};

/**
 * emojify a string (replace :emoji: with an emoji)
 * @param  {string} str
 * @param  {function} on_missing (gets emoji name without :: and returns a proper emoji if no emoji was found)
 * @param  {function} format (wrap the returned emoji in a custom element)
 * @return {string}
 */
Emoji.emojify = function emojify (str, on_missing, format) {
  if (!str) return '';

  return str.split(emojiNameRegex) // parse emoji via regex
            .map(function parseEmoji(s, i) {
              // every second element is an emoji, e.g. "test :fast_forward:" -> [ "test ", "fast_forward" ]
              if (i % 2 === 0) return s;
              var emoji = Emoji._get(s);
              var isMissing = emoji.indexOf(':') > -1;

              if (isMissing && typeof on_missing === 'function') {
                return on_missing(s);
              }

              if (!isMissing && typeof format === 'function') {
                return format(emoji, s);
              }

              return emoji;
            })
            .join('') // convert back to string
  ;
};

/**
 * return a random emoji
 * @return {string}
 */
Emoji.random = function random () {
  var emojiKeys = Object.keys(emojiByName);
  var randomIndex = Math.floor(Math.random() * emojiKeys.length);
  var key = emojiKeys[randomIndex];
  var emoji = Emoji._get(key);
  return { key: key, emoji: emoji };
}

/**
 *  return an collection of potential emoji matches
 *  @param {string} str
 *  @return {Array.<Object>}
 */
Emoji.search = function search (str) {
  var emojiKeys = Object.keys(emojiByName);
  var matcher = stripColons(str)
  var matchingKeys = emojiKeys.filter(function(key) {
    return key.toString().indexOf(matcher) === 0;
  });
  return matchingKeys.map(function(key) {
    return {
      key: key,
      emoji: Emoji._get(key),
    };
  });
}

/**
 * unemojify a string (replace emoji with :emoji:)
 * @param  {string} str
 * @return {string}
 */
Emoji.unemojify = function unemojify (str) {
  if (!str) return '';
  var words = toArray(str);

  return words.map(function(word) {
    return Emoji.which(word, true) || word;
  }).join('');
};

/**
 * replace emojis with replacement value
 * @param {string} str
 * @param {function|string} the string or callback function to replace the emoji with
 * @param {boolean} should trailing whitespaces be cleaned? Defaults false
 * @return {string}
 */
Emoji.replace = function replace (str, replacement, cleanSpaces) {
  if (!str) return '';

  var replace = typeof replacement === 'function' ? replacement : function() { return replacement; };
  var words = toArray(str);

  var replaced = words.map(function(word, idx) {
    var emoji = Emoji.findByCode(word);
    
    if (emoji && cleanSpaces && words[idx + 1] === ' ') {
      words[idx + 1] = '';
    }

    return emoji ? replace(emoji) : word;
  }).join('');

  return cleanSpaces ? replaced.replace(trimSpaceRegex, '') : replaced;
};


/**
 * remove all emojis from a string
 * @param {string} str
 * @return {string}
 */
Emoji.strip = function strip (str) {
  return Emoji.replace(str, '', true);
};

module.exports = Emoji;


/***/ }),

/***/ "./node_modules/node-emoji/lib/emoji.json":
/*!************************************************!*\
  !*** ./node_modules/node-emoji/lib/emoji.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"100":"💯","1234":"🔢","umbrella_with_rain_drops":"☔","coffee":"☕","aries":"♈","taurus":"♉","sagittarius":"♐","capricorn":"♑","aquarius":"♒","pisces":"♓","anchor":"⚓","white_check_mark":"✅","sparkles":"✨","question":"❓","grey_question":"❔","grey_exclamation":"❕","exclamation":"❗","heavy_exclamation_mark":"❗","heavy_plus_sign":"➕","heavy_minus_sign":"➖","heavy_division_sign":"➗","hash":"#️⃣","keycap_star":"*️⃣","zero":"0️⃣","one":"1️⃣","two":"2️⃣","three":"3️⃣","four":"4️⃣","five":"5️⃣","six":"6️⃣","seven":"7️⃣","eight":"8️⃣","nine":"9️⃣","copyright":"©️","registered":"®️","mahjong":"🀄","black_joker":"🃏","a":"🅰️","b":"🅱️","o2":"🅾️","parking":"🅿️","ab":"🆎","cl":"🆑","cool":"🆒","free":"🆓","id":"🆔","new":"🆕","ng":"🆖","ok":"🆗","sos":"🆘","up":"🆙","vs":"🆚","flag-ac":"🇦🇨","flag-ad":"🇦🇩","flag-ae":"🇦🇪","flag-af":"🇦🇫","flag-ag":"🇦🇬","flag-ai":"🇦🇮","flag-al":"🇦🇱","flag-am":"🇦🇲","flag-ao":"🇦🇴","flag-aq":"🇦🇶","flag-ar":"🇦🇷","flag-as":"🇦🇸","flag-at":"🇦🇹","flag-au":"🇦🇺","flag-aw":"🇦🇼","flag-ax":"🇦🇽","flag-az":"🇦🇿","flag-ba":"🇧🇦","flag-bb":"🇧🇧","flag-bd":"🇧🇩","flag-be":"🇧🇪","flag-bf":"🇧🇫","flag-bg":"🇧🇬","flag-bh":"🇧🇭","flag-bi":"🇧🇮","flag-bj":"🇧🇯","flag-bl":"🇧🇱","flag-bm":"🇧🇲","flag-bn":"🇧🇳","flag-bo":"🇧🇴","flag-bq":"🇧🇶","flag-br":"🇧🇷","flag-bs":"🇧🇸","flag-bt":"🇧🇹","flag-bv":"🇧🇻","flag-bw":"🇧🇼","flag-by":"🇧🇾","flag-bz":"🇧🇿","flag-ca":"🇨🇦","flag-cc":"🇨🇨","flag-cd":"🇨🇩","flag-cf":"🇨🇫","flag-cg":"🇨🇬","flag-ch":"🇨🇭","flag-ci":"🇨🇮","flag-ck":"🇨🇰","flag-cl":"🇨🇱","flag-cm":"🇨🇲","cn":"🇨🇳","flag-cn":"🇨🇳","flag-co":"🇨🇴","flag-cp":"🇨🇵","flag-cr":"🇨🇷","flag-cu":"🇨🇺","flag-cv":"🇨🇻","flag-cw":"🇨🇼","flag-cx":"🇨🇽","flag-cy":"🇨🇾","flag-cz":"🇨🇿","de":"🇩🇪","flag-de":"🇩🇪","flag-dg":"🇩🇬","flag-dj":"🇩🇯","flag-dk":"🇩🇰","flag-dm":"🇩🇲","flag-do":"🇩🇴","flag-dz":"🇩🇿","flag-ea":"🇪🇦","flag-ec":"🇪🇨","flag-ee":"🇪🇪","flag-eg":"🇪🇬","flag-eh":"🇪🇭","flag-er":"🇪🇷","es":"🇪🇸","flag-es":"🇪🇸","flag-et":"🇪🇹","flag-eu":"🇪🇺","flag-fi":"🇫🇮","flag-fj":"🇫🇯","flag-fk":"🇫🇰","flag-fm":"🇫🇲","flag-fo":"🇫🇴","fr":"🇫🇷","flag-fr":"🇫🇷","flag-ga":"🇬🇦","gb":"🇬🇧","uk":"🇬🇧","flag-gb":"🇬🇧","flag-gd":"🇬🇩","flag-ge":"🇬🇪","flag-gf":"🇬🇫","flag-gg":"🇬🇬","flag-gh":"🇬🇭","flag-gi":"🇬🇮","flag-gl":"🇬🇱","flag-gm":"🇬🇲","flag-gn":"🇬🇳","flag-gp":"🇬🇵","flag-gq":"🇬🇶","flag-gr":"🇬🇷","flag-gs":"🇬🇸","flag-gt":"🇬🇹","flag-gu":"🇬🇺","flag-gw":"🇬🇼","flag-gy":"🇬🇾","flag-hk":"🇭🇰","flag-hm":"🇭🇲","flag-hn":"🇭🇳","flag-hr":"🇭🇷","flag-ht":"🇭🇹","flag-hu":"🇭🇺","flag-ic":"🇮🇨","flag-id":"🇮🇩","flag-ie":"🇮🇪","flag-il":"🇮🇱","flag-im":"🇮🇲","flag-in":"🇮🇳","flag-io":"🇮🇴","flag-iq":"🇮🇶","flag-ir":"🇮🇷","flag-is":"🇮🇸","it":"🇮🇹","flag-it":"🇮🇹","flag-je":"🇯🇪","flag-jm":"🇯🇲","flag-jo":"🇯🇴","jp":"🇯🇵","flag-jp":"🇯🇵","flag-ke":"🇰🇪","flag-kg":"🇰🇬","flag-kh":"🇰🇭","flag-ki":"🇰🇮","flag-km":"🇰🇲","flag-kn":"🇰🇳","flag-kp":"🇰🇵","kr":"🇰🇷","flag-kr":"🇰🇷","flag-kw":"🇰🇼","flag-ky":"🇰🇾","flag-kz":"🇰🇿","flag-la":"🇱🇦","flag-lb":"🇱🇧","flag-lc":"🇱🇨","flag-li":"🇱🇮","flag-lk":"🇱🇰","flag-lr":"🇱🇷","flag-ls":"🇱🇸","flag-lt":"🇱🇹","flag-lu":"🇱🇺","flag-lv":"🇱🇻","flag-ly":"🇱🇾","flag-ma":"🇲🇦","flag-mc":"🇲🇨","flag-md":"🇲🇩","flag-me":"🇲🇪","flag-mf":"🇲🇫","flag-mg":"🇲🇬","flag-mh":"🇲🇭","flag-mk":"🇲🇰","flag-ml":"🇲🇱","flag-mm":"🇲🇲","flag-mn":"🇲🇳","flag-mo":"🇲🇴","flag-mp":"🇲🇵","flag-mq":"🇲🇶","flag-mr":"🇲🇷","flag-ms":"🇲🇸","flag-mt":"🇲🇹","flag-mu":"🇲🇺","flag-mv":"🇲🇻","flag-mw":"🇲🇼","flag-mx":"🇲🇽","flag-my":"🇲🇾","flag-mz":"🇲🇿","flag-na":"🇳🇦","flag-nc":"🇳🇨","flag-ne":"🇳🇪","flag-nf":"🇳🇫","flag-ng":"🇳🇬","flag-ni":"🇳🇮","flag-nl":"🇳🇱","flag-no":"🇳🇴","flag-np":"🇳🇵","flag-nr":"🇳🇷","flag-nu":"🇳🇺","flag-nz":"🇳🇿","flag-om":"🇴🇲","flag-pa":"🇵🇦","flag-pe":"🇵🇪","flag-pf":"🇵🇫","flag-pg":"🇵🇬","flag-ph":"🇵🇭","flag-pk":"🇵🇰","flag-pl":"🇵🇱","flag-pm":"🇵🇲","flag-pn":"🇵🇳","flag-pr":"🇵🇷","flag-ps":"🇵🇸","flag-pt":"🇵🇹","flag-pw":"🇵🇼","flag-py":"🇵🇾","flag-qa":"🇶🇦","flag-re":"🇷🇪","flag-ro":"🇷🇴","flag-rs":"🇷🇸","ru":"🇷🇺","flag-ru":"🇷🇺","flag-rw":"🇷🇼","flag-sa":"🇸🇦","flag-sb":"🇸🇧","flag-sc":"🇸🇨","flag-sd":"🇸🇩","flag-se":"🇸🇪","flag-sg":"🇸🇬","flag-sh":"🇸🇭","flag-si":"🇸🇮","flag-sj":"🇸🇯","flag-sk":"🇸🇰","flag-sl":"🇸🇱","flag-sm":"🇸🇲","flag-sn":"🇸🇳","flag-so":"🇸🇴","flag-sr":"🇸🇷","flag-ss":"🇸🇸","flag-st":"🇸🇹","flag-sv":"🇸🇻","flag-sx":"🇸🇽","flag-sy":"🇸🇾","flag-sz":"🇸🇿","flag-ta":"🇹🇦","flag-tc":"🇹🇨","flag-td":"🇹🇩","flag-tf":"🇹🇫","flag-tg":"🇹🇬","flag-th":"🇹🇭","flag-tj":"🇹🇯","flag-tk":"🇹🇰","flag-tl":"🇹🇱","flag-tm":"🇹🇲","flag-tn":"🇹🇳","flag-to":"🇹🇴","flag-tr":"🇹🇷","flag-tt":"🇹🇹","flag-tv":"🇹🇻","flag-tw":"🇹🇼","flag-tz":"🇹🇿","flag-ua":"🇺🇦","flag-ug":"🇺🇬","flag-um":"🇺🇲","flag-un":"🇺🇳","us":"🇺🇸","flag-us":"🇺🇸","flag-uy":"🇺🇾","flag-uz":"🇺🇿","flag-va":"🇻🇦","flag-vc":"🇻🇨","flag-ve":"🇻🇪","flag-vg":"🇻🇬","flag-vi":"🇻🇮","flag-vn":"🇻🇳","flag-vu":"🇻🇺","flag-wf":"🇼🇫","flag-ws":"🇼🇸","flag-xk":"🇽🇰","flag-ye":"🇾🇪","flag-yt":"🇾🇹","flag-za":"🇿🇦","flag-zm":"🇿🇲","flag-zw":"🇿🇼","koko":"🈁","sa":"🈂️","u7121":"🈚","u6307":"🈯","u7981":"🈲","u7a7a":"🈳","u5408":"🈴","u6e80":"🈵","u6709":"🈶","u6708":"🈷️","u7533":"🈸","u5272":"🈹","u55b6":"🈺","ideograph_advantage":"🉐","accept":"🉑","cyclone":"🌀","foggy":"🌁","closed_umbrella":"🌂","night_with_stars":"🌃","sunrise_over_mountains":"🌄","sunrise":"🌅","city_sunset":"🌆","city_sunrise":"🌇","rainbow":"🌈","bridge_at_night":"🌉","ocean":"🌊","volcano":"🌋","milky_way":"🌌","earth_africa":"🌍","earth_americas":"🌎","earth_asia":"🌏","globe_with_meridians":"🌐","new_moon":"🌑","waxing_crescent_moon":"🌒","first_quarter_moon":"🌓","moon":"🌔","waxing_gibbous_moon":"🌔","full_moon":"🌕","waning_gibbous_moon":"🌖","last_quarter_moon":"🌗","waning_crescent_moon":"🌘","crescent_moon":"🌙","new_moon_with_face":"🌚","first_quarter_moon_with_face":"🌛","last_quarter_moon_with_face":"🌜","full_moon_with_face":"🌝","sun_with_face":"🌞","star2":"🌟","stars":"🌠","thermometer":"🌡️","mostly_sunny":"🌤️","sun_small_cloud":"🌤️","barely_sunny":"🌥️","sun_behind_cloud":"🌥️","partly_sunny_rain":"🌦️","sun_behind_rain_cloud":"🌦️","rain_cloud":"🌧️","snow_cloud":"🌨️","lightning":"🌩️","lightning_cloud":"🌩️","tornado":"🌪️","tornado_cloud":"🌪️","fog":"🌫️","wind_blowing_face":"🌬️","hotdog":"🌭","taco":"🌮","burrito":"🌯","chestnut":"🌰","seedling":"🌱","evergreen_tree":"🌲","deciduous_tree":"🌳","palm_tree":"🌴","cactus":"🌵","hot_pepper":"🌶️","tulip":"🌷","cherry_blossom":"🌸","rose":"🌹","hibiscus":"🌺","sunflower":"🌻","blossom":"🌼","corn":"🌽","ear_of_rice":"🌾","herb":"🌿","four_leaf_clover":"🍀","maple_leaf":"🍁","fallen_leaf":"🍂","leaves":"🍃","mushroom":"🍄","tomato":"🍅","eggplant":"🍆","grapes":"🍇","melon":"🍈","watermelon":"🍉","tangerine":"🍊","lemon":"🍋","banana":"🍌","pineapple":"🍍","apple":"🍎","green_apple":"🍏","pear":"🍐","peach":"🍑","cherries":"🍒","strawberry":"🍓","hamburger":"🍔","pizza":"🍕","meat_on_bone":"🍖","poultry_leg":"🍗","rice_cracker":"🍘","rice_ball":"🍙","rice":"🍚","curry":"🍛","ramen":"🍜","spaghetti":"🍝","bread":"🍞","fries":"🍟","sweet_potato":"🍠","dango":"🍡","oden":"🍢","sushi":"🍣","fried_shrimp":"🍤","fish_cake":"🍥","icecream":"🍦","shaved_ice":"🍧","ice_cream":"🍨","doughnut":"🍩","cookie":"🍪","chocolate_bar":"🍫","candy":"🍬","lollipop":"🍭","custard":"🍮","honey_pot":"🍯","cake":"🍰","bento":"🍱","stew":"🍲","fried_egg":"🍳","cooking":"🍳","fork_and_knife":"🍴","tea":"🍵","sake":"🍶","wine_glass":"🍷","cocktail":"🍸","tropical_drink":"🍹","beer":"🍺","beers":"🍻","baby_bottle":"🍼","knife_fork_plate":"🍽️","champagne":"🍾","popcorn":"🍿","ribbon":"🎀","gift":"🎁","birthday":"🎂","jack_o_lantern":"🎃","christmas_tree":"🎄","santa":"🎅","fireworks":"🎆","sparkler":"🎇","balloon":"🎈","tada":"🎉","confetti_ball":"🎊","tanabata_tree":"🎋","crossed_flags":"🎌","bamboo":"🎍","dolls":"🎎","flags":"🎏","wind_chime":"🎐","rice_scene":"🎑","school_satchel":"🎒","mortar_board":"🎓","medal":"🎖️","reminder_ribbon":"🎗️","studio_microphone":"🎙️","level_slider":"🎚️","control_knobs":"🎛️","film_frames":"🎞️","admission_tickets":"🎟️","carousel_horse":"🎠","ferris_wheel":"🎡","roller_coaster":"🎢","fishing_pole_and_fish":"🎣","microphone":"🎤","movie_camera":"🎥","cinema":"🎦","headphones":"🎧","art":"🎨","tophat":"🎩","circus_tent":"🎪","ticket":"🎫","clapper":"🎬","performing_arts":"🎭","video_game":"🎮","dart":"🎯","slot_machine":"🎰","8ball":"🎱","game_die":"🎲","bowling":"🎳","flower_playing_cards":"🎴","musical_note":"🎵","notes":"🎶","saxophone":"🎷","guitar":"🎸","musical_keyboard":"🎹","trumpet":"🎺","violin":"🎻","musical_score":"🎼","running_shirt_with_sash":"🎽","tennis":"🎾","ski":"🎿","basketball":"🏀","checkered_flag":"🏁","snowboarder":"🏂","woman-running":"🏃‍♀️","man-running":"🏃‍♂️","runner":"🏃‍♂️","running":"🏃‍♂️","woman-surfing":"🏄‍♀️","man-surfing":"🏄‍♂️","surfer":"🏄‍♂️","sports_medal":"🏅","trophy":"🏆","horse_racing":"🏇","football":"🏈","rugby_football":"🏉","woman-swimming":"🏊‍♀️","man-swimming":"🏊‍♂️","swimmer":"🏊‍♂️","woman-lifting-weights":"🏋️‍♀️","man-lifting-weights":"🏋️‍♂️","weight_lifter":"🏋️‍♂️","woman-golfing":"🏌️‍♀️","man-golfing":"🏌️‍♂️","golfer":"🏌️‍♂️","racing_motorcycle":"🏍️","racing_car":"🏎️","cricket_bat_and_ball":"🏏","volleyball":"🏐","field_hockey_stick_and_ball":"🏑","ice_hockey_stick_and_puck":"🏒","table_tennis_paddle_and_ball":"🏓","snow_capped_mountain":"🏔️","camping":"🏕️","beach_with_umbrella":"🏖️","building_construction":"🏗️","house_buildings":"🏘️","cityscape":"🏙️","derelict_house_building":"🏚️","classical_building":"🏛️","desert":"🏜️","desert_island":"🏝️","national_park":"🏞️","stadium":"🏟️","house":"🏠","house_with_garden":"🏡","office":"🏢","post_office":"🏣","european_post_office":"🏤","hospital":"🏥","bank":"🏦","atm":"🏧","hotel":"🏨","love_hotel":"🏩","convenience_store":"🏪","school":"🏫","department_store":"🏬","factory":"🏭","izakaya_lantern":"🏮","lantern":"🏮","japanese_castle":"🏯","european_castle":"🏰","rainbow-flag":"🏳️‍🌈","waving_white_flag":"🏳️","flag-england":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","flag-scotland":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","flag-wales":"🏴󠁧󠁢󠁷󠁬󠁳󠁿","waving_black_flag":"🏴","rosette":"🏵️","label":"🏷️","badminton_racquet_and_shuttlecock":"🏸","bow_and_arrow":"🏹","amphora":"🏺","skin-tone-2":"🏻","skin-tone-3":"🏼","skin-tone-4":"🏽","skin-tone-5":"🏾","skin-tone-6":"🏿","rat":"🐀","mouse2":"🐁","ox":"🐂","water_buffalo":"🐃","cow2":"🐄","tiger2":"🐅","leopard":"🐆","rabbit2":"🐇","cat2":"🐈","dragon":"🐉","crocodile":"🐊","whale2":"🐋","snail":"🐌","snake":"🐍","racehorse":"🐎","ram":"🐏","goat":"🐐","sheep":"🐑","monkey":"🐒","rooster":"🐓","chicken":"🐔","dog2":"🐕","pig2":"🐖","boar":"🐗","elephant":"🐘","octopus":"🐙","shell":"🐚","bug":"🐛","ant":"🐜","bee":"🐝","honeybee":"🐝","beetle":"🐞","fish":"🐟","tropical_fish":"🐠","blowfish":"🐡","turtle":"🐢","hatching_chick":"🐣","baby_chick":"🐤","hatched_chick":"🐥","bird":"🐦","penguin":"🐧","koala":"🐨","poodle":"🐩","dromedary_camel":"🐪","camel":"🐫","dolphin":"🐬","flipper":"🐬","mouse":"🐭","cow":"🐮","tiger":"🐯","rabbit":"🐰","cat":"🐱","dragon_face":"🐲","whale":"🐳","horse":"🐴","monkey_face":"🐵","dog":"🐶","pig":"🐷","frog":"🐸","hamster":"🐹","wolf":"🐺","bear":"🐻","panda_face":"🐼","pig_nose":"🐽","feet":"🐾","paw_prints":"🐾","chipmunk":"🐿️","eyes":"👀","eye-in-speech-bubble":"👁️‍🗨️","eye":"👁️","ear":"👂","nose":"👃","lips":"👄","tongue":"👅","point_up_2":"👆","point_down":"👇","point_left":"👈","point_right":"👉","facepunch":"👊","punch":"👊","wave":"👋","ok_hand":"👌","+1":"👍","thumbsup":"👍","-1":"👎","thumbsdown":"👎","clap":"👏","open_hands":"👐","crown":"👑","womans_hat":"👒","eyeglasses":"👓","necktie":"👔","shirt":"👕","tshirt":"👕","jeans":"👖","dress":"👗","kimono":"👘","bikini":"👙","womans_clothes":"👚","purse":"👛","handbag":"👜","pouch":"👝","mans_shoe":"👞","shoe":"👞","athletic_shoe":"👟","high_heel":"👠","sandal":"👡","boot":"👢","footprints":"👣","bust_in_silhouette":"👤","busts_in_silhouette":"👥","boy":"👦","girl":"👧","male-farmer":"👨‍🌾","male-cook":"👨‍🍳","male-student":"👨‍🎓","male-singer":"👨‍🎤","male-artist":"👨‍🎨","male-teacher":"👨‍🏫","male-factory-worker":"👨‍🏭","man-boy-boy":"👨‍👦‍👦","man-boy":"👨‍👦","man-girl-boy":"👨‍👧‍👦","man-girl-girl":"👨‍👧‍👧","man-girl":"👨‍👧","man-man-boy":"👨‍👨‍👦","man-man-boy-boy":"👨‍👨‍👦‍👦","man-man-girl":"👨‍👨‍👧","man-man-girl-boy":"👨‍👨‍👧‍👦","man-man-girl-girl":"👨‍👨‍👧‍👧","man-woman-boy":"👨‍👩‍👦","family":"👨‍👩‍👦","man-woman-boy-boy":"👨‍👩‍👦‍👦","man-woman-girl":"👨‍👩‍👧","man-woman-girl-boy":"👨‍👩‍👧‍👦","man-woman-girl-girl":"👨‍👩‍👧‍👧","male-technologist":"👨‍💻","male-office-worker":"👨‍💼","male-mechanic":"👨‍🔧","male-scientist":"👨‍🔬","male-astronaut":"👨‍🚀","male-firefighter":"👨‍🚒","male-doctor":"👨‍⚕️","male-judge":"👨‍⚖️","male-pilot":"👨‍✈️","man-heart-man":"👨‍❤️‍👨","man-kiss-man":"👨‍❤️‍💋‍👨","man":"👨","female-farmer":"👩‍🌾","female-cook":"👩‍🍳","female-student":"👩‍🎓","female-singer":"👩‍🎤","female-artist":"👩‍🎨","female-teacher":"👩‍🏫","female-factory-worker":"👩‍🏭","woman-boy-boy":"👩‍👦‍👦","woman-boy":"👩‍👦","woman-girl-boy":"👩‍👧‍👦","woman-girl-girl":"👩‍👧‍👧","woman-girl":"👩‍👧","woman-woman-boy":"👩‍👩‍👦","woman-woman-boy-boy":"👩‍👩‍👦‍👦","woman-woman-girl":"👩‍👩‍👧","woman-woman-girl-boy":"👩‍👩‍👧‍👦","woman-woman-girl-girl":"👩‍👩‍👧‍👧","female-technologist":"👩‍💻","female-office-worker":"👩‍💼","female-mechanic":"👩‍🔧","female-scientist":"👩‍🔬","female-astronaut":"👩‍🚀","female-firefighter":"👩‍🚒","female-doctor":"👩‍⚕️","female-judge":"👩‍⚖️","female-pilot":"👩‍✈️","woman-heart-man":"👩‍❤️‍👨","couple_with_heart":"👩‍❤️‍👨","woman-heart-woman":"👩‍❤️‍👩","woman-kiss-man":"👩‍❤️‍💋‍👨","couplekiss":"👩‍❤️‍💋‍👨","woman-kiss-woman":"👩‍❤️‍💋‍👩","woman":"👩","couple":"👫","man_and_woman_holding_hands":"👫","two_men_holding_hands":"👬","two_women_holding_hands":"👭","female-police-officer":"👮‍♀️","male-police-officer":"👮‍♂️","cop":"👮‍♂️","woman-with-bunny-ears-partying":"👯‍♀️","dancers":"👯‍♀️","man-with-bunny-ears-partying":"👯‍♂️","bride_with_veil":"👰","blond-haired-woman":"👱‍♀️","blond-haired-man":"👱‍♂️","person_with_blond_hair":"👱‍♂️","man_with_gua_pi_mao":"👲","woman-wearing-turban":"👳‍♀️","man-wearing-turban":"👳‍♂️","man_with_turban":"👳‍♂️","older_man":"👴","older_woman":"👵","baby":"👶","female-construction-worker":"👷‍♀️","male-construction-worker":"👷‍♂️","construction_worker":"👷‍♂️","princess":"👸","japanese_ogre":"👹","japanese_goblin":"👺","ghost":"👻","angel":"👼","alien":"👽","space_invader":"👾","imp":"👿","skull":"💀","woman-tipping-hand":"💁‍♀️","information_desk_person":"💁‍♀️","man-tipping-hand":"💁‍♂️","female-guard":"💂‍♀️","male-guard":"💂‍♂️","guardsman":"💂‍♂️","dancer":"💃","lipstick":"💄","nail_care":"💅","woman-getting-massage":"💆‍♀️","massage":"💆‍♀️","man-getting-massage":"💆‍♂️","woman-getting-haircut":"💇‍♀️","haircut":"💇‍♀️","man-getting-haircut":"💇‍♂️","barber":"💈","syringe":"💉","pill":"💊","kiss":"💋","love_letter":"💌","ring":"💍","gem":"💎","bouquet":"💐","wedding":"💒","heartbeat":"💓","broken_heart":"💔","two_hearts":"💕","sparkling_heart":"💖","heartpulse":"💗","cupid":"💘","blue_heart":"💙","green_heart":"💚","yellow_heart":"💛","purple_heart":"💜","gift_heart":"💝","revolving_hearts":"💞","heart_decoration":"💟","diamond_shape_with_a_dot_inside":"💠","bulb":"💡","anger":"💢","bomb":"💣","zzz":"💤","boom":"💥","collision":"💥","sweat_drops":"💦","droplet":"💧","dash":"💨","hankey":"💩","poop":"💩","shit":"💩","muscle":"💪","dizzy":"💫","speech_balloon":"💬","thought_balloon":"💭","white_flower":"💮","moneybag":"💰","currency_exchange":"💱","heavy_dollar_sign":"💲","credit_card":"💳","yen":"💴","dollar":"💵","euro":"💶","pound":"💷","money_with_wings":"💸","chart":"💹","seat":"💺","computer":"💻","briefcase":"💼","minidisc":"💽","floppy_disk":"💾","cd":"💿","dvd":"📀","file_folder":"📁","open_file_folder":"📂","page_with_curl":"📃","page_facing_up":"📄","date":"📅","calendar":"📆","card_index":"📇","chart_with_upwards_trend":"📈","chart_with_downwards_trend":"📉","bar_chart":"📊","clipboard":"📋","pushpin":"📌","round_pushpin":"📍","paperclip":"📎","straight_ruler":"📏","triangular_ruler":"📐","bookmark_tabs":"📑","ledger":"📒","notebook":"📓","notebook_with_decorative_cover":"📔","closed_book":"📕","book":"📖","open_book":"📖","green_book":"📗","blue_book":"📘","orange_book":"📙","books":"📚","name_badge":"📛","scroll":"📜","memo":"📝","pencil":"📝","telephone_receiver":"📞","pager":"📟","fax":"📠","satellite_antenna":"📡","loudspeaker":"📢","mega":"📣","outbox_tray":"📤","inbox_tray":"📥","package":"📦","e-mail":"📧","incoming_envelope":"📨","envelope_with_arrow":"📩","mailbox_closed":"📪","mailbox":"📫","mailbox_with_mail":"📬","mailbox_with_no_mail":"📭","postbox":"📮","postal_horn":"📯","newspaper":"📰","iphone":"📱","calling":"📲","vibration_mode":"📳","mobile_phone_off":"📴","no_mobile_phones":"📵","signal_strength":"📶","camera":"📷","camera_with_flash":"📸","video_camera":"📹","tv":"📺","radio":"📻","vhs":"📼","film_projector":"📽️","prayer_beads":"📿","twisted_rightwards_arrows":"🔀","repeat":"🔁","repeat_one":"🔂","arrows_clockwise":"🔃","arrows_counterclockwise":"🔄","low_brightness":"🔅","high_brightness":"🔆","mute":"🔇","speaker":"🔈","sound":"🔉","loud_sound":"🔊","battery":"🔋","electric_plug":"🔌","mag":"🔍","mag_right":"🔎","lock_with_ink_pen":"🔏","closed_lock_with_key":"🔐","key":"🔑","lock":"🔒","unlock":"🔓","bell":"🔔","no_bell":"🔕","bookmark":"🔖","link":"🔗","radio_button":"🔘","back":"🔙","end":"🔚","on":"🔛","soon":"🔜","top":"🔝","underage":"🔞","keycap_ten":"🔟","capital_abcd":"🔠","abcd":"🔡","symbols":"🔣","abc":"🔤","fire":"🔥","flashlight":"🔦","wrench":"🔧","hammer":"🔨","nut_and_bolt":"🔩","hocho":"🔪","knife":"🔪","gun":"🔫","microscope":"🔬","telescope":"🔭","crystal_ball":"🔮","six_pointed_star":"🔯","beginner":"🔰","trident":"🔱","black_square_button":"🔲","white_square_button":"🔳","red_circle":"🔴","large_blue_circle":"🔵","large_orange_diamond":"🔶","large_blue_diamond":"🔷","small_orange_diamond":"🔸","small_blue_diamond":"🔹","small_red_triangle":"🔺","small_red_triangle_down":"🔻","arrow_up_small":"🔼","arrow_down_small":"🔽","om_symbol":"🕉️","dove_of_peace":"🕊️","kaaba":"🕋","mosque":"🕌","synagogue":"🕍","menorah_with_nine_branches":"🕎","clock1":"🕐","clock2":"🕑","clock3":"🕒","clock4":"🕓","clock5":"🕔","clock6":"🕕","clock7":"🕖","clock8":"🕗","clock9":"🕘","clock10":"🕙","clock11":"🕚","clock12":"🕛","clock130":"🕜","clock230":"🕝","clock330":"🕞","clock430":"🕟","clock530":"🕠","clock630":"🕡","clock730":"🕢","clock830":"🕣","clock930":"🕤","clock1030":"🕥","clock1130":"🕦","clock1230":"🕧","candle":"🕯️","mantelpiece_clock":"🕰️","hole":"🕳️","man_in_business_suit_levitating":"🕴️","female-detective":"🕵️‍♀️","male-detective":"🕵️‍♂️","sleuth_or_spy":"🕵️‍♂️","dark_sunglasses":"🕶️","spider":"🕷️","spider_web":"🕸️","joystick":"🕹️","man_dancing":"🕺","linked_paperclips":"🖇️","lower_left_ballpoint_pen":"🖊️","lower_left_fountain_pen":"🖋️","lower_left_paintbrush":"🖌️","lower_left_crayon":"🖍️","raised_hand_with_fingers_splayed":"🖐️","middle_finger":"🖕","reversed_hand_with_middle_finger_extended":"🖕","spock-hand":"🖖","black_heart":"🖤","desktop_computer":"🖥️","printer":"🖨️","three_button_mouse":"🖱️","trackball":"🖲️","frame_with_picture":"🖼️","card_index_dividers":"🗂️","card_file_box":"🗃️","file_cabinet":"🗄️","wastebasket":"🗑️","spiral_note_pad":"🗒️","spiral_calendar_pad":"🗓️","compression":"🗜️","old_key":"🗝️","rolled_up_newspaper":"🗞️","dagger_knife":"🗡️","speaking_head_in_silhouette":"🗣️","left_speech_bubble":"🗨️","right_anger_bubble":"🗯️","ballot_box_with_ballot":"🗳️","world_map":"🗺️","mount_fuji":"🗻","tokyo_tower":"🗼","statue_of_liberty":"🗽","japan":"🗾","moyai":"🗿","grinning":"😀","grin":"😁","joy":"😂","smiley":"😃","smile":"😄","sweat_smile":"😅","laughing":"😆","satisfied":"😆","innocent":"😇","smiling_imp":"😈","wink":"😉","blush":"😊","yum":"😋","relieved":"😌","heart_eyes":"😍","sunglasses":"😎","smirk":"😏","neutral_face":"😐","expressionless":"😑","unamused":"😒","sweat":"😓","pensive":"😔","confused":"😕","confounded":"😖","kissing":"😗","kissing_heart":"😘","kissing_smiling_eyes":"😙","kissing_closed_eyes":"😚","stuck_out_tongue":"😛","stuck_out_tongue_winking_eye":"😜","stuck_out_tongue_closed_eyes":"😝","disappointed":"😞","worried":"😟","angry":"😠","rage":"😡","cry":"😢","persevere":"😣","triumph":"😤","disappointed_relieved":"😥","frowning":"😦","anguished":"😧","fearful":"😨","weary":"😩","sleepy":"😪","tired_face":"😫","grimacing":"😬","sob":"😭","open_mouth":"😮","hushed":"😯","cold_sweat":"😰","scream":"😱","astonished":"😲","flushed":"😳","sleeping":"😴","dizzy_face":"😵","no_mouth":"😶","mask":"😷","smile_cat":"😸","joy_cat":"😹","smiley_cat":"😺","heart_eyes_cat":"😻","smirk_cat":"😼","kissing_cat":"😽","pouting_cat":"😾","crying_cat_face":"😿","scream_cat":"🙀","slightly_frowning_face":"🙁","slightly_smiling_face":"🙂","upside_down_face":"🙃","face_with_rolling_eyes":"🙄","woman-gesturing-no":"🙅‍♀️","no_good":"🙅‍♀️","man-gesturing-no":"🙅‍♂️","woman-gesturing-ok":"🙆‍♀️","ok_woman":"🙆‍♀️","man-gesturing-ok":"🙆‍♂️","woman-bowing":"🙇‍♀️","man-bowing":"🙇‍♂️","bow":"🙇‍♂️","see_no_evil":"🙈","hear_no_evil":"🙉","speak_no_evil":"🙊","woman-raising-hand":"🙋‍♀️","raising_hand":"🙋‍♀️","man-raising-hand":"🙋‍♂️","raised_hands":"🙌","woman-frowning":"🙍‍♀️","person_frowning":"🙍‍♀️","man-frowning":"🙍‍♂️","woman-pouting":"🙎‍♀️","person_with_pouting_face":"🙎‍♀️","man-pouting":"🙎‍♂️","pray":"🙏","rocket":"🚀","helicopter":"🚁","steam_locomotive":"🚂","railway_car":"🚃","bullettrain_side":"🚄","bullettrain_front":"🚅","train2":"🚆","metro":"🚇","light_rail":"🚈","station":"🚉","tram":"🚊","train":"🚋","bus":"🚌","oncoming_bus":"🚍","trolleybus":"🚎","busstop":"🚏","minibus":"🚐","ambulance":"🚑","fire_engine":"🚒","police_car":"🚓","oncoming_police_car":"🚔","taxi":"🚕","oncoming_taxi":"🚖","car":"🚗","red_car":"🚗","oncoming_automobile":"🚘","blue_car":"🚙","truck":"🚚","articulated_lorry":"🚛","tractor":"🚜","monorail":"🚝","mountain_railway":"🚞","suspension_railway":"🚟","mountain_cableway":"🚠","aerial_tramway":"🚡","ship":"🚢","woman-rowing-boat":"🚣‍♀️","man-rowing-boat":"🚣‍♂️","rowboat":"🚣‍♂️","speedboat":"🚤","traffic_light":"🚥","vertical_traffic_light":"🚦","construction":"🚧","rotating_light":"🚨","triangular_flag_on_post":"🚩","door":"🚪","no_entry_sign":"🚫","smoking":"🚬","no_smoking":"🚭","put_litter_in_its_place":"🚮","do_not_litter":"🚯","potable_water":"🚰","non-potable_water":"🚱","bike":"🚲","no_bicycles":"🚳","woman-biking":"🚴‍♀️","man-biking":"🚴‍♂️","bicyclist":"🚴‍♂️","woman-mountain-biking":"🚵‍♀️","man-mountain-biking":"🚵‍♂️","mountain_bicyclist":"🚵‍♂️","woman-walking":"🚶‍♀️","man-walking":"🚶‍♂️","walking":"🚶‍♂️","no_pedestrians":"🚷","children_crossing":"🚸","mens":"🚹","womens":"🚺","restroom":"🚻","baby_symbol":"🚼","toilet":"🚽","wc":"🚾","shower":"🚿","bath":"🛀","bathtub":"🛁","passport_control":"🛂","customs":"🛃","baggage_claim":"🛄","left_luggage":"🛅","couch_and_lamp":"🛋️","sleeping_accommodation":"🛌","shopping_bags":"🛍️","bellhop_bell":"🛎️","bed":"🛏️","place_of_worship":"🛐","octagonal_sign":"🛑","shopping_trolley":"🛒","hammer_and_wrench":"🛠️","shield":"🛡️","oil_drum":"🛢️","motorway":"🛣️","railway_track":"🛤️","motor_boat":"🛥️","small_airplane":"🛩️","airplane_departure":"🛫","airplane_arriving":"🛬","satellite":"🛰️","passenger_ship":"🛳️","scooter":"🛴","motor_scooter":"🛵","canoe":"🛶","sled":"🛷","flying_saucer":"🛸","zipper_mouth_face":"🤐","money_mouth_face":"🤑","face_with_thermometer":"🤒","nerd_face":"🤓","thinking_face":"🤔","face_with_head_bandage":"🤕","robot_face":"🤖","hugging_face":"🤗","the_horns":"🤘","sign_of_the_horns":"🤘","call_me_hand":"🤙","raised_back_of_hand":"🤚","left-facing_fist":"🤛","right-facing_fist":"🤜","handshake":"🤝","crossed_fingers":"🤞","hand_with_index_and_middle_fingers_crossed":"🤞","i_love_you_hand_sign":"🤟","face_with_cowboy_hat":"🤠","clown_face":"🤡","nauseated_face":"🤢","rolling_on_the_floor_laughing":"🤣","drooling_face":"🤤","lying_face":"🤥","woman-facepalming":"🤦‍♀️","man-facepalming":"🤦‍♂️","face_palm":"🤦","sneezing_face":"🤧","face_with_raised_eyebrow":"🤨","face_with_one_eyebrow_raised":"🤨","star-struck":"🤩","grinning_face_with_star_eyes":"🤩","zany_face":"🤪","grinning_face_with_one_large_and_one_small_eye":"🤪","shushing_face":"🤫","face_with_finger_covering_closed_lips":"🤫","face_with_symbols_on_mouth":"🤬","serious_face_with_symbols_covering_mouth":"🤬","face_with_hand_over_mouth":"🤭","smiling_face_with_smiling_eyes_and_hand_covering_mouth":"🤭","face_vomiting":"🤮","face_with_open_mouth_vomiting":"🤮","exploding_head":"🤯","shocked_face_with_exploding_head":"🤯","pregnant_woman":"🤰","breast-feeding":"🤱","palms_up_together":"🤲","selfie":"🤳","prince":"🤴","man_in_tuxedo":"🤵","mrs_claus":"🤶","mother_christmas":"🤶","woman-shrugging":"🤷‍♀️","man-shrugging":"🤷‍♂️","shrug":"🤷","woman-cartwheeling":"🤸‍♀️","man-cartwheeling":"🤸‍♂️","person_doing_cartwheel":"🤸","woman-juggling":"🤹‍♀️","man-juggling":"🤹‍♂️","juggling":"🤹","fencer":"🤺","woman-wrestling":"🤼‍♀️","man-wrestling":"🤼‍♂️","wrestlers":"🤼","woman-playing-water-polo":"🤽‍♀️","man-playing-water-polo":"🤽‍♂️","water_polo":"🤽","woman-playing-handball":"🤾‍♀️","man-playing-handball":"🤾‍♂️","handball":"🤾","wilted_flower":"🥀","drum_with_drumsticks":"🥁","clinking_glasses":"🥂","tumbler_glass":"🥃","spoon":"🥄","goal_net":"🥅","first_place_medal":"🥇","second_place_medal":"🥈","third_place_medal":"🥉","boxing_glove":"🥊","martial_arts_uniform":"🥋","curling_stone":"🥌","croissant":"🥐","avocado":"🥑","cucumber":"🥒","bacon":"🥓","potato":"🥔","carrot":"🥕","baguette_bread":"🥖","green_salad":"🥗","shallow_pan_of_food":"🥘","stuffed_flatbread":"🥙","egg":"🥚","glass_of_milk":"🥛","peanuts":"🥜","kiwifruit":"🥝","pancakes":"🥞","dumpling":"🥟","fortune_cookie":"🥠","takeout_box":"🥡","chopsticks":"🥢","bowl_with_spoon":"🥣","cup_with_straw":"🥤","coconut":"🥥","broccoli":"🥦","pie":"🥧","pretzel":"🥨","cut_of_meat":"🥩","sandwich":"🥪","canned_food":"🥫","crab":"🦀","lion_face":"🦁","scorpion":"🦂","turkey":"🦃","unicorn_face":"🦄","eagle":"🦅","duck":"🦆","bat":"🦇","shark":"🦈","owl":"🦉","fox_face":"🦊","butterfly":"🦋","deer":"🦌","gorilla":"🦍","lizard":"🦎","rhinoceros":"🦏","shrimp":"🦐","squid":"🦑","giraffe_face":"🦒","zebra_face":"🦓","hedgehog":"🦔","sauropod":"🦕","t-rex":"🦖","cricket":"🦗","cheese_wedge":"🧀","face_with_monocle":"🧐","adult":"🧑","child":"🧒","older_adult":"🧓","bearded_person":"🧔","person_with_headscarf":"🧕","woman_in_steamy_room":"🧖‍♀️","man_in_steamy_room":"🧖‍♂️","person_in_steamy_room":"🧖‍♂️","woman_climbing":"🧗‍♀️","person_climbing":"🧗‍♀️","man_climbing":"🧗‍♂️","woman_in_lotus_position":"🧘‍♀️","person_in_lotus_position":"🧘‍♀️","man_in_lotus_position":"🧘‍♂️","female_mage":"🧙‍♀️","mage":"🧙‍♀️","male_mage":"🧙‍♂️","female_fairy":"🧚‍♀️","fairy":"🧚‍♀️","male_fairy":"🧚‍♂️","female_vampire":"🧛‍♀️","vampire":"🧛‍♀️","male_vampire":"🧛‍♂️","mermaid":"🧜‍♀️","merman":"🧜‍♂️","merperson":"🧜‍♂️","female_elf":"🧝‍♀️","male_elf":"🧝‍♂️","elf":"🧝‍♂️","female_genie":"🧞‍♀️","male_genie":"🧞‍♂️","genie":"🧞‍♂️","female_zombie":"🧟‍♀️","male_zombie":"🧟‍♂️","zombie":"🧟‍♂️","brain":"🧠","orange_heart":"🧡","billed_cap":"🧢","scarf":"🧣","gloves":"🧤","coat":"🧥","socks":"🧦","bangbang":"‼️","interrobang":"⁉️","tm":"™️","information_source":"ℹ️","left_right_arrow":"↔️","arrow_up_down":"↕️","arrow_upper_left":"↖️","arrow_upper_right":"↗️","arrow_lower_right":"↘️","arrow_lower_left":"↙️","leftwards_arrow_with_hook":"↩️","arrow_right_hook":"↪️","watch":"⌚","hourglass":"⌛","keyboard":"⌨️","eject":"⏏️","fast_forward":"⏩","rewind":"⏪","arrow_double_up":"⏫","arrow_double_down":"⏬","black_right_pointing_double_triangle_with_vertical_bar":"⏭️","black_left_pointing_double_triangle_with_vertical_bar":"⏮️","black_right_pointing_triangle_with_double_vertical_bar":"⏯️","alarm_clock":"⏰","stopwatch":"⏱️","timer_clock":"⏲️","hourglass_flowing_sand":"⏳","double_vertical_bar":"⏸️","black_square_for_stop":"⏹️","black_circle_for_record":"⏺️","m":"Ⓜ️","black_small_square":"▪️","white_small_square":"▫️","arrow_forward":"▶️","arrow_backward":"◀️","white_medium_square":"◻️","black_medium_square":"◼️","white_medium_small_square":"◽","black_medium_small_square":"◾","sunny":"☀️","cloud":"☁️","umbrella":"☂️","snowman":"☃️","comet":"☄️","phone":"☎️","telephone":"☎️","ballot_box_with_check":"☑️","shamrock":"☘️","point_up":"☝️","skull_and_crossbones":"☠️","radioactive_sign":"☢️","biohazard_sign":"☣️","orthodox_cross":"☦️","star_and_crescent":"☪️","peace_symbol":"☮️","yin_yang":"☯️","wheel_of_dharma":"☸️","white_frowning_face":"☹️","relaxed":"☺️","female_sign":"♀️","male_sign":"♂️","gemini":"♊","cancer":"♋","leo":"♌","virgo":"♍","libra":"♎","scorpius":"♏","spades":"♠️","clubs":"♣️","hearts":"♥️","diamonds":"♦️","hotsprings":"♨️","recycle":"♻️","wheelchair":"♿","hammer_and_pick":"⚒️","crossed_swords":"⚔️","medical_symbol":"⚕️","staff_of_aesculapius":"⚕️","scales":"⚖️","alembic":"⚗️","gear":"⚙️","atom_symbol":"⚛️","fleur_de_lis":"⚜️","warning":"⚠️","zap":"⚡","white_circle":"⚪","black_circle":"⚫","coffin":"⚰️","funeral_urn":"⚱️","soccer":"⚽","baseball":"⚾","snowman_without_snow":"⛄","partly_sunny":"⛅","thunder_cloud_and_rain":"⛈️","ophiuchus":"⛎","pick":"⛏️","helmet_with_white_cross":"⛑️","chains":"⛓️","no_entry":"⛔","shinto_shrine":"⛩️","church":"⛪","mountain":"⛰️","umbrella_on_ground":"⛱️","fountain":"⛲","golf":"⛳","ferry":"⛴️","boat":"⛵","sailboat":"⛵","skier":"⛷️","ice_skate":"⛸️","woman-bouncing-ball":"⛹️‍♀️","man-bouncing-ball":"⛹️‍♂️","person_with_ball":"⛹️‍♂️","tent":"⛺","fuelpump":"⛽","scissors":"✂️","airplane":"✈️","email":"✉️","envelope":"✉️","fist":"✊","hand":"✋","raised_hand":"✋","v":"✌️","writing_hand":"✍️","pencil2":"✏️","black_nib":"✒️","heavy_check_mark":"✔️","heavy_multiplication_x":"✖️","latin_cross":"✝️","star_of_david":"✡️","eight_spoked_asterisk":"✳️","eight_pointed_black_star":"✴️","snowflake":"❄️","sparkle":"❇️","x":"❌","negative_squared_cross_mark":"❎","heavy_heart_exclamation_mark_ornament":"❣️","heart":"❤️","arrow_right":"➡️","curly_loop":"➰","loop":"➿","arrow_heading_up":"⤴️","arrow_heading_down":"⤵️","arrow_left":"⬅️","arrow_up":"⬆️","arrow_down":"⬇️","black_large_square":"⬛","white_large_square":"⬜","star":"⭐","o":"⭕","wavy_dash":"〰️","part_alternation_mark":"〽️","congratulations":"㊗️","secret":"㊙️"}');

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "./node_modules/split-on-first/index.js");
const filterObject = __webpack_require__(/*! filter-obj */ "./node_modules/filter-obj/index.js");

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		if (param === '') {
			continue;
		}

		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${encode(object.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
	options = Object.assign({
		parseFragmentIdentifier: true
	}, options);

	const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
	return exports.stringifyUrl({
		url,
		query: filterObject(query, filter),
		fragmentIdentifier
	}, options);
};

exports.exclude = (input, filter, options) => {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return exports.pick(input, exclusionFilter, options);
};


/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-helmet/es/Helmet.js":
/*!************************************************!*\
  !*** ./node_modules/react-helmet/es/Helmet.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Helmet": () => (/* binding */ HelmetExport)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-side-effect */ "./node_modules/react-side-effect/lib/index.js");
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_side_effect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_4__);






var ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target"
};

var REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = "data-react-helmet";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === TAG_PROPERTIES.INNER_HTML || attributeKey === TAG_PROPERTIES.CSS_TEXT || attributeKey === TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
        bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [react__WEBPACK_IMPORTED_MODULE_3___default().createElement(TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return react__WEBPACK_IMPORTED_MODULE_3___default().createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case ATTRIBUTE_NAMES.BODY:
        case ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            classCallCheck(this, HelmetWrapper);
            return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default()(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case TAG_NAMES.SCRIPT:
                case TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _babelHelpers$extends;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _babelHelpers$extends2, _babelHelpers$extends3;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));

                case TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _babelHelpers$extends4;

                newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (true) {
                if (!VALID_TAG_NAMES.some(function (name) {
                    return child.type === name;
                })) {
                    if (typeof child.type === "function") {
                        return warn("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
                    }

                    return warn("Only elements types " + VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
                }

                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
                    return typeof nestedChild !== "string";
                }))) {
                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
                }
            }

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            react__WEBPACK_IMPORTED_MODULE_3___default().Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = convertReactPropstoHtmlAttributes(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case TAG_NAMES.LINK:
                    case TAG_NAMES.META:
                    case TAG_NAMES.NOSCRIPT:
                    case TAG_NAMES.SCRIPT:
                    case TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Component, newProps);
        };

        createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
             * @param {Object} bodyAttributes: {"className": "root"}
             * @param {String} defaultTitle: "Default Title"
             * @param {Boolean} defer: true
             * @param {Boolean} encodeSpecialCharacters: true
             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
             * @param {String} title: "Title"
             * @param {Object} titleAttributes: {"itemprop": "name"}
             * @param {String} titleTemplate: "MySite.com - %s"
             */
            set: function set$$1(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);
        return HelmetWrapper;
    }((react__WEBPACK_IMPORTED_MODULE_3___default().Component)), _class.propTypes = {
        base: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
        bodyAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
        children: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)]),
        defaultTitle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        defer: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
        encodeSpecialCharacters: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
        htmlAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
        link: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        meta: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        noscript: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        onChangeClientState: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
        script: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        style: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        titleAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
        titleTemplate: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = mapStateOnServer({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = react_side_effect__WEBPACK_IMPORTED_MODULE_1___default()(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelmetExport);



/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = /*#__PURE__*/function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it
      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return /*#__PURE__*/React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.PureComponent);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),

/***/ "./node_modules/split-on-first/index.js":
/*!**********************************************!*\
  !*** ./node_modules/split-on-first/index.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "./src/assets/svg/linkedin.svg":
/*!*************************************!*\
  !*** ./src/assets/svg/linkedin.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Linkedin (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}));
}

Linkedin.defaultProps = {"viewBox":"0 0 448 512"};

module.exports = Linkedin;

Linkedin.default = Linkedin;


/***/ }),

/***/ "./src/assets/svg/twitter.svg":
/*!************************************!*\
  !*** ./src/assets/svg/twitter.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Twitter (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}));
}

Twitter.defaultProps = {"viewBox":"0 0 512 512"};

module.exports = Twitter;

Twitter.default = Twitter;


/***/ }),

/***/ "./public/page-data/sq/d/717708846.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/717708846.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"posts":{"nodes":[{"author":{"name":"JP","picture":{"url":"https://media.graphcms.com/iP3Rb3SSXCyyvmxfFsex","size":44305}},"id":"Post:ckqi4qmvsdkfn0a678gprx2ia:PUBLISHED","date":"2021-06-29","slug":"css-sibling-fade","tags":["css","ux","ui"],"title":"CSS Sibling Fade","coverImage":null,"excerpt":"CSS is fun. This is a simple way to fade all elements in a container not actively hovered."},{"author":{"name":"JP","picture":{"url":"https://media.graphcms.com/iP3Rb3SSXCyyvmxfFsex","size":44305}},"id":"Post:ckq14tog08uog0c7238x7n6ol:PUBLISHED","date":"2021-06-17","slug":"programming-dogma-is-exhausting","tags":[],"title":"Programming Dogma Is Exhausting","coverImage":null,"excerpt":"People share their opinions on Twitter a lot. It doesn\'t mean they\'re well intentioned, well informed, or even well thought out."},{"author":{"name":"JP","picture":{"url":"https://media.graphcms.com/iP3Rb3SSXCyyvmxfFsex","size":44305}},"id":"Post:ckpzxsj5k304k0b17aokra195:PUBLISHED","date":"2021-06-16","slug":"javascript-sleep-method","tags":["javascript"],"title":"Javascript Sleep Method","coverImage":null,"excerpt":"Other languages offer a sleep function or something similar natively. "},{"author":{"name":"JP","picture":{"url":"https://media.graphcms.com/iP3Rb3SSXCyyvmxfFsex","size":44305}},"id":"Post:ckpyk1hj4luur0b19xgq7sz8l:PUBLISHED","date":"2021-06-15","slug":"numeric-separators","tags":["javascript"],"title":"Numeric Separators For Large Integers in Javascript","coverImage":null,"excerpt":"I\'ve been writing Javascript for a long time professionally. I never knew this trick..."},{"author":{"name":"JP","picture":{"url":"https://media.graphcms.com/iP3Rb3SSXCyyvmxfFsex","size":44305}},"id":"Post:ckpq4nebc6pk30c7401dyj1ac:PUBLISHED","date":"2021-06-09","slug":"cities-youre-most-likely-to-get-into-a-car-accident","tags":["driving","motorcycles","infographic"],"title":"Cities You\'re Most Likely To Get Into A Car Accident","coverImage":null,"excerpt":"Fun infographic ranking the top 50 cities for car accidents. After living in Seattle for 20+ years their ranking surprised me a bit."},{"author":{"name":"JP","picture":{"url":"https://media.graphcms.com/iP3Rb3SSXCyyvmxfFsex","size":44305}},"id":"Post:ckpoc86swqluz0c28urp5vqmp:PUBLISHED","date":"2021-06-08","slug":"playdate","tags":["playdate","gaming"],"title":"Playdate","coverImage":null,"excerpt":"The Playdate handheld game console is pre-ordering in July and I\'m here for it."},{"author":{"name":"JP","picture":{"url":"https://media.graphcms.com/iP3Rb3SSXCyyvmxfFsex","size":44305}},"id":"Post:ckpixpehs2ahc0c71xg1iof5x:PUBLISHED","date":"2021-06-04","slug":"hello-world","tags":["hello world"],"title":"Hello World","coverImage":null,"excerpt":"Everyone has to start somewhere. For me, this is it."}]}}}');

/***/ }),

/***/ "react-dom/server":
/*!**********************************************************************************************************!*\
  !*** external "/Users/jp.given/dvl/playground/johnpatrickgiven-nextjs/node_modules/react-dom/server.js" ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/jp.given/dvl/playground/johnpatrickgiven-nextjs/node_modules/react-dom/server.js");;

/***/ }),

/***/ "react":
/*!*****************************************************************************************************!*\
  !*** external "/Users/jp.given/dvl/playground/johnpatrickgiven-nextjs/node_modules/react/index.js" ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/jp.given/dvl/playground/johnpatrickgiven-nextjs/node_modules/react/index.js");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************************!*\
  !*** ./.cache/ssr-develop-static-entry.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/concat */ "./node_modules/lodash/concat.js");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqBy */ "./node_modules/lodash/uniqBy.js");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_runner_ssr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");
/* harmony import */ var _api_runner_ssr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_api_runner_ssr__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");
/* harmony import */ var $virtual_ssr_sync_requires__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! $virtual/ssr-sync-requires */ "./.cache/_this_is_virtual_fs_path_/$virtual/ssr-sync-requires");
/* harmony import */ var _route_announcer_props__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./route-announcer-props */ "./.cache/route-announcer-props.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @reach/router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");














 // import testRequireError from "./test-require-error"
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

const testRequireError = (moduleName, err) => {
  const regex = new RegExp(`Error: Cannot find module\\s.${moduleName}`);
  const firstLine = err.toString().split(`\n`)[0];
  return regex.test(firstLine);
};

let cachedStats;

const getStats = publicDir => {
  if (cachedStats) {
    return cachedStats;
  } else {
    cachedStats = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_7___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_9___default().join(publicDir, `webpack.stats.json`), `utf-8`));
    return cachedStats;
  }
};

let Html;

try {
  Html = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError(`../src/html`, err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    console.log(`There was an error requiring "src/html.js"\n\n`, err, `\n\n`);
    process.exit();
  }
}

Html = Html && Html.__esModule ? Html.default : Html;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((pagePath, isClientOnlyPage, publicDir, error, callback) => {
  let bodyHtml = ``;
  let headComponents = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("meta", {
    key: "environment",
    name: "note",
    content: "environment=development"
  })];
  let htmlAttributes = {};
  let bodyAttributes = {};
  let preBodyComponents = [];
  let postBodyComponents = [];
  let bodyProps = {};

  if (error) {
    postBodyComponents.push([/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("script", {
      key: "dev-ssr-error",
      dangerouslySetInnerHTML: {
        __html: `window._gatsbyEvents = window._gatsbyEvents || []; window._gatsbyEvents.push(["FAST_REFRESH", { action: "SHOW_DEV_SSR_ERROR", payload: ${JSON.stringify(error)} }])`
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("noscript", {
      key: "dev-ssr-error-noscript"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h1", null, "Failed to Server Render (SSR)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", null, "Error message:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null, error.sourceMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", null, "File:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null, error.source, ":", error.line, ":", error.column), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", null, "Stack:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, error.stack)))]);
  }

  const generateBodyHTML = () => {
    const setHeadComponents = components => {
      headComponents = headComponents.concat(components);
    };

    const setHtmlAttributes = attributes => {
      htmlAttributes = lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()(htmlAttributes, attributes);
    };

    const setBodyAttributes = attributes => {
      bodyAttributes = lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()(bodyAttributes, attributes);
    };

    const setPreBodyComponents = components => {
      preBodyComponents = preBodyComponents.concat(components);
    };

    const setPostBodyComponents = components => {
      postBodyComponents = postBodyComponents.concat(components);
    };

    const setBodyProps = props => {
      bodyProps = lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()({}, bodyProps, props);
    };

    const getHeadComponents = () => headComponents;

    const replaceHeadComponents = components => {
      headComponents = components;
    };

    const replaceBodyHTMLString = body => {
      bodyHtml = body;
    };

    const getPreBodyComponents = () => preBodyComponents;

    const replacePreBodyComponents = components => {
      preBodyComponents = components;
    };

    const getPostBodyComponents = () => postBodyComponents;

    const replacePostBodyComponents = components => {
      postBodyComponents = components;
    };

    const getPageDataPath = path => {
      const fixedPagePath = path === `/` ? `index` : path;
      return path__WEBPACK_IMPORTED_MODULE_9___default().join(`page-data`, fixedPagePath, `page-data.json`);
    };

    const getPageData = pagePath => {
      const pageDataPath = getPageDataPath(pagePath);
      const absolutePageDataPath = path__WEBPACK_IMPORTED_MODULE_9___default().join(publicDir, pageDataPath);
      const pageDataJson = fs__WEBPACK_IMPORTED_MODULE_7___default().readFileSync(absolutePageDataPath, `utf8`);

      try {
        return JSON.parse(pageDataJson);
      } catch (err) {
        return null;
      }
    };

    const pageData = getPageData(pagePath);
    const {
      componentChunkName,
      staticQueryHashes = []
    } = pageData;

    let scriptsAndStyles = lodash_flatten__WEBPACK_IMPORTED_MODULE_2___default()([`commons`].map(chunkKey => {
      const fetchKey = `assetsByChunkName[${chunkKey}]`;
      const stats = getStats(publicDir);

      let chunks = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(stats, fetchKey);

      const namedChunkGroups = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(stats, `namedChunkGroups`);

      if (!chunks) {
        return null;
      }

      chunks = chunks.map(chunk => {
        if (chunk === `/`) {
          return null;
        }

        return {
          rel: `preload`,
          name: chunk
        };
      });
      namedChunkGroups[chunkKey].assets.forEach(asset => chunks.push({
        rel: `preload`,
        name: asset.name
      }));
      const childAssets = namedChunkGroups[chunkKey].childAssets;

      for (const rel in childAssets) {
        if (childAssets.hasownProperty(rel)) {
          chunks = lodash_concat__WEBPACK_IMPORTED_MODULE_0___default()(chunks, childAssets[rel].map(chunk => {
            return {
              rel,
              name: chunk
            };
          }));
        }
      }

      return chunks;
    })).filter(s => lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(s)).sort((s1, s2) => s1.rel == `preload` ? -1 : 1); // given priority to preload


    scriptsAndStyles = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1___default()(scriptsAndStyles, item => item.name);
    const styles = scriptsAndStyles.filter(style => style.name && style.name.endsWith(`.css`));
    styles.slice(0).reverse().forEach(style => {
      headComponents.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("link", {
        "data-identity": `gatsby-dev-css`,
        key: style.name,
        rel: "stylesheet",
        type: "text/css",
        href: `${""}/${style.name}`
      }));
    });
    const createElement = (react__WEBPACK_IMPORTED_MODULE_6___default().createElement);

    class RouteHandler extends (react__WEBPACK_IMPORTED_MODULE_6___default().Component) {
      render() {
        var _pageData$result, _pageData$result$page;

        const props = { ...this.props,
          ...pageData.result,
          params: { ...(0,_find_path__WEBPACK_IMPORTED_MODULE_11__.grabMatchParams)(this.props.location.pathname),
            ...(((_pageData$result = pageData.result) === null || _pageData$result === void 0 ? void 0 : (_pageData$result$page = _pageData$result.pageContext) === null || _pageData$result$page === void 0 ? void 0 : _pageData$result$page.__params) || {})
          }
        };
        let pageElement;

        if ($virtual_ssr_sync_requires__WEBPACK_IMPORTED_MODULE_12__.ssrComponents[componentChunkName] && !isClientOnlyPage) {
          pageElement = createElement($virtual_ssr_sync_requires__WEBPACK_IMPORTED_MODULE_12__.ssrComponents[componentChunkName], props);
        } else {
          // If this is a client-only page or the pageComponent didn't finish
          // compiling yet, just render an empty component.
          pageElement = () => null;
        }

        const wrappedPage = _api_runner_ssr__WEBPACK_IMPORTED_MODULE_10___default()(`wrapPageElement`, {
          element: pageElement,
          props
        }, pageElement, ({
          result
        }) => {
          return {
            element: result,
            props
          };
        }).pop();
        return wrappedPage;
      }

    }

    const routerElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_reach_router__WEBPACK_IMPORTED_MODULE_14__.ServerLocation, {
      url: `${""}${pagePath}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_reach_router__WEBPACK_IMPORTED_MODULE_14__.Router, {
      id: "gatsby-focus-wrapper",
      baseuri: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(RouteHandler, {
      path: "/*"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", _route_announcer_props__WEBPACK_IMPORTED_MODULE_13__.RouteAnnouncerProps));
    const bodyComponent = _api_runner_ssr__WEBPACK_IMPORTED_MODULE_10___default()(`wrapRootElement`, {
      element: routerElement,
      pathname: pagePath
    }, routerElement, ({
      result
    }) => {
      return {
        element: result,
        pathname: pagePath
      };
    }).pop(); // Let the site or plugin render the page component.

    _api_runner_ssr__WEBPACK_IMPORTED_MODULE_10___default()(`replaceRenderer`, {
      bodyComponent,
      replaceBodyHTMLString,
      setHeadComponents,
      setHtmlAttributes,
      setBodyAttributes,
      setPreBodyComponents,
      setPostBodyComponents,
      setBodyProps,
      pathname: pagePath,
      pathPrefix: ""
    }); // If no one stepped up, we'll handle it.

    if (!bodyHtml) {
      try {
        bodyHtml = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_8__.renderToString)(bodyComponent);
      } catch (e) {
        // ignore @reach/router redirect errors
        if (!(0,_reach_router__WEBPACK_IMPORTED_MODULE_14__.isRedirect)(e)) throw e;
      }
    }

    _api_runner_ssr__WEBPACK_IMPORTED_MODULE_10___default()(`onRenderBody`, {
      setHeadComponents,
      setHtmlAttributes,
      setBodyAttributes,
      setPreBodyComponents,
      setPostBodyComponents,
      setBodyProps,
      pathname: pagePath
    });
    _api_runner_ssr__WEBPACK_IMPORTED_MODULE_10___default()(`onPreRenderHTML`, {
      getHeadComponents,
      replaceHeadComponents,
      getPreBodyComponents,
      replacePreBodyComponents,
      getPostBodyComponents,
      replacePostBodyComponents,
      pathname: pagePath
    });
    return bodyHtml;
  };

  const bodyStr = generateBodyHTML();
  const htmlElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Html, { ...bodyProps,
    body: bodyStr,
    headComponents: headComponents.concat([/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("script", {
      key: `io`,
      src: "/socket.io/socket.io.js"
    })]),
    htmlAttributes,
    bodyAttributes,
    preBodyComponents,
    postBodyComponents: postBodyComponents.concat([/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("script", {
      key: `polyfill`,
      src: "/polyfill.js",
      noModule: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("script", {
      key: `framework`,
      src: "/framework.js"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("script", {
      key: `commons`,
      src: "/commons.js"
    })])
  });
  let htmlStr = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_8__.renderToStaticMarkup)(htmlElement);
  htmlStr = `<!DOCTYPE html>${htmlStr}`;
  callback(null, htmlStr);
});
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=render-page.js.map