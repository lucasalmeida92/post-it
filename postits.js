var PostIt = require('./models').PostIt;

module.exports = {
	// GET: All
	index(req, res) {
		PostIt.findAll().then(function(postIts){
				res.status(200).json(postIts);
			}).catch(function (error){
	      res.status(500).json(error);
	    });
	},
	// CREATE
	create(req, res) {
		var data = {
			content: req.body.content
		}
		PostIt.sync().then(function(){
			PostIt.create(data).then(function (newPostIt) {
	        res.status(200).json(newPostIt);
	      })
	      .catch(function (error){
	        res.status(500).json(error);
	      });
		});
	},
	// UPDATE
	update(req, res) {
		PostIt.update(req.body, {
	      where: {
	        id: req.body.id
	      }
	    })
	    .then(function (updatedPostIt) {
	      res.status(200).json(updatedPostIt);
	    })
	    .catch(function (error){
	      res.status(500).json(error);
	    });
	},
	// DELETE
	delete(req, res) {
		PostIt.destroy({
	      where: {
	        id: req.body.id
	      }
	    })
	    .then(function (deletedPostIt) {
	      res.status(200).json('deleted with success.');
	    })
	    .catch(function (error){
	      res.status(500).json(error);
	    });
	}
}
