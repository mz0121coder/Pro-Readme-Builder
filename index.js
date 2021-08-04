// Dependencies: inquirer, file system, util module, markdown
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
// Write file async for promises based on successful user responses
const writeFileAsync = util.promisify(fs.writeFile);
// Start questions array
const questions = [
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the URL?",
      name: "url",
    },
    {
      type: "input",
      message: "Enter a description of your project",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the usage information?",
      name: "usage",
    },
    {
      type: "input",
      message: "Enter credits for your project",
      name: "credits",
    },
    {
      type: "input",
      message: "Are there any test instructions for this project?",
      name: "tests",
    },