"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ICON_MODIFIERS = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponentsModifiers = require("styled-components-modifiers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  fill: none;\n  margin-right: 8px;\n  width: 16px;\n  height: 16px;\n\n  > path {\n    fill: ", ";\n    transition: fill 0.2s linear;\n  }\n\n  &:hover,\n  &:focus {\n    > path {\n      fill: ", ";\n    }\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ICON_MODIFIERS = {
  small: function small() {
    return "\n    width: 8px;\n    height: 8px;\n  ";
  },
  large: function large() {
    return "\n    width: 24px;\n    height: 24px;\n  ";
  },
  inverted: function inverted() {
    return "\n    > path {\n      fill: ".concat(function (props) {
      return props.theme.primaryColor;
    }, ";\n    }\n  ");
  }
};
exports.ICON_MODIFIERS = ICON_MODIFIERS;

var Icon = _styledComponents.default.svg(_templateObject(), function (props) {
  return props.theme.textColorOnPrimary;
}, function (props) {
  return props.theme.textColorOnPrimary;
}, (0, _styledComponentsModifiers.applyStyleModifiers)(ICON_MODIFIERS));

var _default = Icon;
exports.default = _default;