type witness('a) =
  | Int: witness(int)
  | Float: witness(float)
  | String: witness(string);

type item =
  | Item(witness('a), 'a): item;
  
let print = (type a, witness: witness(a), value: a) : unit => {
  let str =
    switch witness {
    | Int => string_of_int(value)
    | Float => Js.Float.toString(value)
    | String => "\"" ++ value ++ "\""
    };
  print_endline(str);
};


let three = 3;
// print(witness(3),three);