inquirer = require("inquirer")

const internQ = [
    {
    type: "input",
    name: "internName",
    message: "What is your intern's name?"
    },
    {
    type: "input",
    name: "internID",
    message: "What is your intern's id number?"
    },
    {
    type: "input",
    name: "internEmail",
    message: "What is your intern's email?"
    },
    {
    type: "input",
    name: "internSch",
    message: "What is your intern's school?"
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

function int() {
    return inquirer.prompt(internQ)
}
function generate(answer) {
    return `
    <div class="card" style="width: 18rem;">
  <img src="assets/2972288.svg" class="card-img-top" alt="intern_image"> <p class="card-text">Intern</p>
    <h5 class="card-title">${answer.internName}</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${answer.internID}</li>
    <li class="list-group-item">${answer.internEmail}</li>
    <li class="list-group-item">${answer.internSch}</li>
    </ul>
  </div>
      `;

}

module.exports = { 
    int,
    generate
}   