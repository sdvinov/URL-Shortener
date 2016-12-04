function debug(d, path, level) {
  if (process.env.DEBUG === "true") {
    const fs = require('fs');
    const date = new Date();
    const filePath = './logs/debug.log';
    const data = `LEVEL ${level} [${date}] FILE: ${path} REPORTS ${d} \n`;
    const logFile = fs.appendFile(filePath, data, (err) => {
      if (err) throw err;
    });
  }
}

exports.debug = debug;
