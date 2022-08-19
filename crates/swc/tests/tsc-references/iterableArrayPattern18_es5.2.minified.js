import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var Foo = function(Bar) {
    "use strict";
    _inherits(Foo, Bar);
    var _super = _create_super(Foo);
    function Foo() {
        return _class_call_check(this, Foo), _super.apply(this, arguments);
    }
    return Foo;
}(function Bar() {
    "use strict";
    _class_call_check(this, Bar);
});
!function(param) {
    var _param = _sliced_to_array(param, 2);
    _param[0], _param[1];
}(new (function() {
    "use strict";
    function FooIterator() {
        _class_call_check(this, FooIterator);
    }
    var _proto = FooIterator.prototype;
    return _proto.next = function() {
        return {
            value: new Foo,
            done: !1
        };
    }, _proto[Symbol.iterator] = function() {
        return this;
    }, FooIterator;
}()));
