const chalk = require('chalk');

function debug(d, path, level) {
  if (process.env.DEBUG === "true") {
    const fs = require('fs');
    const date = new Date();
    const filePath = './logs/debug.log';

    if(level) {
      level = level.toUpperCase();
    } else {
      level = "Level not specified";
    }

    if(!path) {
      path = "Path not specified";
    }

    if(!d) {
      d = "no message";
    }

    const data = `${level} [${date}] FILE: ${path} SAYS: "${d}" \n`;
    const logFile = fs.appendFile(filePath, data, (err) => {
      if (err) throw err;
    });

    switch (level) {
      case 'N':
      case 'NOTICE':
        console.log(chalk.blue(data));
        break;
      case 'W':
      case 'WARN':
      case 'WARNING':
        console.log(chalk.yellow(data));
        break;
      case 'E':
      case 'ERR':
      case 'ERROR':
        console.log(chalk.red(data));
        break;
      case 'S':
      case 'SUCCESS':
        console.log(chalk.green(data));
        break;
      default:
        console.log(chalk.cyan(data));
        break;
    }
  }
}

exports.debug = debug;
