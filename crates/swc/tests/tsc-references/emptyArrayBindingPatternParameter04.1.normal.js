//// [emptyArrayBindingPatternParameter04.ts]
import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
function f() {
    var _ref = _sliced_to_array(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [
        1,
        2,
        3,
        4
    ], 0);
    var x, y, z;
}
