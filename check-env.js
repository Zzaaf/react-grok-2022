const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const getMessage = (dir) =>
  chalk.bold.red(`Создай файл "${dir}/.env" на основе "${dir}/.env.example"\n`);

function check(dir) {
  const envFile = path.join(dir, '.env');
  if (!fs.existsSync(envFile)) {
    console.log(getMessage(dir));
    process.exit(1);
  }
}

check('client');
check('server');
