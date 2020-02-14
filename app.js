const Line = function () {};
const axios = require('axios');
const querystring = require('querystring');
const reader = require('readline-sync');

require('dotenv').config();

Line.prototype.notify = function(text) {
	axios (
		{
			method: 'post',
			url: 'https://notify-api.line.me/api/notify',
			headers: {
				Authorization: `Bearer ${process.env.TOKEN}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			data: querystring.stringify({
				message: text
			}),
		})
		.then(function(res) {
			console.log(res.data);
		})
		.catch(function(err) {
			console.error(err);
		}
	);
}; 
 
module.exports = Line;