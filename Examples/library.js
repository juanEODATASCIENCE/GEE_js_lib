/*
A sample Earth Engine JavaScript library.
The script is adapted from https://code.earthengine.google.com/2bca4e5f36d5a2d642475a98fa421fa9
Credits to Gennadii Donchyts.
*/

var oeel=require('users/OEEL/lib:loadAll')

var NDVI = function(img){
  return image.expression('float(b("B4") - b("B3")) / (b("B4") + b("B3"))');
  
}

exports.NDVI = NDVI;
