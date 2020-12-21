const arrayCubeRootToJson = arr => {
  if (
      (["boolean", "undefined"].includes(typeof arr)) 
      || arr.constructor !== Array
      || arr.includes(true) 
      || arr.includes(false) 
      || arr.includes(null) 
      || arr.includes(undefined)
    ) {
    throw "This function only accepts array with numeric values";
  }

  let cubeObject = {};

  arr.forEach( function(element) {
    if (isNaN(element)) {
      throw `"${element}" is not a number to perform cubed root`;
    }
    cubeObject[element] = Math.cbrt(element);
  });

  return cubeObject;
};

export { arrayCubeRootToJson };
