'use strict';

const React = require('react');

const InputHintsContext = React.createContext({
  /*get hints () {
  	throw new Error("Attempting to use InputHintsContext.hints, but not wrapped InputHintsContext.Provider")
  }, setHints: () => {
  	throw new Error("Attempting to use InputHintsContext.setHints, but not wrapped InputHintsContext.Provider")
  }*/
});
module.exports = InputHintsContext;