"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordInput = exports.EmailInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n  margin-bottom: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 316px;\n  height: 52px;\n  background-color: ", ";\n  border: none;\n  padding-left: 8px;\n  font-family: ", ";\n  border-radius: 2px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents.default.input(_templateObject(), function (props) {
  return props.theme.textFieldBackground;
}, _utils.primaryFont);

var Label = _styledComponents.default.label(_templateObject2(), function (props) {
  return props.theme.textFieldLabelColor;
}, _utils.typeScale.helperText);

var EmailInput = function EmailInput(_ref) {
  var label = _ref.label,
      placeholder = _ref.placeholder;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      marginTop: "16px"
    }
  }, /*#__PURE__*/_react.default.createElement(Label, {
    htmlFor: "email"
  }, label), /*#__PURE__*/_react.default.createElement(Input, {
    id: "email",
    type: "email",
    placeholder: placeholder
  }));
};

exports.EmailInput = EmailInput;

var PasswordInput = function PasswordInput(_ref2) {
  var label = _ref2.label,
      placeholder = _ref2.placeholder;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      marginTop: "16px"
    }
  }, /*#__PURE__*/_react.default.createElement(Label, {
    htmlFor: "password"
  }, label), /*#__PURE__*/_react.default.createElement(Input, {
    id: "password",
    type: "password",
    placeholder: placeholder
  }));
};

exports.PasswordInput = PasswordInput;