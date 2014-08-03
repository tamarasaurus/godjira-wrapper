var request = require('superagent');
var _ = require('underscore');

module.exports = function(opts) {
	console.log(opts);

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
		this.get('/rest/api/2/project', function(e, res) {
			cb(e, res.body);
		});
	};

	/**
	 * Return the details for a project based on the project key
	 * @param  {String} id The id or project_key
	 */
	this.getProject = function(key, cb) {
		this.get('/rest/api/2/project/' + key, function(e, res) {
			cb(e, res.body);
		});
	};

	/**
	 * Return the issues belonging to a user
	 * @param  {String}   username A Jira username
	 * @param  {Object}   params   Custom parameters to include with the JQL search
	 * @param  {Function} cb       Callback
	 * @return {Object}   this
	 */
	this.getUserIssues = function(username, params, cb) {
		this.searcher('assignee = "' + username + '"', params, function(e, res) {
			cb(e, res);
		});
	};

	this.getIssue = function() {

	};

	this.getSprint = function() {

	};

	this.getLatestSprint = function() {

	};

	this.getRapidView = function() {

	};

	return this;
};