"use strict";

const config = require('./config');

const HintBar = require('./HintBar');

const InputHints = require('./InputHints');

const InputHintsContext = require('./InputHintsContext');

const InputHintsContextProvider = require('./InputHintsContextProvider');

const useInputWithHints = require('./useInputWithHints/useInputWithHints');

const KEYS = require('./useInputWithHints/keys.enum');

module.exports = {
  config,
  HintBar,
  InputHints,
  InputHintsContext,
  InputHintsContextProvider,
  useInputWithHints,
  KEYS
};