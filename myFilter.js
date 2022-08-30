Array.prototype.myFilter = function(callback) {
    // Only change code below this line
    const newArray = [];
    for(let i = 0; i < this.length; i++) {
      if(callback(this[i],i,this)) newArray.push(this[i])
    }
    // Only change code above this line
    return newArray;
}