"use strict";
var moves = "".split(''); // Moves go here

class Universe {
    
    constructor(){
        this.houses = {};
        this.location = {x: 0, y: 0};
        this.roboLocation = {x: 0, y: 0};
        this.turn = true;
        this.visit();
    }
    
    move(direction) {
        var location = (this.turn ? this.location : this.roboLocation);
        switch(direction) {
            case '^':
                location.y++;
                break;
            case 'v':
                location.y--;
                break;
            case '>':
                location.x++;
                break;
            case '<':
                location.x--;
                break;
        }
        this.visit();
    }
    
    visit(){
        var currentTurnlocation = (this.turn ? this.location : this.roboLocation);
        var coordinates = currentTurnlocation.x+'-'+currentTurnlocation.y;
        if(this.houses[coordinates]){
            this.houses[coordinates].visited++;
        } else {
            this.houses[coordinates] = {visited: 1};
        }
        this.turn = !this.turn;
    }
    
    loadMoves(moves){
        var vm = this;
        moves.forEach(function(move){
            vm.move(move);
        });
    }
    
    get housesVisited(){
        var keys = Object.keys(this.houses);
        return keys.length;
    }
}

var universe = new Universe();
universe.loadMoves(moves);
console.log(universe.housesVisited + ' houses visited');