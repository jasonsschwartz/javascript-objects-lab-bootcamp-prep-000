var recipes = new Object()
var newObj = new Object()

function updateObjectWithKeyAndValue(object, key, value){
  //object[key] = value
  newObj = Object.assign({key: value}, object)
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
  object.assign({})
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}