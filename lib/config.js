"use strict";

const {
  sortBy
} = require("lodash");

const config = new Map();
config.set('AUTO_UPDATE_HINTS', true);
config.set('HINT_FORMATTER_FN', ({
  index,
  formattedKeyDescriptions,
  description
}) => {
  const sortedByLength = sortBy(formattedKeyDescriptions, desc => desc.length);
  const keyList = sortedByLength.join(', ');
  return `${keyList} -- ${description}`;
});
config.set('KEY_FORMATTER_FN', ({
  index,
  key
}) => {
  if (key === ' ') return '<SPACE>';
  if (key.length === 1) return key;
  let words = key.match(/([A-Z]?[^A-Z]*)/g);
  words = words || [key];
  words = words.filter(word => !!word.length);
  return `<${words.map(word => word.toUpperCase()).join(' ')}>`;
});
module.exports = config;