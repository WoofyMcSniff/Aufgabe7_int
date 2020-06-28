//Tests for computeBearing() function

QUnit.test('East_equal_computeBearing()', function(assert) {

  var turfpoint1 = turf.point([7.595737,51.969508]);
  var turfpoint2 = turf.point([7.633953, 51.966587]);

  var turfbearing = turf.bearing(turfpoint1, turfpoint2);

  assert.equal(GeoCalculator.computeBearing([7.595737,51.969508], [7.633953, 51.966587]).toFixed(10), turfbearing.toFixed(10), 'Values are equal to turf calculation (rounded to 10th decimal)');
});

QUnit.test('South_East_equal_computeBearing()', function(assert) {

  var turfpoint1 = turf.point([7.595737,51.969508]);
  var turfpoint2 = turf.point([7.596016, 51.969336]);

  var turfbearing = turf.bearing(turfpoint1, turfpoint2);

  assert.equal(GeoCalculator.computeBearing([7.595737,51.969508], [7.596016, 51.969336]).toFixed(8), turfbearing.toFixed(8), 'Values are equal to turf calculation (rounded to 8th decimal)');
});

QUnit.test('North_equal_computeBearing()', function(assert) {

  var turfpoint1 = turf.point([7.595737,51.969508]);
  var turfpoint2 = turf.point([7.615775,52.026978]);

  var turfbearing = turf.bearing(turfpoint1, turfpoint2);

  assert.equal(GeoCalculator.computeBearing([7.595737,51.969508], [7.615775,52.026978]).toFixed(8), turfbearing.toFixed(8), 'Values are equal to turf calculation (rounded to 8th decimal)');
});

QUnit.test('West_equal_computeBearing()', function(assert) {

  var turfpoint1 = turf.point([7.595737,51.969508]);
  var turfpoint2 = turf.point([7.563615, 51.966761]);

  var turfbearing = turf.bearing(turfpoint1, turfpoint2);

  assert.equal(GeoCalculator.computeBearing([7.595737,51.969508], [7.563615,51.966761]).toFixed(8), turfbearing.toFixed(8), 'Values are equal to turf calculation (rounded to 10th decimal)');
});


QUnit.test('ok_computeBearing()', function(assert) {
assert.ok(GeoCalculator.computeBearing(point, [7.622795, 51.959817]), 'is ok');
assert.ok(GeoCalculator.computeBearing(point, [7.633953, 51.966587]), 'is ok');
assert.ok(GeoCalculator.computeBearing(point, [7.596016, 51.969336]), 'is ok');
assert.ok(GeoCalculator.computeBearing(point, [7.587433, 51.948180]), 'is ok');
assert.ok(GeoCalculator.computeBearing(point, [7.647224, 51.954504]), 'is ok');

});

QUnit.test('notOk_computeBearing()', function(assert) {
assert.notOk(GeoCalculator.computeBearing(point, pointcloud), 'is not ok');
});


// Tests for twoPointDistance() function

QUnit.test('East_twoPointDistance()', function(assert) {

  var turfpoint1 = turf.point([7.595737,51.969508]);
  var turfpoint2 = turf.point([7.633953, 51.966587]);

  var turfdistance = turf.distance(turfpoint1, turfpoint2)*1000;

  assert.equal(GeoCalculator.twoPointDistance([7.595737,51.969508], [7.633953, 51.966587]).toFixed(2), turfdistance.toFixed(2), 'Values are equal to turf calculation (rounded to 2nd decimal)');
});

QUnit.test('South_East_twoPointDistance()', function(assert) {

  var turfpoint1 = turf.point([7.595737,51.969508]);
  var turfpoint2 = turf.point([7.596016, 51.969336]);

  var turfdistance = turf.distance(turfpoint1, turfpoint2)*1000;

  assert.equal(GeoCalculator.twoPointDistance([7.595737,51.969508], [7.596016, 51.969336]).toFixed(2), turfdistance.toFixed(2), 'Values are equal to turf calculation (rounded to 2nd decimal)');
});

QUnit.test('North_twoPointDistance()', function(assert) {

  var turfpoint1 = turf.point([7.595737,51.969508]);
  var turfpoint2 = turf.point([7.615775, 52.026978]);

  var turfdistance = turf.distance(turfpoint1, turfpoint2)*1000;

  assert.equal(GeoCalculator.twoPointDistance([7.595737,51.969508], [7.615775, 52.026978]).toFixed(1), turfdistance.toFixed(1), 'Values are equal to turf calculation (rounded to 1st decimal)');
});

QUnit.test('West_twoPointDistance()', function(assert) {

  var turfpoint1 = turf.point([7.595737,51.969508]);
  var turfpoint2 = turf.point([7.563615, 51.966761]);

  var turfdistance = turf.distance(turfpoint1, turfpoint2)*1000;

  assert.equal(GeoCalculator.twoPointDistance([7.595737,51.969508], [7.563615, 51.966761]).toFixed(1), turfdistance.toFixed(1), 'Values are equal to turf calculation (rounded to 1st decimal)');
});
