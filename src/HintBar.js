'use strict';
const React = require('react');
const {Text, Box} = require('ink');
const InputHintsContext = require('./InputHintsContext');

const DefaultHintBarProps = require('./DefaultHintBarProps');

const HintBar = ({
					 textProps = {},
					 wrapperProps = {},
					 itemWrapperProps = {},
					 hints = null
				 }
) => {
	const inputHintsContext = !hints && React.useContext(InputHintsContext);
	return (
		<Box {...{...DefaultHintBarProps.wrapperProps, ...wrapperProps}}>
			{
				(hints || inputHintsContext.hints).map((hint, hIndex) => (
					<Box key={hIndex} {...{...DefaultHintBarProps.itemWrapperProps, ...itemWrapperProps}}>
						<Text {...{...DefaultHintBarProps.textProps, ...textProps}}>{hint}</Text>
					</Box>
				))
			}
		</Box>
	)
};

module.exports = HintBar;
