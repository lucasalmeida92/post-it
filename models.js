var Sequelize = require('sequelize');
var models = {}

// ==== DATABASE CONNECTION
var db = new Sequelize(
	'postit', //database
	null, //username
	null, //password
	{
	  dialect: 'sqlite',
	  storage: 'database.db'
	}
);

// ==== MODELS
var PostIt = db.define('postIt', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	content: {
		type: Sequelize.TEXT
	}
});

models.PostIt = PostIt;

module.exports = models;
