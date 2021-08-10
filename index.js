// Dependencies: inquirer, file system, util module, markdown
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const createMarkdown = require("./utils/createMarkdown");
// Write file async for promises based on successful user responses
const writeFileAsync = util.promisify(fs.writeFile);
// Start questions array
const choices = [
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
    {
        type: "list",
        message: "Choose a license from the following list:",
        choices: [
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "MIT License",
          "BSD T-Clause 'Simplified' License",
          "BSD 3-Clause 'New' or 'Revised' License",
          "Creative Commons Zero v1.0 Universal",
          "Eclipse Public License 2.0",
          "GNU Affero General Public License v2.1",
          "GNU General Public License v2.0",
          "GNU Lesser General Public License v2.1",
          "GNU Lesser General Public License v3.0",
          "Mozilla Public License 2.0",
          "The Unilicense",
        ],
        name: "license",
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
    ];
// Prompt user for responses
    function promptUser() {
        return inquirer.prompt(choices);
      }
   // Await responses
      async function init() {
        try {
          const response = await promptUser();    
       // Generate result based on responses
          const readMeText = createMarkdown(response);
          // Write to DEMO-README.md
          await writeFileAsync("DEMO-README.md", readMeText);
        // Log message when file is generated
          console.log("Successfully written responses to DEMO-README.md");
        } catch (err) {
          console.log(err);
        }
      }
      
      init();