var inquirer = require('inquirer');
var Rx = require('rx');


var observable = new Rx.Subject();

inquirer.prompt(observable).ui.process.subscribe(
    function(ans) {
        console.log('Answer is: ', ans);
    },
    function(err) {
        console.log('Error: ', err);
    },
    function() {
        console.log('Completed');
    }
);
observable.next({
    type: 'input',
    name: 'first_name',
    message: "What's your first name"
})