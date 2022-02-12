#!/usr/bin/env node
import {totalLinks, uniqueLinks, brokenLinks} from './stats.js';
import {help} from './help.js';
import {mdLinks} from './mdLinks.js';
import chalk from 'chalk';
import process from 'process';

const arrOptions = process.argv.slice(2);

switch (arrOptions.length) {
  case 0:
    console.log(chalk.redBright.bold('Error: Enter a Path'));
    break;
  case 1:
    mdLinks(arrOptions[0], { validate: false })
      .then((res) => {
        res.forEach((e) => console.log(`${chalk.cyan(e.href)}   ${chalk.greenBright(e.text)}   ${chalk.blackBright(e.file)}`));
      })
      .catch((err) => console.log(chalk.redBright.bold(err)));
    break;
  case 2:
    if (arrOptions[1] === '--validate') {
      mdLinks(arrOptions[0], { validate: true })
        .then((res) => {
          res.forEach((e) => console.log(`${chalk.cyan(e.href)}   ${chalk.greenBright(e.text)}   ${chalk.blackBright(e.file)}   ${chalk.yellowBright.bold(e.status)}   ${chalk.bgBlueBright(e.ok)}`));
        })
        .catch((err) => console.log(chalk.redBright.bold(err)));
    } else if (arrOptions[1] === '--stats') {
      mdLinks(arrOptions[0], { validate: true })
        .then((res) => {
          console.log(`${chalk.cyan.underline('Total:')}  ${totalLinks(res)}`);
          console.log(`${chalk.greenBright.underline('Unique:')}  ${uniqueLinks(res)}`);
        })
        .catch((err) => console.log(chalk.redBright.bold(err)));
    } else if (arrOptions[1] === '--help') {
      console.log(chalk.cyan.bold(help));
    } else console.log(chalk.redBright.bold('Invalid Option'));
    break;
  case 3:
    if ((arrOptions[1] === '--validate' && arrOptions[2] === '--stats') || (arrOptions[1] === '--stats' && arrOptions[2] === '--validate')) {
      mdLinks(arrOptions[0], { validate: true })
        .then(res => {
          console.log(`${chalk.cyan.underline('Total:')}  ${totalLinks(res)}`);
          console.log(`${chalk.greenBright.underline('Unique:')}  ${uniqueLinks(res)}`);
          console.log(`${chalk.redBright.underline('Broken:')}  ${brokenLinks(res)}`);
        })
        .catch((err) => console.log(chalk.redBright.bold(err)));
    } else console.log(chalk.redBright.bold('Invalid Options'));
    break;
  default:
    console.log(chalk.redBright.bold('Wrong Data Entered'));
}
