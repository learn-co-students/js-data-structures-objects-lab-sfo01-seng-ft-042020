// Write your solution in this file!


const driver = {};

// let p1 = {
//     ...person
// };

// updateDriverWithKeyAndValue()- this function should take in three arguments: a driver Object, a key and a value. This function should not mutate the driver and should return a new driver that has an updated value for the key passed in.

function updateDriverWithKeyAndValue(obj, key, value){
    // const newDriver = obj;
    // newDriver[key] = value;
    // return newDriver;
    let p1 = {
        ...obj
    };
    p1[key] = value;
    return p1;
}

// destructivelyUpdateDriverWithKeyAndValue() - this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

// deleteFromDriverByKey() - this function should take in a driver Object and a key. It should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.

function deleteFromDriverByKey(obj, key){
    // const newObj = obj;
    // newObj[key].delete;
    // return newObj;
    let p1 = {
        ...obj
    };
    // p1[key].delete;
    delete p1[key];
    return p1;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}
// 1) returns driver without the delete key/value pair
// 2) modifies the original driver




















