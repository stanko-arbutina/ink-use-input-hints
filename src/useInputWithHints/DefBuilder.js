const InputGroupDefinition = require("./InputGroupDefinition");
const {sortBy} = require('lodash');
const config = require('../config');

class DefBuilder {
	constructor(){
		this.defs = [];
		this._custom = [];
		this._hints = [];
	}

	add(input, handler, options = {}){
		this.defs.push({input: InputGroupDefinition.fromDefs(input), handler});
		if (options.description) {
			this._hints.push({input, description: options.description});
		}
		return this;
	}

	describe(description){
		this._hints.push({description});
		return this;
	}

	customHandler(fn) {
		this._custom.push(fn);
		return this;
	}

	get customHandlers() {
		return this._custom;
	}

	get definitions() {
		return this.defs;
	}

	get hints(){
		const hintFormatter = config.get('HINT_FORMATTER_FN');
		const keyFormatter = config.get('KEY_FORMATTER_FN');
		return this._hints.map((hint, index) => {
			if (!hint.input) return hint.description;
			return hintFormatter({
				index,
				formattedKeyDescriptions: hint.input.map((key, index) => keyFormatter({index, key})),
				description: hint.description
			});
		})
	}

	handle(input, key) {
		for (let d of this.definitions) {
			if (d.input.matches( input, key)) {
				d.handler();
				return;
			}
		}

		for (let customHandler of this.customHandlers) {
			customHandler(input, key);
		}

		return null;
	}
}

DefBuilder.getInstance = () => {
	if (!DefBuilder._instance) DefBuilder._instance = new DefBuilder();
	return DefBuilder._instance;
}

module.exports = DefBuilder;
