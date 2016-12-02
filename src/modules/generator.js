exports.randomValue = (charsToGenerate) => {
  let generated = '';
  const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for(let i = 0; i < charsToGenerate; i++) {
    generated += string.charAt(Math.round(Math.random() * (string.length - 1)));
  }
  return generated;
};
