'use strict';
const React = require('react');
const {useMemo, useContext, useEffect } = React;
const { useInput } = require('ink');
const KEYS = require('./keys.enum');
const DefBuilder = require('./DefBuilder');
const InputHintsContext = require('../InputHintsContext');
const config = require('../config');

function useInputWithHints(fn){
	const inputHintsContext = useContext(InputHintsContext);
	const builder = useMemo(() => {
		const tmpBuilder = new DefBuilder();
		fn(tmpBuilder, {KEYS});
		return tmpBuilder;
	}, [fn]);
	useEffect(() => {
		if (config.get('AUTO_UPDATE_HINTS') && inputHintsContext.setHints) {
			inputHintsContext.setHints(builder.hints);
		}
	},[builder.hints.join('-')]);
    useInput((input, key) => {
		builder.handle(input, key);
    });
	return builder.hints;
}

module.exports = useInputWithHints;
