godjira-wrapper
===============

JIRA REST API wrapper for node


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

