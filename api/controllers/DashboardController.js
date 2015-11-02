/**
 * DashboardController
 *
 * @description :: Server-side logic for managing Dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		return res.view('landingpage' , {
			title:'Dashboard',
			layout:'main'
		});
	}

};
