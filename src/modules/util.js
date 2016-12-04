function debug(d) {
  const fs = require('fs');

  const date = new Date();
  const filePath = './logs/log';

  // Declaring file ("flag: a" means append)
  const logFile = fs.appendFile(filePath, `[${date}] ${d} \n`, (err) => {
    if (err) throw err;
  });
}

exports.debug = debug;
