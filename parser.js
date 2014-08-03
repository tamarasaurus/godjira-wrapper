var _ = require('underscore');
var S = require('string');

module.exports = function() {

	/**
	 * Get the rapid id from a project by matching name or key
	 * @param  {Object} response The response
	 * @param  {Object} An object containing the name and key of the project
	 * @return {Array}  An array of rapid views for a project
	 */
	this.getRapidsFromProject = function(response, project) {
		var check = [('project = ' + project.key).toLowerCase(), ('project = "' + project.name + '"').toLowerCase()];
		var rapids = [];
		_.each(response.body.views, function(view) {
			if (S(view.filter.query.toLowerCase()).contains(check[0]) || S(view.filter.query.toLowerCase()).contains(check[1])) {
				rapids.push(view);
			}
		});
		return rapids;
	};

	/**
	 * Return the active sprints by checking sprintSupportEnabled
	 * @param  {Array} rapids An array of rapidviews
	 * @return {Object}  Return the active rapidview
	 */
	this.getActive = function(rapids) {
		var active = {};
		_.each(rapids, function(r) {
			if (r.sprintSupportEnabled) {
				active = r;
			}
		});
		return active;
	};
};