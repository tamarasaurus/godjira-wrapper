var request = require('superagent');
var _ = require('underscore');
var Parser = require('./parser'),
	parser = new Parser();

module.exports = function(opts) {
	/**
	 * Wrap http requests with auth and host
	 * @param  {String}   url      REST API endpoint
	 * @param  {Function} callback Callback to run after request
	 * @return {Object}   this
	 */
	this.get = function(url, callback) {
		request.get(opts.host + url)
			.auth(opts.user, opts.pass)
			.end(callback);
		return this;
	};

	/**
	 * Wrap post requests
	 * @see get
	 * @return {Object}  this
	 */
	this.post = function(url, params, callback) {
		request.post(opts.host + url)
			.send(params)
			.auth(opts.user, opts.pass)
			.end(callback);
		return this;
	};

	/**
	 * Use JQL to construct a search query and return the results
	 * @param  {String}   query    The JQL query to search for
	 * @param  {Object}   params   Overrides for jql, startAt or maxResults (and any other api options)
	 * @param  {Function} callback Custom callback
	 * @return {Object}   this
	 */
	this.searcher = function(query, params, callback) {
		this.post('/rest/api/2/search',
			_.extend({
				jql: query,
				startAt: 0,
				maxResults: 50
			}, params), function(e, res) {
				callback(e, res.body);
			});
		return this;
	};

	/**
	 * Return a formatted response containing projects for the specified host
	 */
	this.getProjects = function(cb) {
		this.get('/rest/api/2/project', cb);
	};

	/**
	 * Return the details for a project based on the project key
	 * @param  {String} id The id or project_key
	 */
	this.getProject = function(key, cb) {
		this.get('/rest/api/2/project/' + key, cb);
	};

	/**
	 * Return the issues belonging to a user
	 * @param  {String}   username A Jira username
	 * @param  {Object}   params   Custom parameters to include with the JQL search
	 * @param  {Function} cb       Callback
	 */
	this.getUserIssues = function(username, params, cb) {
		this.searcher('assignee = "' + username + '"', params, cb);
	};

	/**
	 * Get an issue object
	 * @param  {String}   issue The key of the issue
	 * @param  {Function} cb    Callback
	 */
	this.getIssue = function(issue, cb) {
		this.get('/rest/api/2/issue/OPEN-2320', cb);
	};

	/**
	 * Get a sprint by id
	 * @param  {String}   id  The id of a sprint from a rapidboard
	 * @param  {Function} cb Callback
	 */
	this.getSprint = function(id, cb) {
		this.get('/rest/greenhopper/1.0/xboard/work/allData/?rapidViewId=' + id, cb);
	};

	/**
	 * Get the latest sprint from a project. The JIRA API doesn't have a way of connecting the projects directly to sprints so the solution was to first get the rapidviews from a project by doing a string match on the jql query for the view. From the view's id we can get the sprint itself.
	 * @todo cleanup callback hell
	 * @param  {Function} cb [description]
	 * @return {[type]}      [description]
	 */
	this.getLatestSprint = function(cb) {
		var _this = this;
		this.getRapidViews(function(e, res) {
			var view = parser.getActive(parser.getRapidsFromProject(res, opts.project));
			_this.getSprint(view.id, function(err, response) {
				cb(err, response);
			});
		});
	};


	/**
	 * Get all rapidviews for the hosted jira
	 * @param  {Function} cb Callback
	 */
	this.getRapidViews = function(cb) {
		this.get('/rest/greenhopper/1.0/rapidviews/list', cb);
	};

	/**
	 * Get details for a particular rapidview
	 * @return {[type]} [description]
	 */
	this.getRapidView = function(id, cb) {
		this.get(decodeURIComponent('/rest/greenhopper/1.0/xboard/work/allData/?rapidViewId=' + id), cb);
	};

	return this;
};