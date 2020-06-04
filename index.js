const driver = {
}

 function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver,{ [key]: value } )
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriverObj =  Object.assign({}, driver, key);
  delete newDriverObj[key];
  return newDriverObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver
}