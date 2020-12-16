// This object will represent our library containing all the functionality we add to it.
let _ = {
  // my first idea and the test has been passed
  /*
  clamp: function(num, lowBound, upBound){
    if (num < lowBound){
      return lowBound;
    } else if (num > upBound){
      return upBound;
    } else {
      return num;
    }
  }
  */

  clamp: function(num,lower,upper){
    const lowerClampedNumber = Math.max(num,lower)
    const clampedNumber = Math.min(lowerClampedNumber,upper)
    return clampedNumber;

  },
  inRange(number,start,end){
        if( end === undefined){
      end = start;
      start = 0;
    }
    if ( start > end){
      tmp= end;
      end = start;
      start = tmp 
    }

    if(number>= start && number < end){
      return true;
    } else {
      return false;
    }
  },
    words(string) {
      //[string=''] (string): The string to inspect.
      const words = string.split(' ');

return words;
   },

   pad(string,length){
     if (string.length >= length){
       return string;
      } 
       const totalPadding = length - string.length
       const beginningPaddingLength = Math.floor(totalPadding/2);
      const endingPaddingLength =  totalPadding - beginningPaddingLength;
       
       paddedString = ' '.repeat(beginningPaddingLength) + string + ' '.repeat(endingPaddingLength);
      return paddedString;
   },
   //A method that Check to see if the object contain a value at that key 
   has(object, key){
     
       // To access the current value at specified key
       const hasValue =  object['key'];
       
       if(hasValue != undefined ){
         return true;
       } else {
         return false;
       }
     },
     invert(object){
       let invertedObject  = {};
       for(let key in Object)
       {
         const originalValue = object[key];
         let invertedObject = { originalValue : key};
         
       }
       
     return invertedObject
 },
 //This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself.
 findKey(object,predicate){
   //predicate is a function that returns a boolean value
   for (let key in object){
     let value = object[key];
     let predicateReturnValue = predicate(value);
     if(predicateReturnValue === true){
       return key;
      }; 
     };
     return undefined;
},
drop(array,n){
  if( n === undefined){
    n = 1;
  };
  droppedArray = []
  for (let i = n; i < array.length; i++){
    droppedArray[i-n] = array[i];

  }
  return droppedArray;
},
dropWhile(array, predicate) {
  const callbackFunction = (value,index) => {return !predicate(value,index,array)};

  let indexToDrop = array.findIndex(callbackFunction);
  let dropppedArray = this.drop(array, indexToDrop)
  return droppedArray;
  
  },
  chunk(array,size=1){
    
    arrayChunks = [];
    for (let i= 0; i< array.length; i+=size){
      
      let arrayChunk = array.slice(i,size+i);
      arrayChunks.push(arrayChunk);
    } 
    return arrayChunks;
     }
  
}
  
// Do not write or modify code below this line.
module.exports = _;
