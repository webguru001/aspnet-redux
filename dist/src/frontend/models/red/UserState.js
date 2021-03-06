"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************
*                                                       *
*   Generated by ts2redux at 2018-10-20T09:52:23.779Z   *
*   From Source file ../UserState.ts                    *
*                                                       *
********************************************************/
var UserState = /** @class */ (function () {
    function UserState() {
        this.logged = false;
        this.username = 'anonymous';
    }
    UserState.prototype.login = function (loginInfo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    UserState.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    UserState.prototype.fakeLogin = function () {
        this.username = 'Fake Login';
    };
    return UserState;
}());
var immer = require("immer");
var react_redux_1 = require("react-redux");
var React = require("react");
exports.mapStateToProps = function (state) {
    return {
        logged: state.UserState.logged,
        username: state.UserState.username,
        firstName: state.UserState.firstName,
        lastName: state.UserState.lastName,
        lastLogin: state.UserState.lastLogin,
    };
};
exports.mapDispatchToProps = function (dispatch) {
    return {
        login: function (loginInfo) {
            return dispatch(RUserState.login(loginInfo));
        },
        logout: function () {
            return dispatch(RUserState.logout());
        },
        fakeLogin: function () {
            return dispatch(RUserState.fakeLogin());
        },
    };
};
exports.StateConnector = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps);
var init_UserState = function () {
    var o = new UserState();
    return {
        logged: o.logged,
        username: o.username,
        firstName: o.firstName,
        lastName: o.lastName,
        lastLogin: o.lastLogin,
    };
};
/**
 * @generated true
 */
