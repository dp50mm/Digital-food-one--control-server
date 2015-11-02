/**
 * PhotoController
 *
 * @description :: Server-side logic for managing Photos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {

		Photo.create({name:'test test'}).exec(function createPhoto(err, created) {
			console.log('created photo with name: '+created.name);
		});
		return res.view('photo/photography', {
			title:'Photography',
			layout:'main'
		});
	}
};
