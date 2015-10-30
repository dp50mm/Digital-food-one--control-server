/**
 * MotorController
 *
 * @description :: Server-side logic for managing Motors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		return res.view('motor/motor', {
			title: 'motor',
			layout: 'main'
		});
	}
};
