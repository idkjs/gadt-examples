// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


function print(witness, value) {
  var str;
  switch (witness) {
    case /* Int */0 :
        str = String(value);
        break;
    case /* Float */1 :
        str = value.toString();
        break;
    case /* String */2 :
        str = "\"" + (value + "\"");
        break;
    
  }
  console.log(str);
  
}

exports.print = print;
/* No side effect */