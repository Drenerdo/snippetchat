var app = require('../app');
		asserts = require('assert'),
		http = require('http');

descrive('GET /', function(){
	it('should return a 200 status code', function(done){
		http.get({ host: '0.0.0.0', port: 5000 }, function(res){
			assert.deepEqual(res.statusCode, 200)
			done();
		}).on('error', function(e){
			throw new Error(e);
		});
	});
});