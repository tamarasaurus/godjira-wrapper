godjira-wrapper
===============

JIRA REST API wrapper for node

reference
===============

```javascript

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

    // Get a project
    jira.getProject(_projectkey_, function(e, res){});

    //Get issues for a user
    jira.getUserIssues(_jira username_, {startAt: 0}, function(e, res){});

    //Get an issue
    jira.getIssue(_issue_number_, function(e, res){ });

    //Get rapidviews for the host
    jira.getRapidViews(function(e, res){});

    //Get the latest sprint for project specified in the options
    jira.getLatestSprint(function(e, res){ });

    //Get details of a particular rapidview
    jira.getRapidView('121', function(e, res){});

```

documentation
===============
<!-- Start index.js -->

## get(url, callback)

Wrap http requests with auth and host

### Params:

* **String** *url* REST API endpoint
* **Function** *callback* Callback to run after request

### Return:

* **Object** this

## post()

Wrap post requests

See: get

### Return:

* **Object** this

## searcher(query, params, callback)

Use JQL to construct a search query and return the results

### Params:

* **String** *query* The JQL query to search for
* **Object** *params* Overrides for jql, startAt or maxResults (and any other api options)
* **Function** *callback* Custom callback

### Return:

* **Object** this

## getProjects()

Return a formatted response containing projects for the specified host

## getProject(id)

Return the details for a project based on the project key

### Params:

* **String** *id* The id or project_key

## getUserIssues(username, params, cb)

Return the issues belonging to a user

### Params:

* **String** *username* A Jira username
* **Object** *params* Custom parameters to include with the JQL search
* **Function** *cb* Callback

## getIssue(issue, cb)

Get an issue object

### Params:

* **String** *issue* The key of the issue
* **Function** *cb* Callback

## getSprint(id, cb)

Get a sprint by id

### Params:

* **String** *id* The id of a sprint from a rapidboard
* **Function** *cb* Callback

## getLatestSprint(cb)

Get the latest sprint from a project. The JIRA API doesn't have a way of connecting the projects directly to sprints so the solution was to first get the rapidviews from a project by doing a string match on the jql query for the view. From the view's id we can get the sprint itself.

### Params:

* **Function** *cb* [description]

### Return:

* **[type]** [description]

## getRapidViews(cb)

Get all rapidviews for the hosted jira

### Params:

* **Function** *cb* Callback

## getRapidView()

Get details for a particular rapidview

### Return:

* **[type]** [description]

<!-- End index.js -->

<!-- Start parser.js -->

## getRapidsFromProject(response, An)

Get the rapid id from a project by matching name or key

### Params:

* **Object** *response* The response
* **Object** *An* object containing the name and key of the project

### Return:

* **Array** An array of rapid views for a project

## getActive(rapids)

Return the active sprints by checking sprintSupportEnabled

### Params:

* **Array** *rapids* An array of rapidviews

### Return:

* **Object** Return the active rapidview

<!-- End parser.js -->

<!-- Start jira.js -->

## Jira

<!-- End jira.js -->