var RUserState = /** @class */ (function () {
    function RUserState(state, dispatch, getState) {
        this._state = state;
        this._dispatch = dispatch;
        this._getState = getState;
    }
    Object.defineProperty(RUserState.prototype, "logged", {
        get: function () {
            if (this._getState) {
                return this._getState().UserState.logged;
            }
            else {
                return this._state.logged;
            }
        },
        set: function (value) {
            if (this._state) {
                this._state.logged = value;
            }
            else {
                // dispatch change for item logged
                this._dispatch({ type: exports.UserStateEnums.UserState_logged, payload: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RUserState.prototype, "username", {
        get: function () {
            if (this._getState) {
                return this._getState().UserState.username;
            }
            else {
                return this._state.username;
            }
        },
        set: function (value) {
            if (this._state) {
                this._state.username = value;
            }
            else {
                // dispatch change for item username
                this._dispatch({ type: exports.UserStateEnums.UserState_username, payload: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RUserState.prototype, "firstName", {
        get: function () {
            if (this._getState) {
                return this._getState().UserState.firstName;
            }
            else {
                return this._state.firstName;
            }
        },
        set: function (value) {
            if (this._state) {
                this._state.firstName = value;
            }
            else {
                // dispatch change for item firstName
                this._dispatch({ type: exports.UserStateEnums.UserState_firstName, payload: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RUserState.prototype, "lastName", {
        get: function () {
            if (this._getState) {
                return this._getState().UserState.lastName;
            }
            else {
                return this._state.lastName;
            }
        },
        set: function (value) {
            if (this._state) {
                this._state.lastName = value;
            }
            else {
                // dispatch change for item lastName
                this._dispatch({ type: exports.UserStateEnums.UserState_lastName, payload: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RUserState.prototype, "lastLogin", {
        get: function () {
            if (this._getState) {
                return this._getState().UserState.lastLogin;
            }
            else {
                return this._state.lastLogin;
            }
        },
        set: function (value) {
            if (this._state) {
                this._state.lastLogin = value;
            }
            else {
                // dispatch change for item lastLogin
                this._dispatch({ type: exports.UserStateEnums.UserState_lastLogin, payload: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    // is task
    RUserState.prototype.login = function (loginInfo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    RUserState.login = function (loginInfo) {
        return function (dispatcher, getState) {
            (new RUserState(null, dispatcher, getState)).login(loginInfo);
        };
    };
    // is task
    RUserState.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    RUserState.logout = function () {
        return function (dispatcher, getState) {
            (new RUserState(null, dispatcher, getState)).logout();
        };
    };
    // is a reducer
    RUserState.prototype.fakeLogin = function () {
        if (this._state) {
            this.username = 'Fake Login';
        }
        else {
            this._dispatch({ type: exports.UserStateEnums.UserState_fakeLogin });
        }
    };
    RUserState.fakeLogin = function () {
        return function (dispatcher, getState) {
            (new RUserState(null, dispatcher, getState)).fakeLogin();
        };
    };
    return RUserState;
}());
exports.RUserState = RUserState;
exports.UserStateEnums = {
    UserState_logged: 'UserState_logged',
    UserState_username: 'UserState_username',
    UserState_firstName: 'UserState_firstName',
    UserState_lastName: 'UserState_lastName',
    UserState_lastLogin: 'UserState_lastLogin',
    UserState_fakeLogin: 'UserState_fakeLogin',
};
exports.UserStateReducer = function (state, action) {
    if (state === void 0) { state = init_UserState(); }
    return immer.produce(state, function (draft) {
        switch (action.type) {
            case exports.UserStateEnums.UserState_logged:
                (new RUserState(draft)).logged = action.payload;
                break;
            case exports.UserStateEnums.UserState_username:
                (new RUserState(draft)).username = action.payload;
                break;
            case exports.UserStateEnums.UserState_firstName:
                (new RUserState(draft)).firstName = action.payload;
                break;
            case exports.UserStateEnums.UserState_lastName:
                (new RUserState(draft)).lastName = action.payload;
                break;
            case exports.UserStateEnums.UserState_lastLogin:
                (new RUserState(draft)).lastLogin = action.payload;
                break;
            case exports.UserStateEnums.UserState_fakeLogin:
                (new RUserState(draft)).fakeLogin();
                break;
        }
    });
};
/***************************
* React Context API test   *
***************************/
exports.UserStateContext = React.createContext(null);
exports.UserStateConsumer = exports.UserStateContext.Consumer;
var instanceCnt = 1;
var UserStateProvider = /** @class */ (function (_super) {
    __extends(UserStateProvider, _super);
    function UserStateProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = init_UserState();
        _this.__devTools = null;
        _this.login = _this.login.bind(_this);
        _this.logout = _this.logout.bind(_this);
        _this.fakeLogin = _this.fakeLogin.bind(_this);
        var devs = window['devToolsExtension'] ? window['devToolsExtension'] : null;
        if (devs) {
            _this.__devTools = devs.connect({ name: 'UserState' + instanceCnt++ });
            _this.__devTools.init(_this.state);
            _this.__devTools.subscribe(function (msg) {
                if (msg.type === 'DISPATCH' && msg.state) {
                    _this.setState(JSON.parse(msg.state));
                }
            });
        }
        return _this;
    }
    UserStateProvider.prototype.componentWillUnmount = function () {
        if (this.__devTools)
            this.__devTools.unsubscribe();
    };
    UserStateProvider.prototype.login = function (loginInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                (new RUserState(null, function (action) {
                    var nextState = exports.UserStateReducer(_this.state, action);
                    if (_this.__devTools)
                        _this.__devTools.send(action.type, nextState);
                    _this.setState(nextState);
                }, function () { return ({ UserState: _this.state }); })).login(loginInfo);
                return [2 /*return*/];
            });
        });
    };
    UserStateProvider.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                (new RUserState(null, function (action) {
                    var nextState = exports.UserStateReducer(_this.state, action);
                    if (_this.__devTools)
                        _this.__devTools.send(action.type, nextState);
                    _this.setState(nextState);
                }, function () { return ({ UserState: _this.state }); })).logout();
                return [2 /*return*/];
            });
        });
    };
    UserStateProvider.prototype.fakeLogin = function () {
        var nextState = immer.produce(this.state, function (draft) { return (new RUserState(draft)).fakeLogin(); });
        if (this.__devTools)
            this.__devTools.send('fakeLogin', nextState);
        this.setState(nextState);
    };
    UserStateProvider.prototype.render = function () {
        return (React.createElement(exports.UserStateContext.Provider, { value: __assign({}, this.state, { login: this.login, logout: this.logout, fakeLogin: this.fakeLogin }) },
            " ",
            this.props.children));
    };
    return UserStateProvider;
}(React.Component));
exports.UserStateProvider = UserStateProvider;
//# sourceMappingURL=UserState.js.map