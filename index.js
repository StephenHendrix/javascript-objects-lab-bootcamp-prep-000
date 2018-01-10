<<<<<<< HEAD
var recipes = { breakfast: "banana" }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}

function deleteFromObjectByKey(object, key) {
  var obj = {object: "key"}
  var newObj = Object.assign({}, obj)
  delete newObj.key
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
=======
var recipes = { breakfast: "banana", lunch: "cheese" }
>>>>>>> 282ac6507835dd30e999abd761a90e8ebce4478f
