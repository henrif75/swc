//// [destructuringAssignabilityCheck.ts]
import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
import _throw from "@swc/helpers/src/_throw.mjs";
var _ref = _sliced_to_array({}, 0); // should be error
var undefined = undefined !== null ? undefined : _throw(new TypeError("Cannot destructure undefined")); // error correctly
(function(param) {
    var _param = _sliced_to_array(param, 0);
    return 0;
})({}); // should be error
(function(param) {
    var param = param !== null ? param : _throw(new TypeError("Cannot destructure undefined"));
    return 0;
})(undefined); // should be error
function foo(param) {
    var param = param !== null ? param : _throw(new TypeError("Cannot destructure undefined"));
    return 0;
}
function bar(param) {
    var _param = _sliced_to_array(param, 0);
    return 0;
}
var _ref1 = 1, _ref1 = _ref1 !== null ? _ref1 : _throw(new TypeError("Cannot destructure undefined"));
var _ref2 = _sliced_to_array({}, 0);
