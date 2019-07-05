var inquirer = require('inquirer');
var { Observable } = require('rxjs');

var observe = Observable.create(function(obs) {
    obs.next({
        type: 'input',
        name: 'first_name',
        message: "What's your first name"
    });

    obs.next({
        type: 'input',
        name: 'last_name',
        message: "What's your last name",
        default: function() {
            return 'Doe';
        }
    });

    obs.next({
        type: 'input',
        name: 'phone',
        message: "What's your phone number",
    });
    obs.complete();
});

inquirer.prompt(observe).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
});