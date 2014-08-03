

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

### Return:

* **Object** this

<!-- End index.js -->

