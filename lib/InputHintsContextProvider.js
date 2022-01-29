'use strict';

const React = require('react');

const InputHintsContext = require('./InputHintsContext');

const {
  Text,
  Box
} = require('ink');

const InputHintsContextProvider = ({
  children
}) => {
  const [hints, setHints] = React.useState([]);
  return /*#__PURE__*/React.createElement(InputHintsContext.Provider, {
    value: {
      hints,
      setHints
    }
  }, children);
};

module.exports = InputHintsContextProvider;