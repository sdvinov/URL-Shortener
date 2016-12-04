const chalk = require('chalk');
function debug(d, path, level) {
  if (process.env.DEBUG === "true") {
    const fs = require('fs');
    const date = new Date();
    const filePath = './logs/debug.log';
    level = level.toUpperCase();

    if (level === 'NOTICE') {
      const data = `${level} [${date}] FILE: ${path} SAYS: "${d}" \n`;
      const logFile = fs.appendFile(filePath, data, (err) => {
        if (err) throw err;
      });
      console.log(chalk.green(data));
    } else if (level === 'WARNING') {
      const data = `${level} [${date}] FILE: ${path} SAYS: "${d}" \n`;
      const logFile = fs.appendFile(filePath, data, (err) => {
        if (err) throw err;
      });
      console.log(chalk.yellow(data));
    }
    else if (level === 'ERROR') {
      const data = `${level} [${date}] FILE: ${path} SAYS: "${d}" \n`;
      const logFile = fs.appendFile(filePath, data, (err) => {
        if (err) throw err;
      });
      console.log(chalk.red(data));
    }
  }
}

exports.debug = debug;
