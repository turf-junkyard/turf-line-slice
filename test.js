var test = require('tape');
var fs = require('fs');
var pointAlongLine = require('./');
var point = require('turf-point')

var route1 = JSON.parse(fs.readFileSync(__dirname + '/fixtures/route1.geojson'));
var route2 = JSON.parse(fs.readFileSync(__dirname + '/fixtures/route2.geojson'));
var line1 = JSON.parse(fs.readFileSync(__dirname + '/fixtures/line1.geojson'));

test('turf-line-distance', function (t) {
	var pt = point([-97.72750854492188,22.057641623615734]);

	console.log('RESULT:', pointAlongLine(pt, line1, 'miles'))

	t.end();
});
