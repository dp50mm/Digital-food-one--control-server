/**
 * PhotoController
 *
 * @description :: Server-side logic for managing Photos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		console.log(Photo.connections.productionMysql);
		// Photo.find({name:'test test'}).exec(function findCB(err, found) {
		// 	while(found.length) {
		// 		console.log('Found photo with name: '+found.pop().name);
		// 	}
		// });
		Photo.create({name:'test test'}).exec(function createPhoto(err, created) {
			console.log(err);
			//console.log('created photo with name: '+created.name);
		});
		return res.view('photo/photography', {
			title:'Photography',
			layout:'main'
		});
	}
};
