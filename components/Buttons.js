"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TertiaryButton = exports.SecondaryButton = exports.PrimaryButton = exports.Button = exports.BUTTON_MODIFIERS = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponentsModifiers = require("styled-components-modifiers");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: none;\n  border: 2px solid transparent;\n  color: ", ";\n\n  &:disabled {\n    color: ", ";\n    cursor: not-allowed;\n  }\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: 2px solid ", ";\n  background: none;\n  color: ", ";\n\n  &:disabled {\n    background: none;\n    border: 2px solid ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  border: 2px solid transparent;\n\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 8px 12px;\n  border-radius: 2px;\n  min-width: 100px;\n  cursor: pointer;\n  font-family: ", ";\n  font-size: ", ";\n  transition: background-color 0.2s linear, color 0.2s linear;\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &:focus {\n    outline: 3px solid ", ";\n    outline-offset: 2px;\n  }\n\n  &:active {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BUTTON_MODIFIERS = {
  small: function small() {
    return "\n  padding: 8px;\n  font-size: ".concat(_utils.typeScale.helperText, ";\n  ");
  },
  large: function large() {
    return "\n  padding: 16px 24px;\n  font-size: ".concat(_utils.typeScale.header5, ";\n  ");
  },
  warning: function warning(_ref) {
    var theme = _ref.theme;
    return "\n    background-color: ".concat(theme.status.warningColor, ";\n    color: ").concat(theme.textColorInverted, ";\n\n    &:hover, &:focus {\n      background-color: ").concat(theme.status.warningColorHover, ";\n    }\n\n    &:active {\n      background-color: ").concat(theme.status.warningColorActive, ";\n    }\n  ");
  },
  error: function error(_ref2) {
    var theme = _ref2.theme;
    return "\n  background-color: ".concat(theme.status.errorColor, ";\n  color: ").concat(theme.textColorInverted, ";\n\n  &:hover {\n    background-color: ").concat(theme.status.errorColorHover, ";\n  }\n\n  &:active {\n    background-color: ").concat(theme.status.errorColorActive, ";\n  }\n  ");
  },
  success: function success(_ref3) {
    var theme = _ref3.theme;
    return "\n  background-color: ".concat(theme.status.successColor, ";\n  color: ").concat(theme.textColorInverted, ";\n\n  &:hover {\n    background-color: ").concat(theme.status.successColorHover, ";\n  }\n\n  &:active {\n    background-color: ").concat(theme.status.successColorActive, ";\n  }\n  ");
  }
};
exports.BUTTON_MODIFIERS = BUTTON_MODIFIERS;

var Button = _styledComponents.default.button(_templateObject(), _utils.primaryFont, _utils.typeScale.paragraph, function (props) {
  return props.theme.primaryHoverColor;
}, function (props) {
  return props.theme.textColorOnPrimary;
}, function (props) {
  return props.theme.primaryHoverColor;
}, function (props) {
  return props.theme.primaryActiveColor;
}, function (props) {
  return props.theme.primaryActiveColor;
}, function (props) {
  return props.theme.textColorOnPrimary;
});

exports.Button = Button;
var PrimaryButton = (0, _styledComponents.default)(Button)(_templateObject2(), function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.textColorOnPrimary;
}, function (props) {
  return props.theme.disabled;
}, function (props) {
  return props.theme.textOnDisabled;
}, (0, _styledComponentsModifiers.applyStyleModifiers)(BUTTON_MODIFIERS));
exports.PrimaryButton = PrimaryButton;
var SecondaryButton = (0, _styledComponents.default)(Button)(_templateObject3(), function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.disabled;
}, function (props) {
  return props.theme.disabled;
}, (0, _styledComponentsModifiers.applyStyleModifiers)(BUTTON_MODIFIERS));
exports.SecondaryButton = SecondaryButton;
var TertiaryButton = (0, _styledComponents.default)(Button)(_templateObject4(), function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.disabled;
}, (0, _styledComponentsModifiers.applyStyleModifiers)(BUTTON_MODIFIERS));
exports.TertiaryButton = TertiaryButton;