/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import { Route } from 'react-router-dom'

// import UsersListPage, { loadData } from './pages/UsersListPage'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(23);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(19);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UsersListPage = __webpack_require__(20);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _NotFoundPage = __webpack_require__(26);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AdminsListPage = __webpack_require__(28);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route path="/users" component={UsersList} />
//         </div>
//     )
// }


// Using react-router-config package for SSR (official part of react-router)
// Include the loadData functions
exports.default = [_extends({}, _App2.default, { // Because we aren't tying a path to App, it will always be displayed on screen
    routes: [// Child routes of App
    _extends({}, _HomePage2.default, { // component: HomePage,
        path: '/',
        exact: true
    }), _extends({}, _UsersListPage2.default, {
        path: '/users'
        // loadData: loadData,
        // component: UsersListPage
    }), _extends({}, _AdminsListPage2.default, {
        path: '/admins'
    }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//import axios from 'axios'


var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';

// We are receiving a custom instance of axios - calling it the 'api'... the customized axios instance will turn this into /api/users... send it to our renderer server, which will proxy the request on to the api server
var fetchUsers = exports.fetchUsers = function fetchUsers() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get('/users');

                        case 2:
                            res = _context.sent;

                            dispatch({
                                type: FETCH_USERS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return api.get('/current_user');

                        case 2:
                            res = _context2.sent;

                            dispatch({
                                type: FETCH_CURRENT_USER,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return api.get('/admins');

                        case 2:
                            res = _context3.sent;

                            dispatch({
                                type: FETCH_ADMINS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(1);

var _expressHttpProxy = __webpack_require__(22);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _renderer = __webpack_require__(9);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(15);

var _createStore2 = _interopRequireDefault(_createStore);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Anything we get intended for the API... forward it along to the API
// Because we HAVE to use cookie auth for SSR, use a proxy to pass requests off to the api server

// CommonJS module system - default nodejs stuff
// const express = require('express')
// const React = require('react')
// const renderToString = require('react-dom/server').renderToString

// const Home = require('./client/components/Home').default

// But because we are running index.js through webpack... we can use ES6 syntax - good because same code syntax as on client

// Allow babel to use new features, like async await
app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com/', {
    proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
        // The api server he built uses Google OAuth... and we need to do some config to make sure that our proxy doesn't break the OAuth flow
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
})); // Any requests that are sent to /api will be automatically passed off to the api server
app.use(_express2.default.static('public')); // tells express to use the public directory as a static directory available to the public


app.get('*', function (req, res) {
    // Pass in the original request, because this request object includes all the cookies sent!
    var store = (0, _createStore2.default)(req);

    // Figure out which components should be rendered... so we know which components we expect to need to load data async for...
    // then loop over the results and, if it exists, call the loadData method. Pass in the server side redux store, so they can dispatch and interact with it
    // const promises = matchRoutes(Routes, req.path)   // return array of components
    //     .map( ({ route }) => {
    //         return route.loadData ? route.loadData(store) : null;
    //     });  // Return an array of promises, since we're calling loadData(), which returns async promises

    // ERROR HANDLING SOLUTION #3 - wrap each promise with a wrapper promise
    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path) // return array of components
    .map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store) : null;
    }) // Return an array of promises, since we're calling loadData(), which returns async promises
    .map(function (promise) {
        // Make sure it's not null
        if (promise) {
            return new Promise(function (resolve, reject) {
                // When the inner promise gets resolved or rejected...
                promise.then(resolve).catch(resolve);
            });
        }
    });

    // Wait for all the loadData() calls to finish their async calls
    Promise.all(promises).then(function () {

        var context = {}; // Define a context, see notes in renderer.js for more details.
        // Pass the initialized store to the renderer
        var content = (0, _renderer2.default)(req, store, context);

        // console.log('context is:')
        // console.log(context)
        // If the URL property is set on the context, that means it is trying to be redirected by React
        if (context.url) {
            // console.log('Redirecting')
            // WARNING - Chrome caches redirect commands... when developing, dev tools -> network tab -> disable cache... in order for this to actually be executed, otherwise Chrome will redirect to "/" on it's own, and the /admins route will never even be hit on our server!
            return res.redirect(302, context.url);
        }
        // This property gets set on the context, on that notFound page
        if (context.notFound) {
            // console.log('Page not found')
            res.status(404);
        }

        res.send(content);
    });
    // ERROR HANDLING SOLUTION #1
    // If you try to access /admins fresh, and you aren't authorized... or for ANY reason the Promise.all() doesn't successfully complete...
    // NOT RECOMMENDED - abandon the whole server side rendering process and just send a message... don't even try to render the app
    // .catch( () => {
    //     res.send('Something went wrong')
    // })
    // ERROR HANDLING SOLUTION #2
    // Also not recommended
    // Pull out the code inside .then() into a function...
    // ... and then not only call that function from the .then() function, but do the same thing from the .catch() statement
    // So we always render our app - whether there was any error or not
    // The problem with this approach is that if any request fails, it INSTANTLY goes to the .catch() function... even if all of the others would be successful
    // ... so we'd render our app with missing data from the other requests
    // ERROR HANDLING SOLUTION #3 - best option we have
    // Wrap each promise with another outer promise...
    // Whenever the inner promise succeeds/fails, we manually resolve the outer wrapper promise as success

});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(10);

var _reactRouterDom = __webpack_require__(11);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(1);

var _serializeJavascript = __webpack_require__(21);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(30);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// BrowserRouter bases what component to show off the of the URL... But there is no URL bar on the server!
// Instead use StaticRouter - part of React specifically for SSR!
// Getting an error in the Chrome console about expecting div in div means there was a mismatch between what the server sent, vs what React thought should be there on hydration
// Context prop is required, started out with empty object, which allows the rendered content to talk with the StaticRouter after it's been rendered... Context object ends up as a prop in each page

// We need to communicate the current path the user is trying to access, so the StaticRouter knows which component to show... which is part of the original request object to Express... take as argument... and use the location prop
// The redux "createStore" is being passed in from index.js rather than building it here, because that will be complicated

// Use this library to set meta tags for SEO, and FB./Twitter displaying page previews. There are a minimum 4 tags required, see docs... this tutorial will only bother with the first (the title)
// In fact, we can set any head tags with it! (It was made by the NFL, hence the name "helmet" for stuff related to the head tag)
// House a function that will render our React app and return it as a string

exports.default = function (req, store, context) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { context: context, location: req.path },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));

    // renderStatic returns an object of all the header tags we rendered up in the library
    var helmet = _reactHelmet.Helmet.renderStatic();

    // We need to hydrate the redux store too - pass the store to the global window object in a JS variable
    // COULD do this:
    // <script>
    //     window.INITIAL_STATE = ${JSON.stringify(store.getState())}
    // </script>
    // But that is dangerous! It's open to XXS attacks!
    // Instead, scrub the data in the store to make sure it doesn't get executed
    // So... use a library called serialize-javascript!

    // The script tag pulls in the bundle.js from the public directory - our 'actual' React app... instead of just that string of HTML
    // All the meta tags get pulled out with that one .toString() function call
    return '\n        <html>\n        <head>\n            ' + helmet.title.toString() + '\n            ' + helmet.meta.toString() + '\n            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">\n        </head>\n        <body>\n            <div id="root">' + content + '</div>\n            <script>\n                window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n            </script>\n            <script src="bundle.js"></script>\n        </body>\n        </html>\n    ';
};
// Choose the renderToString() from the server part of react-dom... returns a bunch of javascript and HTML
// Looking at the alternatives...
// renderToStaticMarkup() 
// returns HTML that is not intended to be rehydrated
// renderToNodeStream()
// returns a stream that outputs an HTML string... and the stream is the exactly the same as the result of renderToString()... but it's a stream instead of a string
// which is great for when your page is really really long... responding with lots of tiny snippets of HTML
// which can be really important for TTFB - Time To First Byte... for loading the page... Chrome Dev Tools -> Network tab -> pick request -> Timing tab
// Request sent is how long it took to get our request from the browser to the server
// TTFB is how long it took until we got data from the server  <-- Important for Google on ranking how responsive & quick loading your site is
// and of course Content Download is how long it took to download our content
// The big problem with this is that when you call the renderer function, you immediately start sending the response back to the user...
// So before you've finished rendering the content, you're already sending the content back to the user
// So if you come across, while rendering, a component.. like the requireAuth component... and the requireAuth needs to redirect you... then you can't do it! Because the response is already being streamed! You can't change the status code, it's too late!
// ... so unless you're building a really big page, it's not worth the tradeoff of performance vs functionality

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(5);

var _reduxThunk = __webpack_require__(16);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(17);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {

    // Here on the server, axios should be directed towards the API server itself... instead of how the client is setup to point at this localhost server
    // We want to pass along the cookie, if it has one, along to the API server
    var axiosInstance = _axios2.default.create({
        baseURL: 'https://react-ssr-api.herokuapp.com/',
        headers: { cookie: req.get('cookie') || '' }
    });

    // Pass the custom axios instance along to thunk middleware, so that it passes along this custom axios to the action creators
    // The action creators no longer bring in their own instance of axios
    // Unless that action creator wanted to make a call to facebook or instagram... then it should still pull in it's own axios
    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

    return store;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(5);

var _usersReducer = __webpack_require__(18);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(25);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(27);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    users: _usersReducer2.default,
    auth: _authReducer2.default,
    admins: _adminsReducer2.default
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(4);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        'div',
        { className: 'center-align', style: { marginTop: '200px' } },
        _react2.default.createElement(
            'h3',
            null,
            'Welcome'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Check out these awesome features'
        )
    );
};

