inquirer = require("inquirer")
const questions = [  {
    type: "input",
    name: "managerName",
    message: "What is your manager's name?"
    },
    {
    type: "input",
    name: "managerID",
    message: "What is your manager's id number?"
    },
    {
    type: "input",
    name: "managerEmail",
    message: "What is your manager's email?"
    },
    {
    type: "input",
    name: "managerNum",
    message: "What is your manager's office number?"
    },
    {
    type: "list",
    name: "addEmp",
    message: "Add another team member?",
    choices: [
        "Engineer",
        "Intern",
        "No more members"
    ]
    }
];
// make async and await then run other function
function ask(){
    return inquirer.prompt(questions)    
    }
    function generate(answer) {
        return `
       <div class="card" style="width: 18rem;">
  <img src="assets/download.png" class="card-img-top" alt="...">
  <div class="card-body">
  <p class="card-text">MANAGER</p>
  </div>
  <h5 class="card-title">${answer.managerName}</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${answer.managerID}</li>
    <li class="list-group-item">${answer.managerEmail}</li>
    <li class="list-group-item">${answer.managerNum}s</li>
  </ul>
  </div>
  ` ;  
    }
  

// could use for loop for i < manager.length
/* function generate(answer) {
    return `# ${answer}
    <h5 class="card-title">${answer.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${answer.engineerID}</li>
    <li class="list-group-item">${answer.engineerEmail}</li>
    <li class="list-group-item">${answer.engineerGit}</li>
      `;

} */
module.exports = { 
    ask,
    generate
}   