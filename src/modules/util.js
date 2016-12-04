const chalk = require('chalk');

function debug(d, path, level) {
  if (process.env.DEBUG === "true") {
    const fs = require('fs');
    const date = new Date();
    const filePath = './logs/debug.log';
    level = level.toUpperCase();

    if(!path) {
      path = "Path not specified";
    }

    if(!d) {
      d = "no message";
    }

    const data = `[${date}] FILE: ${path} SAYS: "${d}" \n`;

    switch (level) {
      case 'N':
      case 'NOTICE':
        level = 'NOTICE';
        console.log(chalk.blue(level + ' ' + data));
        break;
      case 'W':
      case 'WARN':
      case 'WARNING':
        level = 'WARNING';
        console.log(chalk.yellow(level + ' ' + data));
        break;
      case 'E':
      case 'ERR':
      case 'ERROR':
        level = 'ERROR'
        console.log(chalk.red(level + ' ' + data));
        break;
      case 'S':
      case 'SUCCESS':
        level = 'SUCCESS'
        console.log(chalk.green(level + ' ' + data));
        break;
      default:
        level = "Level not specified";
        console.log(chalk.cyan(level + ' ' + data));
        break;
    }
    const logFile = fs.appendFile(filePath, level + ' ' + data, (err) => {
      if (err) throw err;
    });
  }
}

exports.debug = debug;
