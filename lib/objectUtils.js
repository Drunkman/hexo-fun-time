function getObjectValues(obj, expression) {
  var result = [obj];
  if (Array.isArray(obj)) {
    result = obj;
  }
  var elements = expression.split('.');
  for (var ele of elements) {
    result = getProperty(result, ele);
  }
  return result;
}

function getProperty(o, property) {
  var result = [];
  for (var ele of o) {
    if (property === '[]') {
      result = result.concat(ele);
    } else {
      result.push(ele[property]);
    }
  }
  return result;
}

module.exports = {getObjectValues};