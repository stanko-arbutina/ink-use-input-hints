'use strict';

const React = require('react');

const importJsx = require('import-jsx');

const {
  Newline
} = require("ink");

const HintBar = importJsx('./HintBar');
const InputHintsContextProvider = importJsx('./InputHintsContextProvider');

const DefaultHintBarProps = require('./DefaultHintBarProps');

const InputHints = ({
  children,
  hintBarProps = DefaultHintBarProps
}) => {
  return /*#__PURE__*/React.createElement(InputHintsContextProvider, null, children, /*#__PURE__*/React.createElement(Newline, null), /*#__PURE__*/React.createElement(HintBar, hintBarProps));
};

module.exports = InputHints;