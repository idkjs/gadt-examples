// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Map = require("bs-platform/lib/js/map.js");
var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Printf = require("bs-platform/lib/js/printf.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

function Generalize(Db) {
  var create = function (args) {
    return /* GenericDatabase */{
            _0: Db,
            _1: Curry._1(Db.create, args)
          };
  };
  return {
          keys: Db.keys,
          get: Db.get,
          set: Db.set,
          create: create
        };
}

function keys(param) {
  return Curry._1(param._0.keys, param._1);
}

function get(param, key) {
  return Curry._2(param._0.get, param._1, key);
}

function set(param, key, value) {
  var Db = param._0;
  return /* GenericDatabase */{
          _0: Db,
          _1: Curry._3(Db.set, param._1, key, value)
        };
}

function transfer(srcDb, dstDb, func) {
  return List.fold_left((function (db, key) {
                return set(db, key, Curry._1(func, get(srcDb, key)));
              }), dstDb, keys(srcDb));
}

var compare = Caml_obj.caml_compare;

var StringMap = $$Map.Make({
      compare: compare
    });

function Make_in_memory_db(Type) {
  var create = function (param) {
    return StringMap.empty;
  };
  var keys = function (map) {
    return List.map((function (param) {
                  return param[0];
                }), Curry._1(StringMap.bindings, map));
  };
  var get = function (map, key) {
    return Curry._2(StringMap.find, key, map);
  };
  var set = function (map, key, value) {
    return Curry._3(StringMap.add, key, value, map);
  };
  return {
          keys: keys,
          get: get,
          set: set,
          create: create
        };
}

function create(param) {
  return StringMap.empty;
}

function keys$1(map) {
  return List.map((function (param) {
                return param[0];
              }), Curry._1(StringMap.bindings, map));
}

function get$1(map, key) {
  return Curry._2(StringMap.find, key, map);
}

function set$1(map, key, value) {
  return Curry._3(StringMap.add, key, value, map);
}

var Db = {
  keys: keys$1,
  get: get$1,
  set: set$1,
  create: create
};

function create$1(args) {
  return /* GenericDatabase */{
          _0: Db,
          _1: StringMap.empty
        };
}

var StringDbA = {
  keys: keys$1,
  get: get$1,
  set: set$1,
  create: create$1
};

function create$2(param) {
  return StringMap.empty;
}

function keys$2(map) {
  return List.map((function (param) {
                return param[0];
              }), Curry._1(StringMap.bindings, map));
}

function get$2(map, key) {
  return Curry._2(StringMap.find, key, map);
}

function set$2(map, key, value) {
  return Curry._3(StringMap.add, key, value, map);
}

var Db$1 = {
  keys: keys$2,
  get: get$2,
  set: set$2,
  create: create$2
};

function create$3(args) {
  return /* GenericDatabase */{
          _0: Db$1,
          _1: StringMap.empty
        };
}

var StringDbB = {
  keys: keys$2,
  get: get$2,
  set: set$2,
  create: create$3
};

function create$4(param) {
  return StringMap.empty;
}

function keys$3(map) {
  return List.map((function (param) {
                return param[0];
              }), Curry._1(StringMap.bindings, map));
}

function get$3(map, key) {
  return Curry._2(StringMap.find, key, map);
}

function set$3(map, key, value) {
  return Curry._3(StringMap.add, key, value, map);
}

var Db$2 = {
  keys: keys$3,
  get: get$3,
  set: set$3,
  create: create$4
};

function create$5(args) {
  return /* GenericDatabase */{
          _0: Db$2,
          _1: StringMap.empty
        };
}

var IntDb = {
  keys: keys$3,
  get: get$3,
  set: set$3,
  create: create$5
};

function test(param) {
  var db_a = set(set(set(/* GenericDatabase */{
                _0: Db,
                _1: StringMap.empty
              }, "x", "0"), "y", "42"), "z", "-143");
  var db_b = transfer(db_a, /* GenericDatabase */{
        _0: Db$1,
        _1: StringMap.empty
      }, (function (x) {
          return x;
        }));
  var db_c = transfer(db_b, /* GenericDatabase */{
        _0: Db$2,
        _1: StringMap.empty
      }, Caml_format.caml_int_of_string);
  return List.iter((function (k) {
                return Curry._2(Printf.printf(/* Format */{
                                _0: {
                                  TAG: /* String */2,
                                  _0: /* No_padding */0,
                                  _1: {
                                    TAG: /* String_literal */11,
                                    _0: ": ",
                                    _1: {
                                      TAG: /* Int */4,
                                      _0: /* Int_d */0,
                                      _1: /* No_padding */0,
                                      _2: /* No_precision */0,
                                      _3: {
                                        TAG: /* Char_literal */12,
                                        _0: /* "\n" */10,
                                        _1: /* End_of_format */0
                                      }
                                    }
                                  }
                                },
                                _1: "%s: %d\n"
                              }), k, get(db_c, k));
              }), keys(db_c));
}

test(undefined);

exports.Generalize = Generalize;
exports.keys = keys;
exports.get = get;
exports.set = set;
exports.transfer = transfer;
exports.StringMap = StringMap;
exports.Make_in_memory_db = Make_in_memory_db;
exports.StringDbA = StringDbA;
exports.StringDbB = StringDbB;
exports.IntDb = IntDb;
exports.test = test;
/* StringMap Not a pure module */
