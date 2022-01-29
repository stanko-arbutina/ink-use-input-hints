'use strict';
const React = require('react');
const InputHintsContext = require('./InputHintsContext');

const {Text, Box} = require('ink');


const InputHintsContextProvider = ({children}) => {
	const [hints, setHints] = React.useState([]);
	return (<InputHintsContext.Provider value={{hints, setHints}}>
		{children}
	</InputHintsContext.Provider>)
};

module.exports = InputHintsContextProvider;
