var recipes = new Object()
var newObj = new Object()

function updateObjectWithKeyAndValue(object, key, value){
  //object[key] = value
  newObj = Object.assign({}, object)
  //object[key] = value
  newObj[key] = value
  return newObj
}

//function updateObjectWithKeyAndValue(object, key, value){
//  object[key] = value
//  return object
//}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}


function deleteFromObjectByKey(object, key){
  newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}