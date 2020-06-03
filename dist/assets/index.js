"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Illustrations: true
};
exports.Illustrations = void 0;

var _SignIn = _interopRequireDefault(require("./illustrations/SignIn.svg"));

var _SignUp = _interopRequireDefault(require("./illustrations/SignUp.svg"));

var _CloseIcon = require("./icons/CloseIcon");

Object.keys(_CloseIcon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CloseIcon[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Illustrations = {
  SignUp: _SignUp.default,
  SignIn: _SignIn.default
};
exports.Illustrations = Illustrations;