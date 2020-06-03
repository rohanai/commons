"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = void 0;

var _styledComponents = require("styled-components");

var _typography = require("./typography");

var _polished = require("polished");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", "\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\nbody {\n  margin: 0;\n  padding: 65px 0 0;\n  font-family: ", "\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nmain {\n  width: 90%;\n  margin: 0 auto;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), (0, _polished.normalize)(), _typography.primaryFont);
exports.GlobalStyle = GlobalStyle;