exports.default = {
    component: Home
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(30);

var _actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
    _inherits(UsersList, _Component);

    function UsersList() {
        _classCallCheck(this, UsersList);

        return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
    }

    _createClass(UsersList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchUsers();
        }
    }, {
        key: 'renderUsers',
        value: function renderUsers() {
            return this.props.users.map(function (user) {
                return _react2.default.createElement(
                    'li',
                    { key: user.id },
                    user.name
                );
            });
        }

        // Helmet expects ONE SINGLE STRING..... so this will not work: <title>{this.props.users.length} Users Loaded</title>
        // Just wrap the whole thing as an ES6 string

    }, {
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    this.props.users.length + ' Users Loaded'
                ),
                _react2.default.createElement('meta', { property: 'og:title', content: 'Users App' })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.head(),
                'Here\'s a big list of users:',
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderUsers()
                )
            );
        }
    }]);

    return UsersList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return { users: state.users };
};

// SSR setup - this gets called from the server to get data asynchronously
// Each component gets a loadData() function so we can call it during SSR

// Have the store dispatch whatever action comes back from our action creator
// Return all that, so that the server can play with it

function loadData(store) {
    return store.dispatch((0, _actions.fetchUsers)()); // the action creator returns a promise, which gets dispatched to the store
}

// export { loadData }   // named export


