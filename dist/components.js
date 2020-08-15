(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(require("react"), require("react-jss"), require("highlight.js")); else if (typeof define === "function" && define.amd) define([ "react", "react-jss", "highlight.js" ], factory); else {
        var a = typeof exports === "object" ? factory(require("react"), require("react-jss"), require("highlight.js")) : factory(root["react"], root["react-jss"], root["highlight.js"]);
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__) {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.r = function(exports) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
        __webpack_require__.t = function(value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 7);
    }([ function(module, exports, __webpack_require__) {
        if (false) {
            var throwOnDirectAccess, ReactIs;
        } else {
            module.exports = __webpack_require__(5)();
        }
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__1__;
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        (function() {
            "use strict";
            var hasOwn = {}.hasOwnProperty;
            function classNames() {
                var classes = [];
                for (var i = 0; i < arguments.length; i++) {
                    var arg = arguments[i];
                    if (!arg) continue;
                    var argType = typeof arg;
                    if (argType === "string" || argType === "number") {
                        classes.push(arg);
                    } else if (Array.isArray(arg) && arg.length) {
                        var inner = classNames.apply(null, arg);
                        if (inner) {
                            classes.push(inner);
                        }
                    } else if (argType === "object") {
                        for (var key in arg) {
                            if (hasOwn.call(arg, key) && arg[key]) {
                                classes.push(key);
                            }
                        }
                    }
                }
                return classes.join(" ");
            }
            if (true && module.exports) {
                classNames.default = classNames;
                module.exports = classNames;
            } else if (true) {
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return classNames;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else {}
        })();
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__3__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__4__;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var ReactPropTypesSecret = __webpack_require__(6);
        function emptyFunction() {}
        function emptyFunctionWithReset() {}
        emptyFunctionWithReset.resetWarningCache = emptyFunction;
        module.exports = function() {
            function shim(props, propName, componentName, location, propFullName, secret) {
                if (secret === ReactPropTypesSecret) {
                    return;
                }
                var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. " + "Use PropTypes.checkPropTypes() to call them. " + "Read more at http://fb.me/use-check-prop-types");
                err.name = "Invariant Violation";
                throw err;
            }
            shim.isRequired = shim;
            function getShim() {
                return shim;
            }
            var ReactPropTypes = {
                array: shim,
                bool: shim,
                func: shim,
                number: shim,
                object: shim,
                string: shim,
                symbol: shim,
                any: shim,
                arrayOf: getShim,
                element: shim,
                elementType: shim,
                instanceOf: getShim,
                node: shim,
                objectOf: getShim,
                oneOf: getShim,
                oneOfType: getShim,
                shape: getShim,
                exact: getShim,
                checkPropTypes: emptyFunctionWithReset,
                resetWarningCache: emptyFunction
            };
            ReactPropTypes.PropTypes = ReactPropTypes;
            return ReactPropTypes;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        module.exports = ReactPropTypesSecret;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "AJButton", function() {
            return src_AJButton;
        });
        __webpack_require__.d(__webpack_exports__, "AJCodeSnippet", function() {
            return src_AJCodeSnippet;
        });
        __webpack_require__.d(__webpack_exports__, "AJContainedButton", function() {
            return src_AJContainedButton;
        });
        __webpack_require__.d(__webpack_exports__, "AJLoadingDots", function() {
            return src_AJLoadingDots;
        });
        __webpack_require__.d(__webpack_exports__, "AJMobileHamburger", function() {
            return src_AJMobileHamburger;
        });
        __webpack_require__.d(__webpack_exports__, "AJModal", function() {
            return src_AJModal;
        });
        __webpack_require__.d(__webpack_exports__, "AJNavCircle", function() {
            return src_AJNavCircle;
        });
        __webpack_require__.d(__webpack_exports__, "AJNavList", function() {
            return src_AJNavList;
        });
        __webpack_require__.d(__webpack_exports__, "AJNavTextCircle", function() {
            return src_AJNavTextCircle;
        });
        __webpack_require__.d(__webpack_exports__, "AJNotificationCircle", function() {
            return src_AJNotificationCircle;
        });
        __webpack_require__.d(__webpack_exports__, "AJOutlinedButton", function() {
            return src_AJOutlinedButton;
        });
        __webpack_require__.d(__webpack_exports__, "AJResponsiveGrid", function() {
            return src_AJResponsiveGrid;
        });
        __webpack_require__.d(__webpack_exports__, "AJSwitchIcon", function() {
            return src_AJSwitchIcon;
        });
        __webpack_require__.d(__webpack_exports__, "AJSwitch", function() {
            return src_AJSwitch;
        });
        __webpack_require__.d(__webpack_exports__, "AJTag", function() {
            return src_AJTag;
        });
        __webpack_require__.d(__webpack_exports__, "AJTagImage", function() {
            return src_AJTagImage;
        });
        __webpack_require__.d(__webpack_exports__, "AJTextButton", function() {
            return src_AJTextButton;
        });
        __webpack_require__.d(__webpack_exports__, "AJTextCard", function() {
            return src_AJTextCard;
        });
        var external_react_ = __webpack_require__(1);
        var external_react_default = __webpack_require__.n(external_react_);
        var prop_types = __webpack_require__(0);
        var prop_types_default = __webpack_require__.n(prop_types);
        var AJButton = Object(external_react_["forwardRef"])(function(_ref, ref) {
            var type = _ref.type, children = _ref.children, onClick = _ref.onClick, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, className = _ref.className;
            switch (type) {
              case "contained":
                return external_react_default.a.createElement(src_AJContainedButton, {
                    onClick: onClick,
                    disabled: disabled,
                    ref: ref,
                    className: className
                }, children);

              case "outlined":
                return external_react_default.a.createElement(src_AJOutlinedButton, {
                    onClick: onClick,
                    disabled: disabled,
                    ref: ref,
                    className: className
                }, children);

              case "text":
                return external_react_default.a.createElement(src_AJTextButton, {
                    onClick: onClick,
                    disabled: disabled,
                    ref: ref,
                    className: className
                }, children);

              default:
                return null;
            }
        });
        AJButton.propTypes = {
            type: prop_types_default.a.oneOf([ "contained", "outlined", "text" ]).isRequired,
            children: prop_types_default.a.node.isRequired,
            onClick: prop_types_default.a.func,
            disabled: prop_types_default.a.bool,
            className: prop_types_default.a.string
        };
        var AJButton_AJButton = AJButton;
        var src_AJButton = AJButton_AJButton;
        var external_react_jss_ = __webpack_require__(3);
        var external_highlight_js_ = __webpack_require__(4);
        var external_highlight_js_default = __webpack_require__.n(external_highlight_js_);
        var classnames = __webpack_require__(2);
        var classnames_default = __webpack_require__.n(classnames);
        var _before;
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
        var styles = {
            hljs: {
                display: "block",
                overflowX: "auto",
                padding: "16px 8px 16px 16px",
                color: "#ddd",
                fontSize: "18px",
                whiteSpace: "pre",
                lineHeight: 1.4,
                borderRadius: "2px",
                backgroundColor: "#333",
                transition: "all .4s ease",
                boxShadow: "0 1px 3px rgba(170, 170, 170, 0.1)",
                "-webkit-overflow-scrolling": "touch",
                "-webkit-transition": "revert",
                "&:hover": {
                    boxShadow: "0 1px 3px rgba(170, 170, 170, 0.8)"
                },
                "&:before": (_before = {
                    content: "attr(title)",
                    display: "block",
                    fontSize: "14px",
                    color: "#aaa",
                    position: "sticky",
                    left: "90%",
                    float: "right"
                }, _defineProperty(_before, "@media screen and (max-width: 700px)", {
                    marginRight: "5px",
                    left: "88%"
                }), _defineProperty(_before, "@media screen and (max-width: 480px)", {
                    marginRight: "10px",
                    left: "85%"
                }), _before),
                "& .hljs-comment, & .hljs-quote": {
                    color: "#5c6370",
                    fontStyle: "italic"
                },
                "& .hljs-doctag, & .hljs-keyword, & .hljs-formula": {
                    color: "#c678dd"
                },
                "& .hljs-section, & .hljs-name, & .hljs-selector-tag, & .hljs-deletion, & .hljs-subst": {
                    color: "#e06c75"
                },
                "& .hljs-literal": {
                    color: "#56b6c2"
                },
                "& .hljs-string, & .hljs-regexp, & .hljs-addition, & .hljs-attribute, & .hljs-meta-string": {
                    color: "#98c379"
                },
                "& .hljs-built_in, & .hljs-class .hljs-title": {
                    color: "#e6c07b"
                },
                "& .hljs-attr, & .hljs-variable, & .hljs-template-variable, & .hljs-type": {
                    color: "#d19a66"
                },
                "& .hljs-selector-class, & .hljs-selector-attr, & .hljs-selector-pseudo, & .hljs-number": {
                    color: "#d19a66"
                },
                "& .hljs-symbol, & .hljs-bullet, & .hljs-link, & .hljs-meta, & .hljs-selector-id": {
                    color: "#61aeee"
                },
                "& .hljs-title": {
                    color: "#61aeee"
                },
                "& .hljs-emphasis": {
                    fontStyle: "italic"
                },
                "& .hljs-strong": {
                    fontWeight: "bold"
                },
                "& .hljs-link": {
                    textDecoration: "underline"
                }
            }
        };
        var useStyles = Object(external_react_jss_["createUseStyles"])(styles);
        var AJCodeSnippet_AJCodeSnippet = function AJCodeSnippet(_ref) {
            var children = _ref.children, language = _ref.language, className = _ref.className;
            var classes = useStyles();
            var languages = {
                javascript: {
                    title: "JavaScript",
                    name: "javascript",
                    className: "javascript"
                },
                java: {
                    title: "Java",
                    name: "java",
                    className: "java"
                }
            };
            var lang = languages[language] || languages.javascript;
            if (!language) {
                lang.title = "";
            }
            var highlightedCode;
            Object(external_react_["useEffect"])(function() {
                external_highlight_js_default.a.initHighlightingOnLoad();
                external_highlight_js_default.a.highlightBlock(highlightedCode);
            });
            return external_react_default.a.createElement("div", {
                className: classnames_default()("aj-code-snippet", className)
            }, external_react_default.a.createElement("code", {
                title: lang.title,
                className: classnames_default()(lang.className, classes.hljs),
                ref: function ref(element) {
                    return highlightedCode = element;
                }
            }, children));
        };
        AJCodeSnippet_AJCodeSnippet.propTypes = {
            children: prop_types_default.a.node.isRequired,
            language: prop_types_default.a.oneOf([ "java", "javascript" ]),
            className: prop_types_default.a.string
        };
        var src_AJCodeSnippet_AJCodeSnippet = AJCodeSnippet_AJCodeSnippet;
        var src_AJCodeSnippet = src_AJCodeSnippet_AJCodeSnippet;
        var AJContainedButton_styles = {
            ajContainedButton: {
                padding: "10px",
                transition: "background-color 0.25s ease",
                borderRadius: "4px",
                "& button": {
                    backgroundColor: "transparent"
                }
            },
            ajContainedButtonEnabled: {
                backgroundColor: "#bbb",
                "&:active": {
                    backgroundColor: "#ccc"
                },
                "& button": {
                    color: "#555",
                    transition: "color 0.25s ease",
                    "&:active": {
                        color: "#222"
                    }
                }
            },
            ajContainedButtonDisabled: {
                backgroundColor: "#eee",
                "& button": {
                    color: "#999"
                }
            }
        };
        var AJBaseButton_styles = {
            ajBaseButton: {
                display: "inline-block",
                cursor: "pointer",
                "& button": {
                    border: "none"
                },
                "&:focus, & > button:focus": {
                    outline: "none"
                }
            },
            ajBaseButtonEnabled: {
                cursor: "pointer",
                "& button": {
                    cursor: "pointer"
                }
            },
            ajBaseButtonDisabled: {
                cursor: "not-allowed",
                "& button": {
                    cursor: "not-allowed"
                }
            }
        };
        var AJBaseButton_useStyles = Object(external_react_jss_["createUseStyles"])(AJBaseButton_styles);
        var AJBaseButton = Object(external_react_["forwardRef"])(function(_ref, ref) {
            var children = _ref.children, onClick = _ref.onClick, disabledClasses = _ref.disabledClasses, enabledClasses = _ref.enabledClasses, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, className = _ref.className;
            var classes = AJBaseButton_useStyles();
            var finalClassNames = disabled ? classnames_default()(classes.ajBaseButton, classes.ajBaseButtonDisabled, disabledClasses, className) : classnames_default()(classes.ajBaseButton, classes.ajBaseButtonEnabled, enabledClasses, className);
            var onClickAction = disabled ? null : onClick;
            return external_react_default.a.createElement("div", {
                className: finalClassNames,
                onClick: onClickAction,
                ref: ref
            }, external_react_default.a.createElement("button", {
                type: "button",
                disabled: disabled
            }, children));
        });
        AJBaseButton.propTypes = {
            children: prop_types_default.a.node.isRequired,
            onClick: prop_types_default.a.func,
            disabled: prop_types_default.a.bool,
            enabledClasses: prop_types_default.a.array,
            disabledClasses: prop_types_default.a.array,
            className: prop_types_default.a.string
        };
        var AJBaseButton_AJBaseButton = AJBaseButton;
        var AJContainedButton_useStyles = Object(external_react_jss_["createUseStyles"])(AJContainedButton_styles);
        var AJContainedButton = Object(external_react_["forwardRef"])(function(_ref, ref) {
            var children = _ref.children, onClick = _ref.onClick, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, className = _ref.className;
            var classes = AJContainedButton_useStyles();
            var enabledClasses = [ "aj-contained-button", classes.ajContainedButton, classes.ajContainedButtonEnabled ];
            var disabledClasses = [ "aj-contained-button", classes.ajContainedButton, classes.ajContainedButtonDisabled ];
            return external_react_default.a.createElement(AJBaseButton_AJBaseButton, {
                onClick: onClick,
                disabled: disabled,
                enabledClasses: enabledClasses,
                disabledClasses: disabledClasses,
                className: className,
                ref: ref
            }, children);
        });
        AJContainedButton.propTypes = {
            children: prop_types_default.a.node.isRequired,
            onClick: prop_types_default.a.func,
            disabled: prop_types_default.a.bool,
            className: prop_types_default.a.string
        };
        var AJContainedButton_AJContainedButton = AJContainedButton;
        var src_AJContainedButton = AJContainedButton_AJContainedButton;
        var AJLoadingDots_styles = {
            container: {
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "100%"
            },
            circle: {
                backgroundColor: "#333",
                width: 40,
                height: 40,
                borderRadius: "50%",
                margin: 5,
                opacity: 0,
                animation: "$fade 1s infinite"
            },
            first: {
                animationDelay: "0s"
            },
            second: {
                animationDelay: "0.25s"
            },
            third: {
                animationDelay: "0.5s"
            },
            "@keyframes fade": {
                "0%": {
                    opacity: 0
                },
                "20%": {
                    opacity: 1
                },
                "100%": {
                    opacity: 0
                }
            }
        };
        var AJLoadingDots_useStyles = Object(external_react_jss_["createUseStyles"])(AJLoadingDots_styles);
        var AJLoadingDots_AJLoadingDots = function AJLoadingDots(_ref) {
            var className = _ref.className;
            var classes = AJLoadingDots_useStyles();
            return external_react_default.a.createElement("div", {
                className: classnames_default()("aj-loading-dots", classes.container, className)
            }, external_react_default.a.createElement("div", {
                className: classnames_default()("aj-loading-circle", classes.circle, classes.first)
            }), external_react_default.a.createElement("div", {
                className: classnames_default()("aj-loading-circle", classes.circle, classes.second)
            }), external_react_default.a.createElement("div", {
                className: classnames_default()("aj-loading-circle", classes.circle, classes.third)
            }));
        };
        AJLoadingDots_AJLoadingDots.propTypes = {
            className: prop_types_default.a.string
        };
        var src_AJLoadingDots_AJLoadingDots = AJLoadingDots_AJLoadingDots;
        var src_AJLoadingDots = src_AJLoadingDots_AJLoadingDots;
        var AJMobileHamburger_styles = {
            ajMobileHamburger: {
                display: "inline-block",
                cursor: "pointer",
                height: "3px",
                width: "25px",
                padding: "10px 2px",
                "& > button": {
                    display: "block",
                    padding: 0,
                    border: "none",
                    backgroundColor: "transparent",
                    "&:focus": {
                        outline: "none"
                    },
                    "& > span, & > span:before, & > span:after": {
                        height: "3px",
                        width: "25px",
                        borderRadius: "1px",
                        display: "block",
                        cursor: "pointer",
                        backgroundColor: "black",
                        position: "absolute",
                        content: '""',
                        transition: "all 50ms ease"
                    },
                    "& > span:before": {
                        top: "-8px"
                    },
                    "& > span:after": {
                        top: "8px"
                    }
                }
            },
            ajMobileHamburgerActive: {
                backgroundColor: "transparent !important",
                "&:before": {
                    top: "0 !important",
                    transform: "rotate(45deg)"
                },
                "&:after": {
                    top: "0 !important",
                    transform: "rotate(-45deg)"
                }
            },
            ajMobileHamburgerInactive: {}
        };
        function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function _iterableToArrayLimit(arr, i) {
            if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
                return;
            }
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var AJMobileHamburger_useStyles = Object(external_react_jss_["createUseStyles"])(AJMobileHamburger_styles);
        var AJMobileHamburger = Object(external_react_["forwardRef"])(function(_ref, ref) {
            var onClick = _ref.onClick, className = _ref.className;
            var classes = AJMobileHamburger_useStyles();
            var _useState = Object(external_react_["useState"])(false), _useState2 = _slicedToArray(_useState, 2), active = _useState2[0], setActive = _useState2[1];
            var spanClassName = active ? classnames_default()("aj-mobile-hamburger-active", classes.ajMobileHamburgerActive) : classnames_default()("aj-mobile-hamburger-inactive", classes.ajMobileHamburgerInactive);
            var hamburgerClasses = classnames_default()("aj-mobile-hamburger", classes.ajMobileHamburger, className);
            var onClickAction = function onClickAction() {
                setActive(!active);
                if (onClick) {
                    onClick();
                }
            };
            return external_react_default.a.createElement("div", {
                className: hamburgerClasses,
                onClick: onClickAction,
                ref: ref
            }, external_react_default.a.createElement("button", {
                type: "button"
            }, external_react_default.a.createElement("span", {
                className: spanClassName
            })));
        });
        AJMobileHamburger.propTypes = {
            onClick: prop_types_default.a.func,
            className: prop_types_default.a.string
        };
        var AJMobileHamburger_AJMobileHamburger = AJMobileHamburger;
        var src_AJMobileHamburger = AJMobileHamburger_AJMobileHamburger;
        var AJModal_styles = {
            ajModal: {
                background: "white",
                borderRadius: "3px",
                top: "50%",
                left: "50%",
                position: "absolute",
                transform: "translate(-50%, -50%)"
            },
            ajModalBackdrop: {
                width: "100vw",
                height: "100vh",
                zIndex: 1,
                top: 0,
                left: 0,
                overflow: "hidden",
                position: "fixed",
                cursor: "pointer"
            },
            ajModalColorBackdrop: {
                backgroundColor: "rgba(0, 0, 0, 0.3)"
            }
        };
        var AJModal_useStyles = Object(external_react_jss_["createUseStyles"])(AJModal_styles);
        var AJModal_AJModal = function AJModal(_ref) {
            var children = _ref.children, onClickBackground = _ref.onClickBackground, _ref$backdrop = _ref.backdrop, backdrop = _ref$backdrop === void 0 ? true : _ref$backdrop, className = _ref.className;
            var classes = AJModal_useStyles();
            var eventDefault = {
                stopPropagation: function stopPropagation(f) {
                    return f;
                }
            };
            var backdropClass = backdrop ? classnames_default()(classes.ajModalBackdrop, classes.ajModalColorBackdrop, "aj-modal-backdrop", className) : classnames_default()(classes.ajModalBackdrop, "aj-modal-backdrop", className);
            return external_react_default.a.createElement("div", {
                className: backdropClass,
                onClick: onClickBackground
            }, external_react_default.a.createElement("div", {
                className: classes.ajModal,
                onClick: function onClick() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : eventDefault;
                    return e.stopPropagation();
                }
            }, children));
        };
        AJModal_AJModal.propTypes = {
            children: prop_types_default.a.node.isRequired,
            onClickBackground: prop_types_default.a.func,
            backdrop: prop_types_default.a.bool,
            className: prop_types_default.a.string
        };
        var src_AJModal_AJModal = AJModal_AJModal;
        var src_AJModal = src_AJModal_AJModal;
        var AJNavCircle_styles = {
            ajNavCircle: {
                height: function height(_ref) {
                    var _height = _ref.height;
                    return "calc(".concat(_height, " * 1.2)");
                },
                width: function width(_ref2) {
                    var height = _ref2.height;
                    return "calc(".concat(height, " * 1.2)");
                },
                borderRadius: "50%",
                "& > figure": {
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    margin: 0,
                    alignItems: "center",
                    justifyContent: "center"
                }
            },
            active: {
                backgroundColor: "#ccc",
                "&:hover": {
                    backgroundColor: "#d9d9d9"
                },
                cursor: "pointer"
            },
            inactive: {
                backgroundColor: "#eee",
                "& image": {
                    filter: "opacity(0.5)"
                }
            },
            img: {
                height: function height(_ref3) {
                    var _height2 = _ref3.height;
                    return _height2;
                },
                width: function width(_ref4) {
                    var height = _ref4.height;
                    return height;
                }
            },
            up: {
                transform: "rotate(180deg)",
                margin: "0 0 5% 0"
            },
            down: {
                margin: "5% 0 0 0"
            },
            left: {
                transform: "rotate(90deg)",
                margin: "0 5% 0 0"
            },
            right: {
                transform: "rotate(270deg)",
                margin: "0 0 0 5%"
            }
        };
        var arrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAjVJREFUeAHt21tqhDAYhmFvu4ki3VnvuugpMgvp4Q/lAxuiJh5iDq8Q0hkdTZ+3zkXBYWBDAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIHhBYPDAqcZvtpSHjY+Di+p3xO8268+2Xg7SuBifNr4sfFtgyiGkLi5GF82nOHTxu4o8xjuZEQxhMRtHkOGu6KEYuiE3ClxVUIxZJgcZS0Id8p2kLUYzi85iLskUbbhQ0dcEkMXIook4uZLY2gJRJHE+pwlhpZAFEmE56wxtASiSOL/fEsMLYEokvibb42hpRCloBhEKTBG71GK+JpSBH/u7eur6BiK00uUKmL0EqWqGK1HqTJGq1GqjtFalCZitBKlqRi1R2kyRq1Rmo5RW5QuYtQSpasYpUfpMkapUbqOUVoUYqiIzXf/Q5IYsxj68a4oxFCBwJw7CjECEfy3ckUhhi+/8vrqKMRYwV/adVUUYiyJR7x/dhRiRKBvHXJWFGJsSSfsPxqFGAnYsYfujUKMWOEdx6VGIcYO5NSPxEYhRqrsgeNH++xkQw9N+rN77FiPHvv73OvJxmiD7USBrTslFMK997Sx+9nwE9ff5KlSoxAjw59BbBRiZIihS2xFIYakMs5LUYiRMYJ/KT8KMXyhG14rCjFuwF+65Gg73GBDAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIGSBX4BK4DEtcIi4HkAAAAASUVORK5CYII=";
        var AJNavCircle_useStyles = Object(external_react_jss_["createUseStyles"])(AJNavCircle_styles);
        var AJNavCircle_AJNavCircle = function AJNavCircle(_ref) {
            var direction = _ref.direction, _ref$height = _ref.height, height = _ref$height === void 0 ? "25px" : _ref$height, _ref$active = _ref.active, active = _ref$active === void 0 ? true : _ref$active, onClick = _ref.onClick, className = _ref.className;
            var classes = AJNavCircle_useStyles({
                height: height
            });
            var circleClass;
            if (active) {
                circleClass = classnames_default()("aj-nav-circle", classes.ajNavCircle, classes.active, className);
            } else {
                circleClass = classnames_default()("aj-nav-circle", classes.ajNavCircle, classes.inactive, className);
                onClick = null;
            }
            var pictureClass = classes.img;
            switch (direction) {
              case "up":
                pictureClass = classnames_default()("nav-up", classes.up, classes.img);
                break;

              case "down":
                pictureClass = classnames_default()("nav-down", classes.down, classes.img);
                break;

              case "left":
                pictureClass = classnames_default()("nav-left", classes.left, classes.img);
                break;

              case "right":
                pictureClass = classnames_default()("nav-right", classes.right, classes.img);
                break;
            }
            return external_react_default.a.createElement("div", {
                className: circleClass,
                onClick: onClick
            }, external_react_default.a.createElement("figure", null, external_react_default.a.createElement("img", {
                className: pictureClass,
                src: arrow,
                alt: ""
            })));
        };
        AJNavCircle_AJNavCircle.propTypes = {
            direction: prop_types_default.a.oneOf([ "up", "down", "left", "right" ]).isRequired,
            height: prop_types_default.a.string,
            active: prop_types_default.a.bool,
            onClick: prop_types_default.a.func.isRequired,
            className: prop_types_default.a.string
        };
        var src_AJNavCircle_AJNavCircle = AJNavCircle_AJNavCircle;
        var src_AJNavCircle = src_AJNavCircle_AJNavCircle;
        var getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
        var rnds8 = new Uint8Array(16);
        function rng() {
            if (!getRandomValues) {
                throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            }
            return getRandomValues(rnds8);
        }
        var byteToHex = [];
        for (var bytesToUuid_i = 0; bytesToUuid_i < 256; ++bytesToUuid_i) {
            byteToHex.push((bytesToUuid_i + 256).toString(16).substr(1));
        }
        function bytesToUuid(buf, offset_) {
            var offset = offset_ || 0;
            return (byteToHex[buf[offset + 0]] + byteToHex[buf[offset + 1]] + byteToHex[buf[offset + 2]] + byteToHex[buf[offset + 3]] + "-" + byteToHex[buf[offset + 4]] + byteToHex[buf[offset + 5]] + "-" + byteToHex[buf[offset + 6]] + byteToHex[buf[offset + 7]] + "-" + byteToHex[buf[offset + 8]] + byteToHex[buf[offset + 9]] + "-" + byteToHex[buf[offset + 10]] + byteToHex[buf[offset + 11]] + byteToHex[buf[offset + 12]] + byteToHex[buf[offset + 13]] + byteToHex[buf[offset + 14]] + byteToHex[buf[offset + 15]]).toLowerCase();
        }
        var esm_browser_bytesToUuid = bytesToUuid;
        function v4(options, buf, offset) {
            options = options || {};
            var rnds = options.random || (options.rng || rng)();
            rnds[6] = rnds[6] & 15 | 64;
            rnds[8] = rnds[8] & 63 | 128;
            if (buf) {
                offset = offset || 0;
                for (var i = 0; i < 16; ++i) {
                    buf[offset + i] = rnds[i];
                }
                return buf;
            }
            return esm_browser_bytesToUuid(rnds);
        }
        var esm_browser_v4 = v4;
        var AJNavList_styles = {
            ajNavList: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            },
            ajNavListItem: {
                width: "100%",
                "& > div": {
                    display: "flex",
                    width: "90%",
                    height: "40px",
                    margin: "0 5%",
                    borderBottom: "1px solid #ccc",
                    textDecoration: "none",
                    color: "#777",
                    transition: "color 0.5s ease",
                    cursor: "pointer",
                    "&:hover": {
                        textDecoration: "underline"
                    },
                    "& > div": {
                        margin: "0 auto",
                        alignSelf: "center"
                    }
                }
            },
            ajNavListLastItem: {
                "& > div": {
                    borderBottom: "none"
                }
            }
        };
        var AJNavList_useStyles = Object(external_react_jss_["createUseStyles"])(AJNavList_styles);
        var AJNavList_AJNavList = function AJNavList(_ref) {
            var items = _ref.items, className = _ref.className;
            var classes = AJNavList_useStyles();
            if (!Array.isArray(items)) {
                items = [];
            }
            return external_react_default.a.createElement("div", {
                className: classnames_default()(classes.ajNavList, "aj-nav-list", className)
            }, items.map(function(item, index) {
                var listItemClasses;
                if (index === items.length - 1) {
                    listItemClasses = classnames_default()(classes.ajNavListItem, "aj-nav-list-item", classes.ajNavListLastItem, "aj-nav-list-last-item");
                } else {
                    listItemClasses = classnames_default()(classes.ajNavListItem, "aj-nav-list-item");
                }
                return external_react_default.a.createElement("div", {
                    key: esm_browser_v4(),
                    className: listItemClasses
                }, external_react_default.a.createElement("div", {
                    onClick: function onClick() {
                        return item.onClick();
                    }
                }, external_react_default.a.createElement("div", null, item.content)));
            }));
        };
        AJNavList_AJNavList.propTypes = {
            items: prop_types_default.a.arrayOf(prop_types_default.a.shape({
                content: prop_types_default.a.node.isRequired,
                onClick: prop_types_default.a.func.isRequired
            })).isRequired,
            className: prop_types_default.a.string
        };
        var src_AJNavList_AJNavList = AJNavList_AJNavList;
        var src_AJNavList = src_AJNavList_AJNavList;
        var AJNavTextCircle_styles = {
            ajNavTextCircle: {
                display: "flex",
                alignItems: "center"
            },
            textRight: {
                flexDirection: "row"
            },
            textLeft: {
                flexDirection: "row-reverse"
            },
            description: {
                margin: "0 10px"
            }
        };
        var AJNavTextCircle_useStyles = Object(external_react_jss_["createUseStyles"])(AJNavTextCircle_styles);
        var AJNavTextCircle_AJNavTextCircle = function AJNavTextCircle(_ref) {
            var text = _ref.text, _ref$textSide = _ref.textSide, textSide = _ref$textSide === void 0 ? "right" : _ref$textSide, direction = _ref.direction, height = _ref.height, active = _ref.active, onClick = _ref.onClick, className = _ref.className;
            var classes = AJNavTextCircle_useStyles();
            var containerClasses;
            if (textSide === "right") {
                containerClasses = classnames_default()(classes.ajNavTextCircle, classes.textRight, className);
            } else {
                containerClasses = classnames_default()(classes.ajNavTextCircle, classes.textLeft, className);
            }
            return external_react_default.a.createElement("div", {
                className: containerClasses
            }, external_react_default.a.createElement(src_AJNavCircle_AJNavCircle, {
                direction: direction,
                height: height,
                active: active,
                onClick: onClick
            }), external_react_default.a.createElement("div", {
                className: classes.description
            }, text));
        };
        AJNavTextCircle_AJNavTextCircle.propTypes = {
            text: prop_types_default.a.string.isRequired,
            textSide: prop_types_default.a.oneOf([ "left", "right" ]),
            direction: prop_types_default.a.oneOf([ "up", "down", "left", "right" ]).isRequired,
            height: prop_types_default.a.string,
            active: prop_types_default.a.bool,
            onClick: prop_types_default.a.func.isRequired,
            className: prop_types_default.a.string
        };
        var src_AJNavTextCircle_AJNavTextCircle = AJNavTextCircle_AJNavTextCircle;
        var src_AJNavTextCircle = src_AJNavTextCircle_AJNavTextCircle;
        var AJNotificationCircle_styles = {
            container: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                width: 20,
                height: 20,
                backgroundColor: "#333"
            },
            count: {
                fontSize: "12px",
                color: "white",
                margin: 0,
                textAlign: "center"
            }
        };
        var AJNotificationCircle_useStyles = Object(external_react_jss_["createUseStyles"])(AJNotificationCircle_styles);
        var AJNotificationCircle_AJNotificationCircle = function AJNotificationCircle(_ref) {
            var count = _ref.count;
            var classes = AJNotificationCircle_useStyles();
            return external_react_default.a.createElement("div", {
                className: classnames_default()("aj-notification-circle", classes.container)
            }, external_react_default.a.createElement("p", {
                className: classes.count
            }, count));
        };
        AJNotificationCircle_AJNotificationCircle.propTypes = {
            count: prop_types_default.a.number
        };
        var src_AJNotificationCircle_AJNotificationCircle = AJNotificationCircle_AJNotificationCircle;
        var src_AJNotificationCircle = src_AJNotificationCircle_AJNotificationCircle;
        var AJOutlinedButton_styles = {
            ajOutlinedButton: {
                padding: "8px",
                transition: "background-color 0.25s ease",
                border: "2px solid #ddd",
                borderRadius: "4px",
                "& button": {
                    backgroundColor: "transparent"
                }
            },
            ajOutlinedButtonEnabled: {
                "&:active": {
                    backgroundColor: "#f5f5f5"
                },
                "& button": {
                    color: "#555",
                    transition: "color 0.25s ease",
                    "&:active": {
                        color: "#222"
                    }
                }
            },
            ajOutlinedButtonDisabled: {
                "& button": {
                    color: "#999"
                }
            }
        };
        var AJOutlinedButton_useStyles = Object(external_react_jss_["createUseStyles"])(AJOutlinedButton_styles);
        var AJOutlinedButton = Object(external_react_["forwardRef"])(function(_ref, ref) {
            var children = _ref.children, onClick = _ref.onClick, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, className = _ref.className;
            var classes = AJOutlinedButton_useStyles();
            var enabledClasses = [ "aj-outlined-button", classes.ajOutlinedButton, classes.ajOutlinedButtonEnabled ];
            var disabledClasses = [ "aj-outlined-button", classes.ajOutlinedButton, classes.ajOutlinedButtonDisabled ];
            return external_react_default.a.createElement(AJBaseButton_AJBaseButton, {
                onClick: onClick,
                disabled: disabled,
                enabledClasses: enabledClasses,
                disabledClasses: disabledClasses,
                ref: ref,
                className: className
            }, children);
        });
        AJOutlinedButton.propTypes = {
            children: prop_types_default.a.node.isRequired,
            onClick: prop_types_default.a.func,
            disabled: prop_types_default.a.bool,
            className: prop_types_default.a.string
        };
        var AJOutlinedButton_AJOutlinedButton = AJOutlinedButton;
        var src_AJOutlinedButton = AJOutlinedButton_AJOutlinedButton;
        var globalStyles = {
            "@font-face": [ {
                fontFamily: "Roboto-Bold",
                fontWeight: "bold",
                src: "url(http://global.jarombek.io/fonts/Roboto-Bold.ttf) format(truetype)"
            }, {
                fontFamily: "Roboto-Regular",
                fontWeight: "bold",
                src: "url(http://global.jarombek.io/fonts/Roboto-Regular.ttf) format(truetype)"
            }, {
                fontFamily: "Roboto-Thin",
                fontWeight: "bold",
                src: "url(http://global.jarombek.io/fonts/Roboto-Thin.ttf) format(truetype)"
            } ],
            robotoBold: {
                fontFamily: "'Roboto-Bold', Helvetica, sans-serif",
                fontStyle: "normal"
            },
            robotoRegular: {
                fontFamily: "'Roboto-Regular', Helvetica, sans-serif",
                fontStyle: "normal"
            },
            robotoThin: {
                fontFamily: "'Roboto-Thin', Helvetica, sans-serif",
                fontStyle: "normal"
            }
        };
        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
                keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i] != null ? arguments[i] : {};
                if (i % 2) {
                    ownKeys(Object(source), true).forEach(function(key) {
                        styles_defineProperty(target, key, source[key]);
                    });
                } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                } else {
                    ownKeys(Object(source)).forEach(function(key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    });
                }
            }
            return target;
        }
        function styles_defineProperty(obj, key, value) {
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
        var AJTextButton_styles = {
            ajTextButton: {
                padding: "10px",
                transition: "background-color 0.25s ease",
                "& button": _objectSpread(_objectSpread({}, globalStyles.robotoRegular), {}, {
                    display: "block",
                    backgroundColor: "transparent"
                })
            },
            ajTextButtonEnabled: {
                "&:active": {
                    backgroundColor: "#f5f5f5"
                },
                "& button": {
                    color: "#555",
                    transition: "color 0.25s ease",
                    "&:active": {
                        color: "#222"
                    }
                }
            },
            ajTextButtonDisabled: {
                "& button": {
                    color: "#999"
                }
            }
        };
        var AJTextButton_useStyles = Object(external_react_jss_["createUseStyles"])(AJTextButton_styles);
        var AJTextButton = Object(external_react_["forwardRef"])(function(_ref, ref) {
            var children = _ref.children, onClick = _ref.onClick, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, className = _ref.className;
            var classes = AJTextButton_useStyles();
            var enabledClasses = [ "aj-text-button", classes.ajTextButton, classes.ajTextButtonEnabled ];
            var disabledClasses = [ "aj-text-button", classes.ajTextButton, classes.ajTextButtonDisabled ];
            return external_react_default.a.createElement(AJBaseButton_AJBaseButton, {
                onClick: onClick,
                disabled: disabled,
                enabledClasses: enabledClasses,
                disabledClasses: disabledClasses,
                ref: ref,
                className: className
            }, children);
        });
        AJTextButton.propTypes = {
            children: prop_types_default.a.node.isRequired,
            onClick: prop_types_default.a.func,
            disabled: prop_types_default.a.bool,
            className: prop_types_default.a.string
        };
        var AJTextButton_AJTextButton = AJTextButton;
        function styles_ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
                keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function styles_objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i] != null ? arguments[i] : {};
                if (i % 2) {
                    styles_ownKeys(Object(source), true).forEach(function(key) {
                        AJTextCard_styles_defineProperty(target, key, source[key]);
                    });
                } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                } else {
                    styles_ownKeys(Object(source)).forEach(function(key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    });
                }
            }
            return target;
        }
        function AJTextCard_styles_defineProperty(obj, key, value) {
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
        var AJTextCard_styles = {
            ajTextCard: styles_objectSpread(styles_objectSpread({}, globalStyles.robotoThin), {}, {
                display: "inline-block",
                width: "auto",
                height: "500px",
                padding: "5px 10px",
                borderRadius: "3px",
                boxShadow: "0 1px 3px rgba(170, 170, 170, 0.5)",
                "&:hover": {
                    boxShadow: "0 1px 3px rgba(170, 170, 170, 0.8)"
                }
            })
        };
        var AJTextCard_useStyles = Object(external_react_jss_["createUseStyles"])(AJTextCard_styles);
        var AJTextCard_AJTextCard = function AJTextCard(_ref) {
            var title = _ref.title, subtitle = _ref.subtitle, content = _ref.content, action = _ref.action, actionText = _ref.actionText, _ref$actionDisabled = _ref.actionDisabled, actionDisabled = _ref$actionDisabled === void 0 ? false : _ref$actionDisabled, className = _ref.className;
            var classes = AJTextCard_useStyles();
            return external_react_default.a.createElement("div", {
                className: classnames_default()(classes.ajTextCard, "aj-text-card", className)
            }, external_react_default.a.createElement("div", {
                className: "aj-text-card-header"
            }, external_react_default.a.createElement("h2", {
                className: "aj-text-card-title"
            }, title), external_react_default.a.createElement("p", {
                className: "aj-text-card-subtitle"
            }, subtitle)), external_react_default.a.createElement("div", {
                className: "aj-text-card-body"
            }, external_react_default.a.createElement("p", {
                className: "aj-text-card-content"
            }, content)), external_react_default.a.createElement("div", {
                className: "aj-text-card-footer"
            }, external_react_default.a.createElement(AJTextButton_AJTextButton, {
                onClick: action,
                disabled: actionDisabled
            }, actionText)));
        };
        AJTextCard_AJTextCard.propTypes = {
            title: prop_types_default.a.node.isRequired,
            subtitle: prop_types_default.a.node,
            content: prop_types_default.a.node.isRequired,
            action: prop_types_default.a.func.isRequired,
            actionText: prop_types_default.a.node.isRequired,
            actionDisabled: prop_types_default.a.bool,
            className: prop_types_default.a.string
        };
        var src_AJTextCard_AJTextCard = AJTextCard_AJTextCard;
        function AJResponsiveGrid_styles_defineProperty(obj, key, value) {
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
        var AJResponsiveGrid_styles = {
            ajResponsiveGrid: function ajResponsiveGrid(_ref) {
                var _ref2;
                var small = _ref.small, medium = _ref.medium, large = _ref.large;
                return _ref2 = {
                    display: "grid; display:-ms-grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridGap: "20px",
                    "-ms-grid-columns": "1fr 1fr 1fr"
                }, AJResponsiveGrid_styles_defineProperty(_ref2, "@media screen and (max-width: ".concat(large, ") and (min-width: ").concat(medium, ")"), {
                    gridTemplateColumns: "1fr 1fr",
                    gridGap: "20px",
                    "-ms-grid-columns": "1fr 1fr"
                }), AJResponsiveGrid_styles_defineProperty(_ref2, "@media screen and (max-width: ".concat(medium, ") and (min-width: ").concat(small, ")"), {
                    gridTemplateColumns: "1fr",
                    gridGap: "15px",
                    "-ms-grid-columns": "1fr"
                }), AJResponsiveGrid_styles_defineProperty(_ref2, "@media screen and (max-width: ".concat(small, ")"), {
                    gridTemplateColumns: "1fr",
                    gridGap: "10px",
                    "-ms-grid-columns": "1fr"
                }), _ref2;
            }
        };
        var AJResponsiveGrid_useStyles = Object(external_react_jss_["createUseStyles"])(AJResponsiveGrid_styles);
        var AJResponsiveGrid_AJResponsiveGrid = function AJResponsiveGrid(_ref) {
            var items = _ref.items, _ref$smallBreakpoint = _ref.smallBreakpoint, smallBreakpoint = _ref$smallBreakpoint === void 0 ? "600px" : _ref$smallBreakpoint, _ref$mediumBreakpoint = _ref.mediumBreakpoint, mediumBreakpoint = _ref$mediumBreakpoint === void 0 ? "900px" : _ref$mediumBreakpoint, _ref$largeBreakpoint = _ref.largeBreakpoint, largeBreakpoint = _ref$largeBreakpoint === void 0 ? "1200px" : _ref$largeBreakpoint, className = _ref.className;
            var breakpoints = {
                small: smallBreakpoint,
                medium: mediumBreakpoint,
                large: largeBreakpoint
            };
            var classes = AJResponsiveGrid_useStyles(breakpoints);
            return external_react_default.a.createElement("div", {
                className: classnames_default()("aj-responsive-grid", classes.ajResponsiveGrid, className)
            }, items);
        };
        AJResponsiveGrid_AJResponsiveGrid.propTypes = {
            items: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired,
            smallBreakpoint: prop_types_default.a.string,
            mediumBreakpoint: prop_types_default.a.string,
            largeBreakpoint: prop_types_default.a.string,
            className: prop_types_default.a.string
        };
        var src_AJResponsiveGrid_AJResponsiveGrid = AJResponsiveGrid_AJResponsiveGrid;
        var src_AJResponsiveGrid = src_AJResponsiveGrid_AJResponsiveGrid;
        var AJSwitchIcon_styles = {
            ajSwitchIconContainer: {
                display: "flex",
                height: "30px",
                alignItems: "center"
            },
            ajSwitchIcon: {
                height: "25px",
                width: "25px",
                margin: "0 10px",
                "& > img": {
                    height: "100%",
                    width: "100%"
                }
            },
            ajSwitchIconNotSelected: {
                filter: "opacity(0.75) grayscale(1)"
            }
        };
        var AJSwitch_styles = {
            ajSwitch: {
                display: "flex",
                height: "20px",
                width: "36px",
                cursor: "pointer"
            },
            ajSwitchDisabled: {
                cursor: "default"
            },
            ajSwitchActive: {
                flexDirection: "row-reverse"
            },
            ajSwitchInactive: {
                flexDirection: "row"
            },
            ajSwitchHead: {
                position: "absolute",
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.24)"
            },
            ajSwitchHeadActive: {
                backgroundColor: "#4b6cc9"
            },
            ajSwitchHeadInactive: {
                backgroundColor: "#f5f5f5"
            },
            ajSwitchTail: {
                height: "100%",
                width: "100%",
                borderRadius: "10px"
            },
            ajSwitchTailActive: {
                backgroundColor: "rgba(75, 108, 201, 0.5)"
            },
            ajSwitchTailInactive: {
                backgroundColor: "#ccc"
            }
        };
        function AJSwitch_slicedToArray(arr, i) {
            return AJSwitch_arrayWithHoles(arr) || AJSwitch_iterableToArrayLimit(arr, i) || AJSwitch_nonIterableRest();
        }
        function AJSwitch_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function AJSwitch_iterableToArrayLimit(arr, i) {
            if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
                return;
            }
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function AJSwitch_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var AJSwitch_useStyles = Object(external_react_jss_["createUseStyles"])(AJSwitch_styles);
        var AJSwitch_AJSwitch = function AJSwitch(_ref) {
            var onChange = _ref.onChange, _ref$initialState = _ref.initialState, initialState = _ref$initialState === void 0 ? false : _ref$initialState, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, className = _ref.className;
            var classes = AJSwitch_useStyles();
            var _useState = Object(external_react_["useState"])(initialState), _useState2 = AJSwitch_slicedToArray(_useState, 2), state = _useState2[0], setState = _useState2[1];
            var onClick = function onClick() {
                if (!disabled) {
                    var newState = !state;
                    setState(newState);
                    if (typeof onChange === "function") {
                        onChange(newState);
                    }
                }
            };
            var mainClass = state ? disabled ? classnames_default()(classes.ajSwitch, classes.ajSwitchActive, classes.ajSwitchDisabled, "aj-switch", className) : classnames_default()(classes.ajSwitch, classes.ajSwitchActive, "aj-switch", className) : disabled ? classnames_default()(classes.ajSwitch, classes.ajSwitchInactive, classes.ajSwitchDisabled, "aj-switch", className) : classnames_default()(classes.ajSwitch, classes.ajSwitchInactive, "aj-switch", className);
            var headClass = state ? classnames_default()(classes.ajSwitchHead, classes.ajSwitchHeadActive, "aj-switch-head") : classnames_default()(classes.ajSwitchHead, classes.ajSwitchHeadInactive, "aj-switch-head");
            var tailClass = state ? classnames_default()(classes.ajSwitchTail, classes.ajSwitchTailActive, "aj-switch-tail") : classnames_default()(classes.ajSwitchTail, classes.ajSwitchTailInactive, "aj-switch-tail");
            return external_react_default.a.createElement("div", {
                className: mainClass,
                onClick: onClick
            }, external_react_default.a.createElement("div", {
                className: headClass
            }, " "), external_react_default.a.createElement("div", {
                className: tailClass
            }, " "));
        };
        AJSwitch_AJSwitch.propTypes = {
            onChange: prop_types_default.a.func.isRequired,
            initialState: prop_types_default.a.bool,
            disabled: prop_types_default.a.bool,
            className: prop_types_default.a.string
        };
        var src_AJSwitch_AJSwitch = AJSwitch_AJSwitch;
        function AJSwitchIcon_slicedToArray(arr, i) {
            return AJSwitchIcon_arrayWithHoles(arr) || AJSwitchIcon_iterableToArrayLimit(arr, i) || AJSwitchIcon_nonIterableRest();
        }
        function AJSwitchIcon_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function AJSwitchIcon_iterableToArrayLimit(arr, i) {
            if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
                return;
            }
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function AJSwitchIcon_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var AJSwitchIcon_useStyles = Object(external_react_jss_["createUseStyles"])(AJSwitchIcon_styles);
        var AJSwitchIcon_AJSwitchIcon = function AJSwitchIcon(_ref) {
            var offImageUrl = _ref.offImageUrl, onImageUrl = _ref.onImageUrl, onChange = _ref.onChange, _ref$initialState = _ref.initialState, initialState = _ref$initialState === void 0 ? false : _ref$initialState, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, className = _ref.className;
            var classes = AJSwitchIcon_useStyles();
            var getOffIconClasses = function getOffIconClasses(state) {
                return state ? classnames_default()(classes.ajSwitchIcon, classes.ajSwitchIconNotSelected, "aj-switch-icon-off") : classnames_default()(classes.ajSwitchIcon, "aj-switch-icon-off");
            };
            var getOnIconClasses = function getOnIconClasses(state) {
                return state ? classnames_default()(classes.ajSwitchIcon, "aj-switch-icon-on") : classnames_default()(classes.ajSwitchIcon, classes.ajSwitchIconNotSelected, "aj-switch-icon-on");
            };
            var _useState = Object(external_react_["useState"])(getOffIconClasses(initialState)), _useState2 = AJSwitchIcon_slicedToArray(_useState, 2), offIconClasses = _useState2[0], setOffIconClasses = _useState2[1];
            var _useState3 = Object(external_react_["useState"])(getOnIconClasses(initialState)), _useState4 = AJSwitchIcon_slicedToArray(_useState3, 2), onIconClasses = _useState4[0], setOnIconClasses = _useState4[1];
            var onSwitchChange = function onSwitchChange(state) {
                setOffIconClasses(getOffIconClasses(state));
                setOnIconClasses(getOnIconClasses(state));
                if (typeof onChange === "function") {
                    onChange(state);
                }
            };
            return external_react_default.a.createElement("div", {
                className: classnames_default()(classes.ajSwitchIconContainer, "aj-switch-icon", className)
            }, external_react_default.a.createElement("figure", {
                className: offIconClasses
            }, external_react_default.a.createElement("img", {
                src: offImageUrl,
                alt: ""
            })), external_react_default.a.createElement(src_AJSwitch_AJSwitch, {
                onChange: onSwitchChange,
                initialState: initialState,
                disabled: disabled
            }), external_react_default.a.createElement("figure", {
                className: onIconClasses
            }, external_react_default.a.createElement("img", {
                src: onImageUrl,
                alt: ""
            })));
        };
        AJSwitchIcon_AJSwitchIcon.propTypes = {
            offImageUrl: prop_types_default.a.string.isRequired,
            onImageUrl: prop_types_default.a.string.isRequired,
            onChange: prop_types_default.a.func.isRequired,
            initialState: prop_types_default.a.bool,
            disabled: prop_types_default.a.bool,
            className: prop_types_default.a.string
        };
        var src_AJSwitchIcon_AJSwitchIcon = AJSwitchIcon_AJSwitchIcon;
        var src_AJSwitchIcon = src_AJSwitchIcon_AJSwitchIcon;
        var src_AJSwitch = src_AJSwitch_AJSwitch;
        var AJTag_styles = {
            ajTag: function ajTag(_ref) {
                var backgroundColor = _ref.backgroundColor;
                return {
                    backgroundColor: backgroundColor,
                    display: "inline-block",
                    cursor: "pointer",
                    padding: "0 10px",
                    borderRadius: "3px",
                    boxShadow: "0 1px 3px rgba(170, 170, 170, 0.1)",
                    transition: "all .4s ease",
                    "&:hover": {
                        boxShadow: "0 1px 3px rgba(170, 170, 170, 0.5)"
                    }
                };
            }
        };
        var AJTag_useStyles = Object(external_react_jss_["createUseStyles"])(AJTag_styles);
        var AJTag_AJTag = function AJTag(_ref) {
            var content = _ref.content, color = _ref.color, className = _ref.className;
            var backgroundColor = color !== null && color !== void 0 ? color : "rgba(204, 204, 204, 0.6)";
            var classes = AJTag_useStyles({
                backgroundColor: backgroundColor
            });
            return external_react_default.a.createElement("div", {
                className: classnames_default()(classes.ajTag, "aj-tag", className)
            }, content);
        };
        AJTag_AJTag.propTypes = {
            content: prop_types_default.a.node.isRequired,
            color: prop_types_default.a.string,
            className: prop_types_default.a.string
        };
        var src_AJTag_AJTag = AJTag_AJTag;
        var src_AJTag = src_AJTag_AJTag;
        var AJTagImage_styles = {
            ajTagImage: function ajTagImage(_ref) {
                var backgroundColor = _ref.backgroundColor;
                return {
                    backgroundColor: backgroundColor,
                    display: "flex",
                    cursor: "pointer",
                    padding: "0 10px",
                    borderRadius: "3px",
                    boxShadow: "0 1px 3px rgba(170, 170, 170, 0.1)",
                    transition: "all .4s ease",
                    "&:hover": {
                        boxShadow: "0 1px 3px rgba(170, 170, 170, 0.5)"
                    }
                };
            },
            picture: {
                height: "40px",
                maxWidth: "45px",
                margin: "5px"
            },
            content: {
                marginLeft: "10px"
            }
        };
        var AJTagImage_useStyles = Object(external_react_jss_["createUseStyles"])(AJTagImage_styles);
        var AJTagImage_AJTagImage = function AJTagImage(_ref) {
            var content = _ref.content, picture = _ref.picture, color = _ref.color, className = _ref.className;
            var backgroundColor = color !== null && color !== void 0 ? color : "rgba(204, 204, 204, 0.6)";
            var classes = AJTagImage_useStyles({
                backgroundColor: backgroundColor
            });
            return external_react_default.a.createElement("div", {
                className: classnames_default()(classes.ajTagImage, "aj-tag-image", className)
            }, external_react_default.a.createElement("img", {
                className: classes.picture,
                src: picture,
                alt: ""
            }), external_react_default.a.createElement("div", {
                className: classes.content
            }, content));
        };
        AJTagImage_AJTagImage.propTypes = {
            content: prop_types_default.a.node.isRequired,
            picture: prop_types_default.a.any,
            color: prop_types_default.a.string,
            className: prop_types_default.a.string
        };
        var src_AJTagImage_AJTagImage = AJTagImage_AJTagImage;
        var src_AJTagImage = src_AJTagImage_AJTagImage;
        var src_AJTextButton = AJTextButton_AJTextButton;
        var src_AJTextCard = src_AJTextCard_AJTextCard;
    } ]);
});