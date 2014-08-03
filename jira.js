var Jira = require('./index'),

jira = new Jira({
    user: '',
    pass: '',
    host: ''
});

jira.getProject('OPEN', function(e, res){
    console.log(e, res);
});

jira.getUserIssues('tamara.chahine', {startAt: 0}, function(e, res){
    console.log(e, res);
});
