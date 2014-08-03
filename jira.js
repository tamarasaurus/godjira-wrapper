var Jira = require('./index'),

jira = new Jira({
    user: '',
    pass: '',
    host: ''
});

console.log(jira);
jira.getProjects();
