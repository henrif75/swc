//// [circularImportAlias.ts]
var B, A;
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
!function(B) {
    var a = A;
    B.a = a;
    var D = function(_a_C) {
        "use strict";
        _inherits(D, _a_C);
        var _super = _create_super(D);
        function D() {
            return _class_call_check(this, D), _super.apply(this, arguments);
        }
        return D;
    }(a.C);
    B.D = D;
}(B || (B = {})), function(A) {
    A.C = function C() {
        "use strict";
        _class_call_check(this, C);
    };
    var b = B;
    A.b = b;
}(A || (A = {})), new B.a.C();
