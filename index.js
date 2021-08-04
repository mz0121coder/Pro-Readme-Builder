// Dependencies: inquirer, file system, util module, markdown
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
// Write file async for promises based on successful user responses
const writeFileAsync = util.promisify(fs.writeFile);
