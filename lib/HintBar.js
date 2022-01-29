'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = require('react');

const {
  Text,
  Box
} = require('ink');

const InputHintsContext = require('./InputHintsContext');

const DefaultHintBarProps = require('./DefaultHintBarProps');

const HintBar = ({
  textProps = {},
  wrapperProps = {},
  itemWrapperProps = {},
  hints = null
}) => {
  const inputHintsContext = !hints && React.useContext(InputHintsContext);
  return /*#__PURE__*/React.createElement(Box, _extends({}, DefaultHintBarProps.wrapperProps, wrapperProps), (hints || inputHintsContext.hints).map((hint, hIndex) => /*#__PURE__*/React.createElement(Box, _extends({
    key: hIndex
  }, DefaultHintBarProps.itemWrapperProps, itemWrapperProps), /*#__PURE__*/React.createElement(Text, _extends({}, DefaultHintBarProps.textProps, textProps), hint))));
};

module.exports = HintBar;