// export default connect(mapStateToProps, { fetchUsers })(UsersList)


exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersList),
    loadData: loadData
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(1);

var _Header = __webpack_require__(24);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Because of the way we are setting up child routes in Routes.js... the App component will get a "route" property with a "routes" property
var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

// Since this is integrated into the Routes file, it has the option to have a loadData function... vs the Header function that isn't listed in Routes...
// ... so even though it's the Header that wants the data, it's this file that has to get the data for it
// Since this loadData would be so small... just do it in line as an arrow function

exports.default = {
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _actions.fetchCurrentUser)());
    },
    component: App
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var auth = _ref.auth;

    console.log('My auth status is:');
    console.log(auth);

    // Use an a tag to make a whole new request]
    // Not 100% sure why we have to do this... I think it has to do with the Google OAuth
    var authButton = auth ? _react2.default.createElement(
        'a',
        { href: '/api/logout' },
        'Logout'
    ) : _react2.default.createElement(
        'a',
        { href: '/api/auth/google' },
        'Login'
    );

    return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
            'div',
            { className: 'nav-wrapper' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/', className: 'brand-logo' },
                'React SSR'
            ),
            _react2.default.createElement(
                'ul',
                { className: 'right' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/users' },
                        'Users'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/admins' },
                        'Admins'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/blah' },
                        'Blah'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    authButton
                )
            )
        )
    );
};

function mapStateToProps(_ref2) {
    var auth = _ref2.auth;

    return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};

var _actions = __webpack_require__(4);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// context gets passed as prop named staticContext
// Only the static router implments staticContext... on the BrowserRouter this will be empty!
var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.notFound = true; // We will be able to look at this on the server, since this is the server-rendered context on the server side
    return _react2.default.createElement(
        'h1',
        null,
        'Opps, route not found.'
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(4);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_ADMINS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(4);

var _requireAuth = __webpack_require__(29);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// We can either do the auth guard here, or in Routes.js... but since we're using the spread operator in Routes.js, we can't really do it there... so wrap it here instead.


var AdminsListPage = function (_Component) {
    _inherits(AdminsListPage, _Component);

    function AdminsListPage() {
        _classCallCheck(this, AdminsListPage);

        return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
    }

    _createClass(AdminsListPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchAdmins();
        }
    }, {
        key: 'renderAdmins',
        value: function renderAdmins() {
            return this.props.admins.map(function (admin) {
                return _react2.default.createElement(
                    'li',
                    { key: admin.id },
                    admin.name
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'Protected list of admins:',
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderAdmins()
                )
            );
        }
    }]);

    return AdminsListPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return { admins: state.admins };
};

// Pull dispatch out of the store we receive
function loadData(_ref) {
    var dispatch = _ref.dispatch;

    return dispatch((0, _actions.fetchAdmins)());
}

// Pass the AdminsListPage to the requireAuth HigherOrderComponent
exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminsListPage)),
    loadData: loadData
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Higher order components are always functions...
// convention is for file name to be lowercase

exports.default = function (ChildComponent) {
    var RequireAuth = function (_Component) {
        _inherits(RequireAuth, _Component);

        function RequireAuth() {
            _classCallCheck(this, RequireAuth);

            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
        }

        _createClass(RequireAuth, [{
            key: 'render',
            value: function render() {
                switch (this.props.auth) {
                    case false:
                        // Redirect them to the home page
                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
                    case null:
                        // We haven't gotten an answer yet
                        return _react2.default.createElement(
                            'div',
                            null,
                            'Loading...'
                        );
                    default:
                        // Assume we successfully received authentication, show the child component
                        return _react2.default.createElement(ChildComponent, this.props);
                }
            }
        }]);

        return RequireAuth;
    }(_react.Component);

    function mapStateToProps(_ref) {
        var auth = _ref.auth;

        return { auth: auth };
    }

    return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })
/******/ ]);