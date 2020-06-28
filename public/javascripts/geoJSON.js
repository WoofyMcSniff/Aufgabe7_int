/** Class containing methods for geoJSON processing*/
class GeoJSON{
  constructor(){
    this.featureCollection = { "type": "FeatureCollection", "features": [] };
    this.pointFeature = { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [] } };
  }

  /**
  * arrayToGeoJSON
  * @public
  * @desc method that converts a given array of points into a geoJSON feature collection.
  * @param inputArray Array that is to be converted
  * @returns JSON of a geoJSON feature collectio
  */
  arrayToGeoJSON(inputArray) {
    //reset the skeleton, because it's an object reference
    this.featureCollection = { "type": "FeatureCollection", "features": [] };
    //"Skeleton" of a valid geoJSON Feature collection
    let outJSON = this.featureCollection;

    //turn all the points in the array into proper features and append
    for (const element of inputArray) {
      let newFeature = this.pointFeature;
      newFeature.geometry.coordinates = element;
      outJSON.features.push(JSON.parse(JSON.stringify(newFeature)));
    }

    return outJSON;
  }

  /**
  * isValidGeoJSONPoint
  * @public
  * @desc method that validates the input GeoJSON so it'S only a point
  * @param geoJSON the input JSON that is to be validated
  * @returns boolean true if okay, false if not
  */
  isValidGeoJSONPoint(geoJSON) {
    if (geoJSON.features.length == 1 &&
      geoJSON.features[0].geometry.type.toUpperCase() == "POINT"
    ) {
      return true;
    } else {
      return false;
    }
  }

}