var ins = ""; // Instructions go here

var level = function(str, firstTimeAtLevel) {
                var floor = 0;
                var firstIndex = false;
                var getFloor = function(char, index) {
                    if(char==="(") {floor++} 
                    else if (char===")") {floor--} 
                    if(!firstIndex){
                        if (floor===firstTimeAtLevel) {firstIndex = index-1 ; console.log(floor)} // Argh, why not zero-index?
                    }
                };
                str.split('').forEach(getFloor);
                return { result: floor, firstIndex: firstIndex };
            };
            
var result = level(ins, -1);
console.log(result);

