const chalk = require('chalk');

function debug(message, path, level) {
  if (process.env.DEBUG === 'true') {
    const fs = require('fs');
    const date = new Date();
    let messageLevel = level.toUpperCase();
    let messageOrigin = path;
    let messageContents = message;

    // It is watching for a logs folder in the root folder
    const filePath = './logs/debug.log';

    // If there is no path
    if (!messageOrigin) {
      messageOrigin = 'Path not specified';
    }

    // If there is no data (message)
    if (!messageContents) {
      messageContents = 'no message';
    }

    const data = `[${date}] FILE: ${path} SAYS: "${messageContents}" \n`;

    // Switching colors of the messages in console, depending on the level
    // Also in case of using a shortcut, level changes to a full name
    switch (messageLevel) {
      case 'N':
      case 'NOTICE':
        messageLevel = 'NOTICE';
        console.log(chalk.blue(messageLevel + ' ' + data));
        break;
      case 'W':
      case 'WARN':
      case 'WARNING':
        messageLevel = 'WARNING';
        console.log(chalk.yellow(messageLevel + ' ' + data));
        break;
      case 'E':
      case 'ERR':
      case 'ERROR':
        messageLevel = 'ERROR';
        console.log(chalk.red(messageLevel + ' ' + data));
        break;
      case 'S':
      case 'SUCCESS':
        messageLevel = 'SUCCESS';
        console.log(chalk.green(messageLevel + ' ' + data));
        break;
      default:
        messageLevel = 'Level not specified';
        console.log(chalk.cyan(messageLevel + ' ' + data));
        break;
    }
    // Write to the file logs/debug.log
    fs.appendFile(filePath, messageLevel + ' ' + data, (err) => {
      if (err) throw err;
    });
  }
}

exports.debug = debug;
