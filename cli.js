#!/usr/bin/env node
import {totalLinks, uniqueLinks, brokenOfLinksStats} from './stats.js';
import {mdLinks} from './mdLinks.js';

const fileRoute = process.argv.slice(2);

if (fileRoute.length == 1) {
  mdLinks(fileRoute[0], {validate:false})
  .then(res => {
    res.forEach(objeto => {console.log(objeto.href, objeto.text, objeto.file);

    });
  })
  .catch(err => console.log(err))
}
