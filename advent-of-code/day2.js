"use strict";
var presentsStr = ""; // Place present data string here!

class Present {
    constructor(str) {
        var dimensions = str.match(/(\d+)x(\d+)x(\d+)/);
        this.length = parseInt(dimensions[1]);
        this.width = parseInt(dimensions[2]);
        this.height = parseInt(dimensions[3]);
    }
    
    get surfaces() {
        var sides = [(this.length * this.width), (this.width * this.height), (this.height * this.length)]
        return sides.concat(sides);
    }
    
    get wpNeeded() {
        var slack = Math.min.apply(null, this.surfaces);
        var needed = this.surfaces.reduce(function(sum, n) {return sum + n});
        return (needed + slack);
    }
    
    get ribbonNeeded() {
        var sides = [this.length, this.width, this.height];
        var sideSum = sides.reduce(function(sum, n) {return sum + n});
        var bow = sides.reduce(function(product, n) {return product * n});
        sideSum -= Math.max.apply(null, sides);
        return (sideSum * 2) + bow;
    }
}

class Presents {
    constructor(str) {
        var newPresent = function(str) {return new Present(str)}
        this.presents = str.split('\n').map(newPresent);
    }
    
    presentsPluck(name){
        var total = 0;
        var add = function(elem) { total += elem[name] };
        this.presents.forEach(add);
        return total;
    }
    
    get wpNeeded() {
        return this.presentsPluck('wpNeeded');
    }   
    
    get ribbonNeeded() {
        return this.presentsPluck('ribbonNeeded');
    }
}


var presents = new Presents(presentsStr);
console.log(presents.wpNeeded + " sq ft of wrapping paper needed.");
console.log(presents.ribbonNeeded + " ft of ribbon needed.");

