const util = require('utility-tool-sd');
const path = 'src/modules/generator.js';
exports.randomValue = (charsToGenerate) => {
  let generated = '';

  // String from which characters will be taken
  const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // Creating the random value
  for (let i = 0; i < charsToGenerate; i++) {
    generated += string.charAt(Math.round(Math.random() * (string.length - 1)));
  }
  util.debug('ShortLinkID was created', path, 's');
  return generated;
};
