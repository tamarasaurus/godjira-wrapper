var Jira = require('./index'),
	jira = new Jira({
		user: '', //jira username
		pass: '', //password
		host: '', //your jira host/instance
		project: {
			key: '', //the project key
			name: '' //the project name
		}
	});

// jira.getProject('OPEN', function(e, res){
//     console.log(e, res.body);
// });

// jira.getUserIssues('tamara.chahine', {startAt: 0}, function(e, res){
//     console.log(e, res.body);
// });

// jira.getIssue('OPEN-2320', function(e, res){
//     console.log('error: ', e);
//     console.log('res body', res.body);
// });

// jira.getRapidViews(function(e, res){
//     console.log(e, res.body);
// });

// jira.getLatestSprint(function(e, res){
//     console.log(e, res);
// });

// jira.getRapidView('121', function(e, res){
//     console.log(e, res);
// });