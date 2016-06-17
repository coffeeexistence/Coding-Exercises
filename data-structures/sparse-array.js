/*
Sparse Arrays
  There are strings. Each string's length is no more than characters. There are also queries. For each
  query, you are given a string, and you need to find out how many times this string occurred previously.

  Input Format
    The first line contains , the number of strings.
    The next lines each contain a string.
    The line contains , the number of queries.
    The following lines each contain a query string.
  Constraints
    Sample Input
      4
      aba
      baba
      aba
      xzxb
      3
      aba
      xzxb
      ab
    Sample Output
      2
      1
      0
  Explanation
    Here, "aba" occurs twice, in the first and third string. The string "xzxb" occurs once in the fourth string, and
    "ab" does not occur at all.
*/

function sparser(stringsArray) {
    var strings = {};
    var parser = {
        occurances: function(query){
            return (strings[query]) ? (strings[query]) : (0);
        },
        add: function(newStr) {
            (strings[newStr]) ? (strings[newStr]++) : (strings[newStr] = 1);
        }
    };
    stringsArray.forEach(parser.add);
    return parser;
}

function processData(input) {
    var lines = input.split('\n');
    var stringCount = parseInt(lines[0]);
    var strings = lines.slice(1, stringCount+1);
    var queryCount = parseInt(lines[stringCount+1]);
    var queryStart = stringCount+2;
    var queries = lines.slice(queryStart, queryStart+queryCount);
    var parser = sparser(strings);
    queries.forEach(function(query){
        console.log(parser.occurances(query));
    });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
