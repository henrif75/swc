import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var C = function C() {
    "use strict";
    _class_call_check(this, C);
};
C.f1 = 1, console.log(C.f1, C.f2, C.f3), C.f2 = 2, console.log(C.f1, C.f2, C.f3), C.f3 = 3;
