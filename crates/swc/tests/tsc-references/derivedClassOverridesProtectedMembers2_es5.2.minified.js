import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var x, y, d2, Derived = function(Base) {
    "use strict";
    _inherits(Derived, Base);
    var _super = _create_super(Derived);
    function Derived(a) {
        return _class_call_check(this, Derived), _super.call(this, a);
    }
    return Derived.prototype.b = function(a) {}, Derived.s = function(a) {}, _create_class(Derived, [
        {
            key: "c",
            get: function() {
                return y;
            },
            set: function(v) {}
        }
    ], [
        {
            key: "t",
            get: function() {
                return y;
            },
            set: function(a) {}
        }
    ]), Derived;
}(function() {
    "use strict";
    function Base(a) {
        _class_call_check(this, Base);
    }
    return Base.prototype.b = function(a) {}, Base.s = function(a) {}, _create_class(Base, [
        {
            key: "c",
            get: function() {
                return x;
            },
            set: function(v) {}
        }
    ], [
        {
            key: "t",
            get: function() {
                return x;
            },
            set: function(v) {}
        }
    ]), Base;
}()), d = new Derived(y);
d.a, d.b(y), d.c, d.d, d.c = y, Derived.r, Derived.s(y), Derived.t, Derived.u, Derived.t = y, d2[""], d2[1];
