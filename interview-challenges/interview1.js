var arr = [-8,0,1,2,5];
var arr = [-8,-1,0,0,2];

// var arr = [-10000,-6000,2,5];

function find(arr) {
   var start = 0;
   var end = arr.length-1;
   var middle = function(){
      return parseInt((end-start)/2);
   };
   var done = function(){
      return (start>=end);
   };

   while(!done()) {

         if (arr[middle()] > middle()) {
            end = middle()
         }

         else if (arr[middle()] < middle()) {
            start = middle();
         }

         else if (arr[middle()] == middle()) {
            return middle();
         }

   }
   return -1;
}

find(arr);
