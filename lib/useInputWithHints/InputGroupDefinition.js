"use strict";

const {
  memoize,
  sortBy
} = require("lodash");

class InputDefinition {
  constructor(defInput) {
    this._def = defInput;
  }

  get isKey() {
    return this._def.length > 1;
  }

  matches(input, key) {
    if (this.isKey) return key[this._def];
    return input === this._def;
  }

}

InputDefinition.fromDef = memoize(defInput => new InputDefinition(defInput));

class InputGroupDefinition {
  constructor(inputDefs) {
    this._defs = inputDefs.map(InputDefinition.fromDef);
  }

  matches(input, key) {
    for (let def of this._defs) {
      if (def.matches(input, key)) return true;
    }

    return false;
  }

}

InputGroupDefinition.fromDefs = memoize(inputDefs => new InputGroupDefinition(inputDefs), inputDefs => sortBy(inputDefs).join(''));
module.exports = InputGroupDefinition;