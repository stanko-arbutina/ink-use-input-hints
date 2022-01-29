'use strict';
const React = require('react');
const importJsx = require('import-jsx');
const {Newline} = require("ink");
const HintBar = importJsx('./HintBar');
const InputHintsContextProvider = importJsx('./InputHintsContextProvider');
const DefaultHintBarProps = require('./DefaultHintBarProps');
const InputHints = ({children, hintBarProps = DefaultHintBarProps}) => {
	return (<InputHintsContextProvider>
		{children}
		<Newline />
		<HintBar {...hintBarProps}/>
	</InputHintsContextProvider>);
};

module.exports = InputHints;
