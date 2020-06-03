"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignInModal = exports.SignUpModal = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSpring = require("react-spring");

var _utils = require("../utils");

var _assets = require("../assets");

var _Buttons = require("./Buttons");

var _TextFields = require("./TextFields");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  background: none;\n  border: none;\n  position: absolute;\n  top: 40px;\n  right: 40px;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  max-width: 70%;\n  text-align: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n  justify-content: space-around;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 800px;\n  height: 500px;\n  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);\n  font-family: ", ";\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border-radius: 2px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getAnimation = function getAnimation(showModal) {
  return {
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0)" : "translateY(-200%)"
  };
};

var ModalWrapper = _styledComponents.default.div(_templateObject(), _utils.primaryFont, function (props) {
  return props.theme.formElementBackground;
}, function (props) {
  return props.theme.textOnFormElementBackground;
});

var ColumnModalWrapper = (0, _styledComponents.default)(ModalWrapper)(_templateObject2());

var ModalHeader = _styledComponents.default.h3(_templateObject3(), _utils.typeScale.header3);

var SignUpText = _styledComponents.default.p(_templateObject4(), _utils.typeScale.paragraph);

var CloseModalButton = _styledComponents.default.button(_templateObject5());

var SignUpModal = function SignUpModal(_ref) {
  var showModal = _ref.showModal,
      setShowModal = _ref.setShowModal;
  return /*#__PURE__*/_react.default.createElement(_reactSpring.animated.div, {
    style: (0, _reactSpring.useSpring)(getAnimation(showModal))
  }, /*#__PURE__*/_react.default.createElement(ModalWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _assets.Illustrations.SignUp,
    alt: "Sign up for an account!"
  }), /*#__PURE__*/_react.default.createElement(ModalHeader, null, "Sign Up"), /*#__PURE__*/_react.default.createElement(SignUpText, null, "Sign up today to get access to all of our content and features!"), /*#__PURE__*/_react.default.createElement(_Buttons.PrimaryButton, {
    onClick: function onClick() {
      return console.log("You signed up!");
    }
  }, "Sign Up"), /*#__PURE__*/_react.default.createElement(CloseModalButton, {
    "aria-label": "Close modal",
    onClick: function onClick() {
      return setShowModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_assets.CloseIcon, null))));
};

exports.SignUpModal = SignUpModal;

var SignInModal = function SignInModal(_ref2) {
  var showModal = _ref2.showModal,
      setShowModal = _ref2.setShowModal;
  return /*#__PURE__*/_react.default.createElement(_reactSpring.animated.div, {
    style: (0, _reactSpring.useSpring)(getAnimation(showModal))
  }, /*#__PURE__*/_react.default.createElement(ColumnModalWrapper, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(ModalHeader, null, "Sign In"), /*#__PURE__*/_react.default.createElement(_TextFields.EmailInput, {
    label: "Email",
    placeholder: "emmabostian@gmail.com"
  }), /*#__PURE__*/_react.default.createElement(_TextFields.PasswordInput, {
    label: "Password"
  }), /*#__PURE__*/_react.default.createElement(_Buttons.SecondaryButton, {
    style: {
      margin: "16px 16px 0 0"
    }
  }, "Sign Up"), /*#__PURE__*/_react.default.createElement(_Buttons.PrimaryButton, null, "Sign In")), /*#__PURE__*/_react.default.createElement("img", {
    src: _assets.Illustrations.SignIn,
    alt: "Sign in to your account"
  }), /*#__PURE__*/_react.default.createElement(CloseModalButton, {
    "aria-label": "Close modal",
    onClick: function onClick() {
      return setShowModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_assets.CloseIcon, null))));
};

exports.SignInModal = SignInModal;