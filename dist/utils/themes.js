"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darkTheme = exports.defaultTheme = void 0;

var _colors = require("./colors");

var _typography = require("./typography");

var defaultTheme = {
  primaryColor: _colors.blue[300],
  primaryHoverColor: _colors.blue[200],
  primaryActiveColor: _colors.blue[100],
  formElementBackground: _colors.neutral[100],
  textOnFormElementBackground: _colors.neutral[600],
  textColorOnPrimary: _colors.neutral[100],
  textColor: _colors.neutral[600],
  textColorInverted: _colors.neutral[100],
  primaryFont: _typography.primaryFont,
  disabled: _colors.neutral[400],
  textOnDisabled: _colors.neutral[300],
  textFieldBackground: _colors.neutral[200],
  textFieldLabelColor: _colors.neutral[500],
  status: {
    warningColor: _colors.yellow[100],
    warningColorHover: _colors.yellow[200],
    warningColorActive: _colors.yellow[300],
    errorColor: _colors.red[100],
    errorColorHover: _colors.red[200],
    errorColorActive: _colors.red[300],
    successColor: _colors.green[100],
    successColorHover: _colors.green[200],
    successColorActive: _colors.green[300]
  }
};
exports.defaultTheme = defaultTheme;
var darkTheme = {
  primaryColor: _colors.neutral[100],
  primaryHoverColor: _colors.neutral[200],
  primaryActiveColor: _colors.neutral[300],
  formElementBackground: _colors.blue[100],
  textOnFormElementBackground: _colors.neutral[100],
  textColorOnPrimary: _colors.blue[300],
  textColor: _colors.blue[300],
  textColorInverted: _colors.neutral[100],
  primaryFont: _typography.primaryFont,
  disabled: _colors.neutral[400],
  textOnDisabled: _colors.neutral[300],
  textFieldBackground: _colors.neutral[200],
  textFieldLabelColor: _colors.neutral[100],
  status: {
    warningColor: _colors.yellow[100],
    warningColorHover: _colors.yellow[200],
    warningColorActive: _colors.yellow[300],
    errorColor: _colors.red[100],
    errorColorHover: _colors.red[200],
    errorColorActive: _colors.red[300],
    successColor: _colors.green[100],
    successColorHover: _colors.green[200],
    successColorActive: _colors.green[300]
  }
};
exports.darkTheme = darkTheme;